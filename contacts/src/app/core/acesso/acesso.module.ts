import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		CommonModule,
		MatCardModule,
		MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
	]
})
export class AcessoModule { }
