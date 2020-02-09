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
    
    salvarContato(contato: Contato): Promise<any> {
        if(contato.id) {
            return this.update(contato);
        }

        contato.id = this.generateId();
        return this.save(contato);
    }
}