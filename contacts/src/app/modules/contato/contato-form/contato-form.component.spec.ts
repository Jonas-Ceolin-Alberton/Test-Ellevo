import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';
import { ContatoFormComponent } from './contato-form.component';

describe('ContatoFormComponent', () => {
	let component: ContatoFormComponent;
	let fixture: ComponentFixture<ContatoFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ContatoFormComponent
			],
			imports: [
				RouterTestingModule,
				MatSnackBarModule,
				NgxIndexedDBModule
			],
			providers: [
				{
					provide: NgxIndexedDBService, useValue: {
						getAll: () => {
							return new Promise(function (resolve, reject) {
							});
						}
					}
				}

			],
			schemas: [
				NO_ERRORS_SCHEMA
			]
		})
			.overrideTemplate(ContatoFormComponent, '')
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContatoFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
