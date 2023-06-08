import {Component, OnInit} from '@angular/core';
import {GradeService} from 'src/app/controller/service/Grade.service';
import {GradeDto} from 'src/app/controller/model/Grade.model';
import {GradeCriteria} from 'src/app/controller/criteria/GradeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-grade-list-admin',
  templateUrl: './grade-list-admin.component.html'
})
export class GradeListAdminComponent extends AbstractListController<GradeDto, GradeCriteria, GradeService>  implements OnInit {

    fileName = 'Grade';

  
    constructor(datePipe: DatePipe, gradeService: GradeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, gradeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadGrades(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Grade', 'list');
        isPermistted ? this.service.findAll().subscribe(grades => this.items = grades,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: GradeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
