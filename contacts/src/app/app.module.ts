import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { DB_CONFIG } from './core/db/config';

import { AppContainerModule } from './modules/app-container/app-container.module';
import { AcessoModule } from './modules/acesso/acesso.module';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgxIndexedDBModule.forRoot(DB_CONFIG),
    BrowserAnimationsModule,
    AppContainerModule,
    AppRoutingModule,
    BrowserModule,
    AcessoModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
