import { Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { ContatoViewComponent } from './contato-view/contato-view.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';

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
        path: 'contato/view',
        component: ContatoViewComponent,
    },
    {
        path: 'contato/form',
        component: ContatoFormComponent,
    },
 ];