import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AbstractService<T> {

    constructor(
        private store: string,
        private dbService: NgxIndexedDBService) {
    }

    save(obj: T): Promise<number> {
        return this.dbService.add(this.store, obj);
    }

    update(obj: T): Promise<any> {
        return this.dbService.update(this.store, obj);
    }

    getById(id: string | number): Promise<number> {
        return this.dbService.getByID(this.store, id);
    }

    getAll(): Promise<any[]> {
        return this.dbService.getAll(this.store);
    }

    delete(id: string | number): Promise<any> {
        return this.dbService.delete(this.store, id);
    }
}