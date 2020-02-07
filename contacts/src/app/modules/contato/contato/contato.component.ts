import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/shared/models/contato.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ContatoService } from 'src/app/shared/services/contato.service';
import { Modo } from './enum/modo.enum';

@Component({
	selector: 'app-contato',
	templateUrl: './contato.component.html',
	styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
	modo: Modo;
	idUser: any;

	contato = new Contato();
	
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private contatoService: ContatoService) {
			this.getModoFromRoute();
		 }

	ngOnInit() {
		this.ngOnInit
	}

	private getModoFromRoute(): void {
		this.route.queryParams.subscribe(params => {
			this.modo = params['mode'];
			this.idUser = params['id'];
		});
	}

	buscarContato(): void {
		this.contato.nome = 'Jonas Ceolin Alberton';
		this.contato.email = 'jonasceolin@gmail.com';
		this.contato.telefone = '48996476056'
	}

	salvarContato(): void {
		this.contatoService.saveNewContato(this.contato);
	}
}
