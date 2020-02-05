import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { UtilService } from 'src/app/shared/utils/util.service';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
	selector: 'app-cadastro-usuario',
	templateUrl: './cadastro-usuario.component.html',
	styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
	usuario = new Usuario();
	confirmacaoPassword = '';

    @ViewChild('form') form;

	constructor(
		private usuarioService: UsuarioService,
		private authService: AuthService,
		private utilService: UtilService) { }

	ngOnInit() {
	}

	confirmarPassword(confirmacaoPassword: string): void {
        if(this.usuario.senha !== confirmacaoPassword) {
            this.form.controls['confirmacao'].setErrors({'incorrect': true});
        }
	}
	
	onSubmit(): void {
		this.usuarioService.save(this.usuario).then( 
			user => this.authService.doLogin(this.usuario),
			error => this.utilService.aviso('Erro ao tentar cadastrar usuario')
		)
	}
}
