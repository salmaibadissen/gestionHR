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

import { SexeCreateAdminComponent } from './sexe-admin/create-admin/sexe-create-admin.component';
import { SexeEditAdminComponent } from './sexe-admin/edit-admin/sexe-edit-admin.component';
import { SexeViewAdminComponent } from './sexe-admin/view-admin/sexe-view-admin.component';
import { SexeListAdminComponent } from './sexe-admin/list-admin/sexe-list-admin.component';
import { NotationCreateAdminComponent } from './notation-admin/create-admin/notation-create-admin.component';
import { NotationEditAdminComponent } from './notation-admin/edit-admin/notation-edit-admin.component';
import { NotationViewAdminComponent } from './notation-admin/view-admin/notation-view-admin.component';
import { NotationListAdminComponent } from './notation-admin/list-admin/notation-list-admin.component';
import { EmployeCreateAdminComponent } from './employe-admin/create-admin/employe-create-admin.component';
import { EmployeEditAdminComponent } from './employe-admin/edit-admin/employe-edit-admin.component';
import { EmployeViewAdminComponent } from './employe-admin/view-admin/employe-view-admin.component';
import { EmployeListAdminComponent } from './employe-admin/list-admin/employe-list-admin.component';
import { ParcoursUniversitaireCreateAdminComponent } from './parcours-universitaire-admin/create-admin/parcours-universitaire-create-admin.component';
import { ParcoursUniversitaireEditAdminComponent } from './parcours-universitaire-admin/edit-admin/parcours-universitaire-edit-admin.component';
import { ParcoursUniversitaireViewAdminComponent } from './parcours-universitaire-admin/view-admin/parcours-universitaire-view-admin.component';
import { ParcoursUniversitaireListAdminComponent } from './parcours-universitaire-admin/list-admin/parcours-universitaire-list-admin.component';
import { DepartementCreateAdminComponent } from './departement-admin/create-admin/departement-create-admin.component';
import { DepartementEditAdminComponent } from './departement-admin/edit-admin/departement-edit-admin.component';
import { DepartementViewAdminComponent } from './departement-admin/view-admin/departement-view-admin.component';
import { DepartementListAdminComponent } from './departement-admin/list-admin/departement-list-admin.component';
import { PosteCreateAdminComponent } from './poste-admin/create-admin/poste-create-admin.component';
import { PosteEditAdminComponent } from './poste-admin/edit-admin/poste-edit-admin.component';
import { PosteViewAdminComponent } from './poste-admin/view-admin/poste-view-admin.component';
import { PosteListAdminComponent } from './poste-admin/list-admin/poste-list-admin.component';
import { EchelleCreateAdminComponent } from './echelle-admin/create-admin/echelle-create-admin.component';
import { EchelleEditAdminComponent } from './echelle-admin/edit-admin/echelle-edit-admin.component';
import { EchelleViewAdminComponent } from './echelle-admin/view-admin/echelle-view-admin.component';
import { EchelleListAdminComponent } from './echelle-admin/list-admin/echelle-list-admin.component';
import { CongesCreateAdminComponent } from './conges-admin/create-admin/conges-create-admin.component';
import { CongesEditAdminComponent } from './conges-admin/edit-admin/conges-edit-admin.component';
import { CongesViewAdminComponent } from './conges-admin/view-admin/conges-view-admin.component';
import { CongesListAdminComponent } from './conges-admin/list-admin/conges-list-admin.component';
import { AbsenceCreateAdminComponent } from './absence-admin/create-admin/absence-create-admin.component';
import { AbsenceEditAdminComponent } from './absence-admin/edit-admin/absence-edit-admin.component';
import { AbsenceViewAdminComponent } from './absence-admin/view-admin/absence-view-admin.component';
import { AbsenceListAdminComponent } from './absence-admin/list-admin/absence-list-admin.component';
import { LocalCreateAdminComponent } from './local-admin/create-admin/local-create-admin.component';
import { LocalEditAdminComponent } from './local-admin/edit-admin/local-edit-admin.component';
import { LocalViewAdminComponent } from './local-admin/view-admin/local-view-admin.component';
import { LocalListAdminComponent } from './local-admin/list-admin/local-list-admin.component';
import { NotificationCreateAdminComponent } from './notification-admin/create-admin/notification-create-admin.component';
import { NotificationEditAdminComponent } from './notification-admin/edit-admin/notification-edit-admin.component';
import { NotificationViewAdminComponent } from './notification-admin/view-admin/notification-view-admin.component';
import { NotificationListAdminComponent } from './notification-admin/list-admin/notification-list-admin.component';

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
import {ChartModule} from "primeng/chart";
import { EmployeChartAdminComponent } from './employe-admin/chart-admin/employe-chart-admin/employe-chart-admin.component';
import { EmployeBasicAdminComponent } from './employe-basic-admin/employe-basic-admin.component';



@NgModule({
    declarations: [

        SexeCreateAdminComponent,
        SexeListAdminComponent,
        SexeViewAdminComponent,
        SexeEditAdminComponent,
        NotationCreateAdminComponent,
        NotationListAdminComponent,
        NotationViewAdminComponent,
        NotationEditAdminComponent,
        EmployeCreateAdminComponent,
        EmployeListAdminComponent,
        EmployeViewAdminComponent,
        EmployeEditAdminComponent,
        ParcoursUniversitaireCreateAdminComponent,
        ParcoursUniversitaireListAdminComponent,
        ParcoursUniversitaireViewAdminComponent,
        ParcoursUniversitaireEditAdminComponent,
        DepartementCreateAdminComponent,
        DepartementListAdminComponent,
        DepartementViewAdminComponent,
        DepartementEditAdminComponent,
        PosteCreateAdminComponent,
        PosteListAdminComponent,
        PosteViewAdminComponent,
        PosteEditAdminComponent,
        EchelleCreateAdminComponent,
        EchelleListAdminComponent,
        EchelleViewAdminComponent,
        EchelleEditAdminComponent,
        CongesCreateAdminComponent,
        CongesListAdminComponent,
        CongesViewAdminComponent,
        CongesEditAdminComponent,
        AbsenceCreateAdminComponent,
        AbsenceListAdminComponent,
        AbsenceViewAdminComponent,
        AbsenceEditAdminComponent,
        LocalCreateAdminComponent,
        LocalListAdminComponent,
        LocalViewAdminComponent,
        LocalEditAdminComponent,
        NotificationCreateAdminComponent,
        NotificationListAdminComponent,
        NotificationViewAdminComponent,
        NotificationEditAdminComponent,
        EmployeChartAdminComponent,
        EmployeBasicAdminComponent,

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
    ],
    exports: [
        SexeCreateAdminComponent,
        SexeListAdminComponent,
        SexeViewAdminComponent,
        SexeEditAdminComponent,
        NotationCreateAdminComponent,
        NotationListAdminComponent,
        NotationViewAdminComponent,
        NotationEditAdminComponent,
        EmployeCreateAdminComponent,
        EmployeListAdminComponent,
        EmployeViewAdminComponent,
        EmployeEditAdminComponent,
        ParcoursUniversitaireCreateAdminComponent,
        ParcoursUniversitaireListAdminComponent,
        ParcoursUniversitaireViewAdminComponent,
        ParcoursUniversitaireEditAdminComponent,
        DepartementCreateAdminComponent,
        DepartementListAdminComponent,
        DepartementViewAdminComponent,
        DepartementEditAdminComponent,
        PosteCreateAdminComponent,
        PosteListAdminComponent,
        PosteViewAdminComponent,
        PosteEditAdminComponent,
        EchelleCreateAdminComponent,
        EchelleListAdminComponent,
        EchelleViewAdminComponent,
        EchelleEditAdminComponent,
        CongesCreateAdminComponent,
        CongesListAdminComponent,
        CongesViewAdminComponent,
        CongesEditAdminComponent,
        AbsenceCreateAdminComponent,
        AbsenceListAdminComponent,
        AbsenceViewAdminComponent,
        AbsenceEditAdminComponent,
        LocalCreateAdminComponent,
        LocalListAdminComponent,
        LocalViewAdminComponent,
        LocalEditAdminComponent,
        NotificationCreateAdminComponent,
        NotificationListAdminComponent,
        NotificationViewAdminComponent,
        NotificationEditAdminComponent,
        EmployeChartAdminComponent,

    ],
  entryComponents: [],
})
export class PersonnelAdminModule { }