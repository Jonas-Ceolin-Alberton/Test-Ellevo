import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/shared/models/usuario.model';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	usuario = new Usuario();

	constructor(private AuthService: AuthService) { }

	ngOnInit() {
	}

	onSubmitForm() {
		
	}
}
