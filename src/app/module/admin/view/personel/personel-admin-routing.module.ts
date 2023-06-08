
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { EchelonListAdminComponent } from './echelon-admin/list-admin/echelon-list-admin.component';
import { PromotionListAdminComponent } from './promotion-admin/list-admin/promotion-list-admin.component';
import {GradeListAdminComponent} from "./grade-admin/list-admin/grade-list-admin.component";
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'echelon',
                            children: [
                                {
                                    path: 'list',
                                    component: EchelonListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'promotion',
                            children: [
                                {
                                    path: 'list',
                                    component: PromotionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'grade',
                            children: [
                                {
                                    path: 'list',
                                    component: GradeListAdminComponent ,
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
export class PersonelAdminRoutingModule { }
