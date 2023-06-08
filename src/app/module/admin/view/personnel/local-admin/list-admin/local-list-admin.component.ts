import {Component, OnInit} from '@angular/core';
import {LocalService} from 'src/app/controller/service/Local.service';
import {LocalDto} from 'src/app/controller/model/Local.model';
import {LocalCriteria} from 'src/app/controller/criteria/LocalCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-local-list-admin',
  templateUrl: './local-list-admin.component.html'
})
export class LocalListAdminComponent extends AbstractListController<LocalDto, LocalCriteria, LocalService>  implements OnInit {

    fileName = 'Local';

  
    constructor(datePipe: DatePipe, localService: LocalService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, localService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadLocals(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Local', 'list');
        isPermistted ? this.service.findAll().subscribe(locals => this.items = locals,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'localisation', header: 'Localisation'},
        ];
    }



	public initDuplicate(res: LocalDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                'Localisation': e.localisation ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Localisation': this.criteria.localisation ? this.criteria.localisation : environment.emptyForExport ,
           // 'Date occupation poste Max': this.criteria.dateOccupationPosteTo ? this.datePipe.transform(this.criteria.dateOccupationPosteTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
