import { Component, OnInit } from '@angular/core';

import { ContatoService } from 'src/app/shared/services/contato.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { Contato } from 'src/app/shared/models/contato.model';
import { Router } from '@angular/router';

@Component({
	selector: 'app-contatos',
	templateUrl: './contatos.component.html',
	styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

	contatos: Contato[] = [];

	constructor(
		private router: Router,
		private utilService: UtilService,
		private contatoService: ContatoService) { }

	ngOnInit() {
		this.loadContatos();
	}

	loadContatos(): void {
		this.contatoService.getAll().then(
			_contatos => {
				this.contatos = _contatos;
				this.ordernarLista();
			},
			error => this.utilService.aviso('Erro ao carregar contatos')
		);
	}

	ordernarLista(): void {
		this.contatos.sort((a, b) => a.nome.localeCompare(b.nome));
	}

	cadastrarUsuario(): void {
		this.router.navigate(['app/contato/form'], { queryParams: { mode: 'new' } });
	}

	navigateContatoView(contato: Contato): void {
		this.router.navigate(['app/contato/view'], { queryParams: { id: contato.id } });
	}
}
