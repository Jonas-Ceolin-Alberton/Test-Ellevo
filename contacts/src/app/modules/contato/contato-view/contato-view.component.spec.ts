import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoViewComponent } from './contato-view.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material';
import { NgxIndexedDBModule, NgxIndexedDBService } from 'ngx-indexed-db';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ContatoViewComponent', () => {
	let component: ContatoViewComponent;
	let fixture: ComponentFixture<ContatoViewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				ContatoViewComponent
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
			.overrideTemplate(ContatoViewComponent, '')
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ContatoViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
