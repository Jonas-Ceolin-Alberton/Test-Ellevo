import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

import { ContatoService } from 'src/app/shared/services/contato.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { Contato } from 'src/app/shared/models/contato.model';

@Component({
	selector: 'app-contato-view',
	templateUrl: './contato-view.component.html',
	styleUrls: ['./contato-view.component.css']
})
export class ContatoViewComponent {

	contato = new Contato();
	id: string;

	constructor(
		private route: ActivatedRoute,
		private utilService: UtilService,
		private contatoService: ContatoService) {

		this.route.queryParams.subscribe(params => {
			this.id = params['id'];
			this.buscarUsuario(this.id)
		});
	}

	private buscarUsuario(id: string): void {
		this.contatoService.getById(id).then(
			_contato => this.contato = _contato,
			_error => this.utilService.aviso('Erro ao buscar o contato')
		);
	}
}
