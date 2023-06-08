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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';

import { EchelonCreateAdminComponent } from './echelon-admin/create-admin/echelon-create-admin.component';
import { EchelonEditAdminComponent } from './echelon-admin/edit-admin/echelon-edit-admin.component';
import { EchelonViewAdminComponent } from './echelon-admin/view-admin/echelon-view-admin.component';
import { EchelonListAdminComponent } from './echelon-admin/list-admin/echelon-list-admin.component';
import { PromotionCreateAdminComponent } from './promotion-admin/create-admin/promotion-create-admin.component';
import { PromotionEditAdminComponent } from './promotion-admin/edit-admin/Promotion-edit-admin.component';
import { PromotionViewAdminComponent } from './promotion-admin/view-admin/promotion-view-admin.component';
import { PromotionListAdminComponent } from './promotion-admin/list-admin/promotion-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';
import {AdminModule} from "../../admin.module";
import {GradeListAdminComponent} from "./grade-admin/list-admin/grade-list-admin.component";
import {GradeCreateAdminComponent} from "./grade-admin/create-admin/grade-create-admin.component";
import {GradeViewAdminComponent} from "./grade-admin/view-admin/grade-view-admin.component";
import {GradeEditAdminComponent} from "./grade-admin/edit-admin/grade-edit-admin.component";
import {ChartModule} from "primeng/chart";
import {PersonnelAdminModule} from "../personnel/personnel-admin.module";



@NgModule({
  declarations: [

    EchelonCreateAdminComponent,
    EchelonListAdminComponent,
    EchelonViewAdminComponent,
    EchelonEditAdminComponent,
    PromotionCreateAdminComponent,
    PromotionListAdminComponent,
    PromotionViewAdminComponent,
    PromotionEditAdminComponent,
    GradeViewAdminComponent,
    GradeCreateAdminComponent,
    GradeEditAdminComponent,
    GradeListAdminComponent
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
    PaginatorModule,
    TranslateModule,
    ChartModule,
    PersonnelAdminModule,
    // AdminModule,
    //AdminModule,
    //  AdminModule,
  ],
  exports: [
  EchelonCreateAdminComponent,
  EchelonListAdminComponent,
  EchelonViewAdminComponent,
  EchelonEditAdminComponent,
  PromotionCreateAdminComponent,
  PromotionListAdminComponent,
  PromotionViewAdminComponent,
  PromotionEditAdminComponent,
      GradeViewAdminComponent,
      GradeCreateAdminComponent,
      GradeEditAdminComponent,
      GradeListAdminComponent
  ],
  entryComponents: [],
})
export class PersonelAdminModule { }