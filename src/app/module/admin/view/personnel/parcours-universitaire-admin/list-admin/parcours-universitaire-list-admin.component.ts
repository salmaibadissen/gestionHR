import {Component, OnInit} from '@angular/core';
import {ParcoursUniversitaireService} from 'src/app/controller/service/ParcoursUniversitaire.service';
import {ParcoursUniversitaireDto} from 'src/app/controller/model/ParcoursUniversitaire.model';
import {ParcoursUniversitaireCriteria} from 'src/app/controller/criteria/ParcoursUniversitaireCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-parcours-universitaire-list-admin',
  templateUrl: './parcours-universitaire-list-admin.component.html'
})
export class ParcoursUniversitaireListAdminComponent extends AbstractListController<ParcoursUniversitaireDto, ParcoursUniversitaireCriteria, ParcoursUniversitaireService>  implements OnInit {

    fileName = 'ParcoursUniversitaire';

  
    constructor(datePipe: DatePipe, parcoursUniversitaireService: ParcoursUniversitaireService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, parcoursUniversitaireService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadParcoursUniversitaires(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ParcoursUniversitaire', 'list');
        isPermistted ? this.service.findAll().subscribe(parcoursUniversitaires => this.items = parcoursUniversitaires,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'deplome', header: 'Deplome'},

        ];
    }



	public initDuplicate(res: ParcoursUniversitaireDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Deplome': e.deplome ,
                //'Date obtention': this.datePipe.transform(e.dateObtention , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Deplome': this.criteria.deplome ? this.criteria.deplome : environment.emptyForExport ,
        }];
      }
}
