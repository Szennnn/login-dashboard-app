import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent)},
    {path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
        canActivate: [AuthGuard] 
     },
];
