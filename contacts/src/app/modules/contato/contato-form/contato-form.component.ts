import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { ContatoService } from 'src/app/shared/services/contato.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { Contato } from 'src/app/shared/models/contato.model';

@Component({
	selector: 'app-contato-form',
	templateUrl: './contato-form.component.html',
	styleUrls: ['./contato-form.component.css']
})
export class ContatoFormComponent {

	contato = new Contato();
	id: string;
	mode: 'new' | 'edit';

	constructor(
		private route: ActivatedRoute,
		private utilService: UtilService,
		private contatoService: ContatoService) {

		this.route.queryParams.subscribe(params => {
			this.getParamsFromRoute(params);
		});
	}

	private getParamsFromRoute(params): void {
		this.id = params['id'];
		this.mode = params['mode'];
		
		if(this.id) this.buscarUsuario(this.id);
	}

	private buscarUsuario(id: string): void {
		this.contatoService.getById(id).then(
			_contato => this.contato = _contato,
			_error => this.utilService.aviso('Erro ao buscar o contato')
		);
	}

	salvarContato(contato): void {
		this.contatoService.salvarContato(contato).then(
			_ok => {
				this.utilService.aviso('Lista atualizada com sucesso!');
				window.history.back();
			},
			_error => this.utilService.aviso('Erro ao tentar salvar')
		)
	}
}
