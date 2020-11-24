import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/common/error/error.component';
import { HomeComponent } from './components/common/home/home.component';
import { LoginComponent } from './components/common/login/login.component';
import { NeveraccessComponent } from './components/estadistica/neveraccess/neveraccess.component';
import { NeveraccessdetailComponent } from './components/estadistica/neveraccessdetail/neveraccessdetail.component';

import { AuthGuard } from './shared/guards/auth.guard'

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'neveraccess', component: NeveraccessComponent, canActivate: [AuthGuard] },
  { path: 'neveraccess/:rut', component: NeveraccessdetailComponent, canActivate: [AuthGuard] },
  { path: 'logout/:sure', component: LoginComponent, canActivate: [AuthGuard]  },
  { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
