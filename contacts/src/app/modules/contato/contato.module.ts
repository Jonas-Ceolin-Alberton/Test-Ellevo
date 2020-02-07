import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
		MatFormFieldModule,
		MatButtonModule,
        MatInputModule,
		MatCardModule,
		MatIconModule,
		CommonModule,
		FormsModule,
		PipeModule,
	]
})
export class ContatoModule { }
