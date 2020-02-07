import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Injectable } from '@angular/core';

import { AbstractService } from './abstract.service';
import { Contato } from '../models/contato.model';

@Injectable({
	providedIn: 'root'
})
export class ContatoService extends AbstractService<Contato> {

	constructor(dbService: NgxIndexedDBService) {
		super('contato', dbService);
    }
    
    saveNewContato(contato: Contato): void {
        contato.id = this.generateId();
        this.save(contato);
    }
}