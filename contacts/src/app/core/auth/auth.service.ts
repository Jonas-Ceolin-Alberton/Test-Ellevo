import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(
		private usuarioService: UsuarioService,
		private utilService: UtilService,
		private router: Router) { }

	loggedIn() {
		return localStorage.getItem('TOKEN');
	}

	logout() {
		localStorage.clear();
		this.navigateToLogin();
	}

	doLogin(usuario: Usuario): void {
		this.usuarioService.getById(usuario.email).then(
			userDb => {
				if (this.isAuthenticated(usuario, userDb)) {
					this.setFakeToken(userDb.email);
					this.setInfoUser(userDb);
					this.navigateToApp();
				}
			}
		).catch(() => this.showError('Usuário desconhecido'));
	}

	private showError(error: string) {
		this.utilService.aviso(error);
	}

	private isAuthenticated(usuarioForm: Usuario, userDb: Usuario): boolean {
		return usuarioForm.email === userDb.email &&
			usuarioForm.senha === userDb.senha;
	}

	private setFakeToken(token: string): void {
		localStorage.setItem('TOKEN', token);
	}

	private setInfoUser({ email, nome }: Usuario): void {
		localStorage.setItem('USER', JSON.stringify({ email, nome }));
	}

	private navigateToApp(): void {
		this.router.navigate(['/app/contatos']);
	}

	private navigateToLogin(): void {
		this.router.navigate(['/login']);
	}
}
