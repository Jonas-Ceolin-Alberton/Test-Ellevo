import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { Usuario } from '../models/usuario.model';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService extends AbstractService<Usuario> {

	constructor(dbService: NgxIndexedDBService) {
		super('usuario', dbService);
	}

	getInfoUser(): Usuario {
		return JSON.parse(localStorage.getItem('USER'));
	}
}