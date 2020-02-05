import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
	@Output() menuToggle: EventEmitter<any> = new EventEmitter();
	titulo: string = 'Edu';
	nomeUsuario: string;

	constructor(
		private usuarioService: UsuarioService,
		private authService: AuthService,
		private router: Router) {
		this.getNomeUsuario()
	}

	ngOnInit() {
	}

	doLogout(): void {
		this.authService.logout();
	}

	menuClicked(): void {
		this.menuToggle.emit();
	}

	abrirConfiguracoes(): void {
		this.router.navigate(['app/configuracoes']);
	}

	getNomeUsuario(): void {
		const { nome } = this.usuarioService.getInfoUser();
		const index = nome.indexOf(' ');
		this.nomeUsuario = index >= 0 ? nome.substr(0, index) : nome;
	}
}
