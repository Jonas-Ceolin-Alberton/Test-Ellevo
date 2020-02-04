import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessoRouting } from './core/acesso/acesso.routing';

const routes: Routes = [
	...AcessoRouting
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
