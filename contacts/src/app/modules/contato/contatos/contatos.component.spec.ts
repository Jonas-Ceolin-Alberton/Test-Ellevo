import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxIndexedDBService, NgxIndexedDBModule } from 'ngx-indexed-db';
import { ContatosComponent } from './contatos.component';

describe('ContatosComponent', () => {
	let component: ContatosComponent;
	let fixture: ComponentFixture<ContatosComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ContatosComponent,
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
			.overrideTemplate(ContatosComponent, '')
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContatosComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

		
	});

	it('should create', () => {
		spyOn(component, 'ngOnInit');
		expect(component).toBeTruthy();
	});
});
