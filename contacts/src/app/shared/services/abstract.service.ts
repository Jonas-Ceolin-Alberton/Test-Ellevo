import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AbstractService<T> {


    constructor(private store: string,
        private dbService: NgxIndexedDBService) {
    }

    save(obj): Promise<any> {
        return this.dbService.add(this.store, obj);
    }
}