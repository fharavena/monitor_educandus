import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/common/error/error.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { CategoriaComponent } from './components/curso/categoria/categoria.component';
import { Last30Component } from './components/estadistica/last30/last30.component';
import { NeveraccessComponent } from './components/estadistica/neveraccess/neveraccess.component';
import { NeveraccessdetailComponent } from './components/estadistica/neveraccessdetail/neveraccessdetail.component';

import { AuthGuard } from './shared/guards/auth.guard'

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'inicio', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'inicio/neveraccess', component: NeveraccessComponent, canActivate: [AuthGuard] },
  { path: 'inicio/last30', component: Last30Component, canActivate: [AuthGuard] },
  { path: 'inicio/neveraccess/:rut', component: NeveraccessdetailComponent, canActivate: [AuthGuard] },
  { path: 'inicio/categoria', component: CategoriaComponent, canActivate: [AuthGuard]  },
  { path: 'inicio/logout/:sure', component: LoginComponent, canActivate: [AuthGuard]  },
  { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
