
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { SexeListAdminComponent } from './sexe-admin/list-admin/sexe-list-admin.component';
import { NotationListAdminComponent } from './notation-admin/list-admin/notation-list-admin.component';
import { EmployeListAdminComponent } from './employe-admin/list-admin/employe-list-admin.component';
import { DepartementListAdminComponent } from './departement-admin/list-admin/departement-list-admin.component';
import { PosteListAdminComponent } from './poste-admin/list-admin/poste-list-admin.component';
import { EchelleListAdminComponent } from './echelle-admin/list-admin/echelle-list-admin.component';
import { CongesListAdminComponent } from './conges-admin/list-admin/conges-list-admin.component';
import { AbsenceListAdminComponent } from './absence-admin/list-admin/absence-list-admin.component';
import { LocalListAdminComponent } from './local-admin/list-admin/local-list-admin.component';
import { NotificationListAdminComponent } from './notification-admin/list-admin/notification-list-admin.component';
import {ParcoursUniversitaireListAdminComponent} from "./parcours-universitaire-admin/list-admin/parcours-universitaire-list-admin.component";
import {
    EmployeChartAdminComponent
} from "./employe-admin/chart-admin/employe-chart-admin/employe-chart-admin.component";
import {EmployeBasicAdminComponent} from "./employe-basic-admin/employe-basic-admin.component";
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'sexe',
                            children: [
                                {
                                    path: 'list',
                                    component: SexeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'notation',
                            children: [
                                {
                                    path: 'list',
                                    component: NotationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'employe',
                            children: [
                                {
                                    path: 'list',
                                    component: EmployeListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                       {

                            path: 'parcours-universitaire',
                            children: [
                                {
                                    path: 'list',
                                    component: ParcoursUniversitaireListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'departement',
                            children: [
                                {
                                    path: 'list',
                                    component: DepartementListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'poste',
                            children: [
                                {
                                    path: 'list',
                                    component: PosteListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'echelle',
                            children: [
                                {
                                    path: 'list',
                                    component: EchelleListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'conges',
                            children: [
                                {
                                    path: 'list',
                                    component: CongesListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'absence',
                            children: [
                                {
                                    path: 'list',
                                    component: AbsenceListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'local',
                            children: [
                                {
                                    path: 'list',
                                    component: LocalListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'statistique',
                            children: [
                                {
                                    path: 'sexe',
                                    component: EmployeChartAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'statistique',
                            children: [
                                {
                                    path: 'departement',
                                    component: EmployeBasicAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },


                        {

                            path: 'notification',
                            children: [
                                {
                                    path: 'list',
                                    component: NotificationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class PersonnelAdminRoutingModule { }
