import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheatsheetsModule } from './cheatsheets/cheatsheets.module';
import { BiographiesModule } from './biographies/biographies.module';
import { CheatsheetsComponent } from './cheatsheets/cheatsheets.component';
import { BiographiesComponent } from './biographies/biographies.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cheatsheets',
        component: CheatsheetsComponent
    },
    {
        path: 'biographies',
        component: BiographiesComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CheatsheetsModule,
        BiographiesModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
