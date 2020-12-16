import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/common/home/home.component';
import { HeaderComponent } from './components/common/header/header.component';
import { LoginComponent } from './components/common/login/login.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ErrorComponent } from './components/common/error/error.component';
import { NeveraccessComponent } from './components/estadistica/neveraccess/neveraccess.component';
import { NeveraccessdetailComponent } from './components/estadistica/neveraccessdetail/neveraccessdetail.component';
import { Last30Component } from './components/estadistica/last30/last30.component';
import { CategoriaComponent } from './components/curso/categoria/categoria.component';
import { CursoListaComponent } from './components/curso/curso-lista/curso-lista.component';
import { CursoDetalleComponent } from './components/curso/curso-detalle/curso-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    ErrorComponent,
    NeveraccessComponent,
    NeveraccessdetailComponent,
    Last30Component,
    CategoriaComponent,
    CursoListaComponent,
    CursoDetalleComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
