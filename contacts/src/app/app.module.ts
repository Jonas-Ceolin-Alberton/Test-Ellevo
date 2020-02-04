import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppContainerModule } from './modules/app-container/app-container.module';
import { AcessoModule } from './core/acesso/acesso.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppContainerModule,
    AppRoutingModule,
    BrowserModule,
    AcessoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
