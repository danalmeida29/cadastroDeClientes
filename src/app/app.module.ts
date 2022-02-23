import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListClientesComponent } from './pages/list-clientes/list-clientes.component';
import { DemoMaterialModule } from './material-module';

import { FormularioPJComponent } from './pages/formulario-pj/formulario-pj.component';
import { FormularioPFComponent } from './pages/formulario-pf/formulario-pf.component';
import { FormulariosComponent } from './pages/formularios/formularios.component';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListClientesComponent,
    FormularioPJComponent,
    FormularioPFComponent,
    FormulariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
