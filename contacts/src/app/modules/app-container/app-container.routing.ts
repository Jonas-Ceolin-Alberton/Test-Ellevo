import { Routes } from '@angular/router';
import { AppContainerComponent } from './app-container.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthGuardService } from 'src/app/core/auth/auth-guard.service';

export const AppContainerRouting: Routes = [
   {
       path: 'app',
       component: AppContainerComponent,
       canActivate: [AuthGuardService]
   }
];