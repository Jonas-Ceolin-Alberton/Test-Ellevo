import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { UsuarioService } from 'src/app/shared/services/usuario.service';

@Component({
	selector: 'app-cadastro-usuario',
	templateUrl: './cadastro-usuario.component.html',
	styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
	usuario = new Usuario();
	confirmacaoPassword = '';

    @ViewChild('form') form;

	constructor(private usuarioService: UsuarioService) { }

	ngOnInit() {
	}

	confirmarPassword(confirmacaoPassword: string): void {
        if(this.usuario.senha !== confirmacaoPassword) {
            this.form.controls['confirmacao'].setErrors({'incorrect': true});
        }
	}
	
	onSubmit(): void {
		this.usuarioService.save(this.usuario).then( 
			user => console.log('user', user)
		)
	}
}
