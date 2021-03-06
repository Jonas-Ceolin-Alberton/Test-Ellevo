import { Routes } from '@angular/router';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';

export const AcessoRouting: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroUsuarioComponent
    }
];