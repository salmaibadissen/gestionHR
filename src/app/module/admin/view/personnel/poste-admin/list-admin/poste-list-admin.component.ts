import {Component, OnInit} from '@angular/core';
import {PosteService} from 'src/app/controller/service/Poste.service';
import {PosteDto} from 'src/app/controller/model/Poste.model';
import {PosteCriteria} from 'src/app/controller/criteria/PosteCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { DepartementService } from 'src/app/controller/service/Departement.service';

import {DepartementDto} from 'src/app/controller/model/Departement.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-poste-list-admin',
  templateUrl: './poste-list-admin.component.html'
})
export class PosteListAdminComponent extends AbstractListController<PosteDto, PosteCriteria, PosteService>  implements OnInit {

    fileName = 'Poste';

    departements :Array<DepartementDto>;
  
    constructor(datePipe: DatePipe, posteService: PosteService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
, private departementService: DepartementService) {
        super(datePipe, posteService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadDepartement();
    }

    public async loadPostes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Poste', 'list');
        isPermistted ? this.service.findAll().subscribe(postes => this.items = postes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'titre', header: 'Titre'},
            {field: 'discription', header: 'Discription'},
            {field: 'dateAffectation', header: 'Date affectation'},
            {field: 'departement?.id', header: 'Departement'},
        ];
    }


    public async loadDepartement(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Poste', 'list');
        isPermistted ? this.departementService.findAll().subscribe(departements => this.departements = departements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: PosteDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Titre': e.titre ,
                 'Discription': e.discription ,
                'Date affectation': this.datePipe.transform(e.dateAffectation , 'dd/MM/yyyy hh:mm'),
               // 'Departement': e.departement?.id ,
            }
        });

        this.criteriaData = [{
            'Titre': this.criteria.titre ? this.criteria.titre : environment.emptyForExport ,
            'Discription': this.criteria.discription ? this.criteria.discription : environment.emptyForExport ,
            'Date affectation Min': this.criteria.dateAffectationFrom ? this.datePipe.transform(this.criteria.dateAffectationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date affectation Max': this.criteria.dateAffectationTo ? this.datePipe.transform(this.criteria.dateAffectationTo , this.dateFormat) : environment.emptyForExport ,
        //'Departement': this.criteria.departement?.id ? this.criteria.departement?.id : environment.emptyForExport ,
        }];
      }
}
