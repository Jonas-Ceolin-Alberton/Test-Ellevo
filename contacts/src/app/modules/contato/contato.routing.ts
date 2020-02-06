import { Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { ContatoComponent } from './contato/contato.component';

export const ContatoRouting: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'contatos'
    },
    {
        path: 'contatos',
        component: ContatosComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    },

 ];