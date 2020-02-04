import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		LoginComponent,
		CadastroUsuarioComponent
	],
	imports: [
        MatFormFieldModule,
		MatButtonModule,
        MatInputModule,
		MatCardModule,
		CommonModule,
		RouterModule,
		FormsModule,
	]
})
export class AcessoModule { }
