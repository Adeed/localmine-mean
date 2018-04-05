import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/account/login/login.component';
import { RegisterComponent } from './Components/account/register/register.component';
import { PackagesComponent } from './Components/packages/packages.component';
import { InvestorsComponent } from './Components/investors/investors.component';
import { ManageComponent } from './Components/account/manage/manage.component';
import { SupportComponent } from './Components/support/support.component';
import { FaqComponent } from './Components/faq/faq.component';
import { RefferalsComponent } from './Components/refferals/refferals.component';
import { NewsComponent } from './Components/news/news.component';

import { AuthGuard } from 'app/Services/AuthGaurd';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'Login',
        pathMatch: 'full'
    },
    {
        path: 'Dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard]
    },
    {
        path: 'Login',
        component: LoginComponent
    },
    {
        path: 'Register',
        component: RegisterComponent
    },
    {
        path: 'Manage',
        component: ManageComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard]
    },
    {
        path: 'Packages',
        component: PackagesComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard]
    },
    {
        path: 'Announcements',
        component: NewsComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard]
    },
    {
        path: 'Investment',
        component: InvestorsComponent,
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard]
    },
    {
        path: 'Support',
        component: SupportComponent
    },
    {
        path: 'FAQ',
        component: FaqComponent
    },
    {
        path: 'Refferals',
        component: RefferalsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
