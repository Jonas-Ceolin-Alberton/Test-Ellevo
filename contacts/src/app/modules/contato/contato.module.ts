import { MatCardModule, MatIconModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosComponent } from './contatos/contatos.component';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
	declarations: [
		ContatosComponent,
		ContatoComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatIconModule,
		PipeModule
	]
})
export class ContatoModule { }
