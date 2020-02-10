import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';
import { CadastroUsuarioComponent } from './cadastro-usuario.component';

describe('CadastroUsuarioComponent', () => {
	let component: CadastroUsuarioComponent;
	let fixture: ComponentFixture<CadastroUsuarioComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				CadastroUsuarioComponent
			],
			imports: [	
				RouterTestingModule,
				MatSnackBarModule,
				NgxIndexedDBModule
			],
			providers: [
				{
					provide: NgxIndexedDBService, useValue: { getAll: () => {
						return new Promise(function(resolve, reject) {
						  });
					}}
				}
				
			],
			schemas: [
				NO_ERRORS_SCHEMA
			]
		})
			.overrideTemplate(CadastroUsuarioComponent, '')
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CadastroUsuarioComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
