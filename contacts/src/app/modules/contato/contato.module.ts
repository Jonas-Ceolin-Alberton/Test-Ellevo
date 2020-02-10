import { MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatMenuModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ContatoViewComponent } from './contato-view/contato-view.component';
import { CardContatoComponent } from './card-contato/card-contato.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { ContatosComponent } from './contatos/contatos.component';
import { PipeModule } from 'src/app/shared/pipes/pipe.module';

@NgModule({
	declarations: [
		ContatosComponent,
		ContatoViewComponent,
		CardContatoComponent,
		ContatoFormComponent
	],
	imports: [
		MatFormFieldModule,
		MatButtonModule,
        MatInputModule,
		MatCardModule,
		MatIconModule,
		MatMenuModule,
		CommonModule,
		FormsModule,
		PipeModule,
	]
})
export class ContatoModule { }
