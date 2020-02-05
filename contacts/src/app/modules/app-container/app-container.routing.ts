import { Routes } from '@angular/router';
import { AppContainerComponent } from './app-container.component';
import { AuthGuardService } from 'src/app/core/auth/auth-guard.service';
import { ContatoRouting } from '../contato/contato.routing';

export const AppContainerRouting: Routes = [
   {
       path: 'app',
       component: AppContainerComponent,
       canActivate: [AuthGuardService],
       children: [
        ...ContatoRouting
       ]
   }
];