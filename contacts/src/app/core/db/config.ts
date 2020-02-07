

import { DBConfig } from 'ngx-indexed-db';


export const DB_CONFIG: DBConfig = {
    name: 'APP',
    version: 1,
    objectStoresMeta: [
        {
            store: 'usuario',
            storeConfig: { keyPath: 'email', autoIncrement: false },
            storeSchema: [
                { name: 'nome', keypath: 'nome', options: { unique: false } },
                { name: 'email', keypath: 'email', options: { unique: false } },
                { name: 'senha', keypath: 'senha', options: { unique: false } }
            ]
        },
        {
            store: 'contato',
            storeConfig: { keyPath: 'id', autoIncrement: false },
            storeSchema: [
                { name: 'id', keypath: 'id', options: { unique: true } },
                { name: 'nome', keypath: 'nome', options: { unique: false } },
                { name: 'telefone', keypath: 'telefone', options: { unique: false } },
            ]
        }],
};