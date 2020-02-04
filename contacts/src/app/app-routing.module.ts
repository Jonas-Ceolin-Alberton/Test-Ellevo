import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppContainerRouting } from './modules/app-container/app-container.routing';
import { AcessoRouting } from './core/acesso/acesso.routing';

const routes: Routes = [
	...AcessoRouting,
	...AppContainerRouting
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
