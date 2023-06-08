
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';

import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import {LoginUserComponent} from "./login-user/login-user.component";

@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [
                        {
                            path: 'login',
                            children: [
                                {
                                    path: '',
                                    component: LoginAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                                    path: 'user',
                                    children: [
                                        {
                                            path: '',
                                            component: LoginUserComponent ,
                                            canActivate: [AuthGuard]
                                        }
                                    ]
                                },
                        {
                            path: 'register',
                            children: [
                                {
                                    path: '',
                                    component: RegisterAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                              ]
                        },
                        {

                            path: 'personel',
                            loadChildren: () => import('./view/personel/personel-admin-routing.module').then(x=>x.PersonelAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                        {

                            path: 'personnel',
                            loadChildren: () => import('./view/personnel/personnel-admin-routing.module').then(x=>x.PersonnelAdminRoutingModule),
                            canActivate: [AuthGuard],
                        },
                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class AdminRoutingModule { }
