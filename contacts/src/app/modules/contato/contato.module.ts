import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';

@NgModule({
	declarations: [
		ListaContatosComponent
	],
	imports: [
		CommonModule
	]
})
export class ContatoModule { }
