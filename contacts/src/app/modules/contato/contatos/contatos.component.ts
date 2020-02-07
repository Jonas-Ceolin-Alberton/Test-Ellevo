import { Component, OnInit } from '@angular/core';

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
		private router: Router) { }

	ngOnInit() {
		this.loadContatos();
	}

	loadContatos(): void {
		this.contatos = [
			{nome: 'Jonas Ceolin Alberton', email: 'jonasceolin@gmail.com', telefone: '48996476056'},
			{nome: 'Matheus warmelin Matias', email: 'matheus@gmail.com', telefone: '48996450546'},
			{nome: 'Cristiano Dacio', email: 'cidacio@gmail.com', telefone: '48996450546'},
		] as any;

		this.ordernarLista();
	}

	ordernarLista(): void {
		this.contatos.sort((a, b) => a.nome.localeCompare(b.nome));
	}

	cadastrarUsuario(): void {
		this.router.navigate(['app/contato'], {queryParams: { mode: 'new'}});
	}
}
