import { Injectable } from '@angular/core';

import { Usuario } from 'src/app/shared/models/usuario.model';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor() { }

	loggedIn() {
		return true;
	}

	doLogin(usuario: Usuario) {
		
	}

	logout() {
		localStorage.clear();
	}
}
