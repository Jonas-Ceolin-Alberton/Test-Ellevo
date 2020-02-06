import { MatCardModule, MatIconModule, MatButtonModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosComponent } from './contatos/contatos.component';
import { ContatoComponent } from './contato/contato.component';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

@NgModule({
	declarations: [
		ContatosComponent,
		ContatoComponent
	],
	imports: [
		MatButtonModule,
		MatCardModule,
		MatIconModule,
		CommonModule,
		PipeModule
	]
})
export class ContatoModule { }
