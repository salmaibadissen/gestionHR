import {Component, OnInit} from '@angular/core';
import {AbsenceService} from 'src/app/controller/service/Absence.service';
import {AbsenceDto} from 'src/app/controller/model/Absence.model';
import {AbsenceCriteria} from 'src/app/controller/criteria/AbsenceCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-absence-list-admin',
  templateUrl: './absence-list-admin.component.html'
})
export class AbsenceListAdminComponent extends AbstractListController<AbsenceDto, AbsenceCriteria, AbsenceService>  implements OnInit {

    fileName = 'Absence';

  
    constructor(datePipe: DatePipe, absenceService: AbsenceService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, absenceService, messageService, confirmationService, roleService, router, authService, exportService);

    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();

    }

    public async loadAbsences(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Absence', 'list');
        isPermistted ? this.service.findAll().subscribe(absences => this.items = absences,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }
    public initCol() {
        this.cols = [
          //  {field: 'nombreAbsence', header: 'Nombre absence'},
            {field: 'dateAbsence', header: 'Date absence'},
            {field: 'justification', header: 'Justification'},
             {field: 'employe?.password', header: 'Employe'},

        ];
    }



	public initDuplicate(res: AbsenceDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Date absence': this.datePipe.transform(e.dateAbsence , 'dd/MM/yyyy hh:mm'),
                 'Justification': e.justification ,
                 'Employe': e.employe?.password ,
            }
        });

        this.criteriaData = [{
          //  'Nombre absence Min': this.criteria.nombreAbsenceMin ? this.criteria.nombreAbsenceMin : environment.emptyForExport ,
           // 'Nombre absence Max': this.criteria.nombreAbsenceMax ? this.criteria.nombreAbsenceMax : environment.emptyForExport ,
            'Date absence Min': this.criteria.dateAbsenceFrom ? this.datePipe.transform(this.criteria.dateAbsenceFrom , this.dateFormat) : environment.emptyForExport ,
            'Date absence Max': this.criteria.dateAbsenceTo ? this.datePipe.transform(this.criteria.dateAbsenceTo , this.dateFormat) : environment.emptyForExport ,
            'Justification': this.criteria.justification ? this.criteria.justification : environment.emptyForExport ,
           'Employe': this.criteria.employe?.password ? this.criteria.employe?.password : environment.emptyForExport ,

        }];
      }
}
