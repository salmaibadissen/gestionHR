import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import { PersonelAdminModule } from './view/personel/personel-admin.module';
import { PersonelAdminRoutingModule } from './view/personel/personel-admin-routing.module';
import { PersonnelAdminModule } from './view/personnel/personnel-admin.module';
import { PersonnelAdminRoutingModule } from './view/personnel/personnel-admin-routing.module';


import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {GradeCreateAdminComponent} from "./view/personel/grade-admin/create-admin/grade-create-admin.component";
import {TranslateModule} from "@ngx-translate/core";
import {GradeListAdminComponent} from "./view/personel/grade-admin/list-admin/grade-list-admin.component";
import {GradeViewAdminComponent} from "./view/personel/grade-admin/view-admin/grade-view-admin.component";
import {GradeEditAdminComponent} from "./view/personel/grade-admin/edit-admin/grade-edit-admin.component";
import {LoginUserComponent} from "./login-user/login-user.component";


@NgModule({
    declarations: [
        LoginAdminComponent,
        RegisterAdminComponent,
        LoginUserComponent,
       // GradeCreateAdminComponent,
       // GradeListAdminComponent,
       // GradeViewAdminComponent,
        //GradeEditAdminComponent
    ],
    imports: [
        CommonModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        ConfirmDialogModule,
        DialogModule,
        PasswordModule,
        InputTextModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        SplitButtonModule,
        BrowserAnimationsModule,
        DropdownModule,
        TabViewModule,
        InputSwitchModule,
        InputTextareaModule,
        CalendarModule,
        PanelModule,
        MessageModule,
        MessagesModule,
        InputNumberModule,
        BadgeModule,
        MultiSelectModule,
        PersonelAdminModule,
        PersonelAdminRoutingModule,
        PersonnelAdminModule,
        PersonnelAdminRoutingModule,
        TranslateModule,

    ],
    exports: [
        LoginAdminComponent,
        RegisterAdminComponent,

        PersonelAdminModule,
        PersonnelAdminModule,
        //GradeCreateAdminComponent,
        LoginUserComponent,

    ],
  entryComponents: [],
})
export class AdminModule { }
