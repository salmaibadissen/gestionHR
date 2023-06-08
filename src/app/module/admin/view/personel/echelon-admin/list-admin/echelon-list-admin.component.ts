import {Component, OnInit} from '@angular/core';
import {EchelonService} from 'src/app/controller/service/Echelon.service';
import {EchelonDto} from 'src/app/controller/model/Echelon.model';
import {EchelonCriteria} from 'src/app/controller/criteria/EchelonCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EchelleService } from 'src/app/controller/service/Echelle.service';

import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-echelon-list-admin',
  templateUrl: './echelon-list-admin.component.html'
})
export class EchelonListAdminComponent extends AbstractListController<EchelonDto, EchelonCriteria, EchelonService>  implements OnInit {

    fileName = 'Echelon';


  
    constructor(datePipe: DatePipe, echelonService: EchelonService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService) {
        super(datePipe, echelonService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    //  this.loadEchelle();
    }

    public async loadEchelons(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Echelon', 'list');
        isPermistted ? this.service.findAll().subscribe(echelons => this.items = echelons,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'indice', header: 'Indice'},
            {field: 'echelle?.reference', header: 'Echelle'},
        ];
    }


    public async loadEchelle(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Echelon', 'list');
      /*  isPermistted ? this.echelleService.findAllOptimized().subscribe(echelles => this.echelles = echelles,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});*/
    }

	public initDuplicate(res: EchelonDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,

            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
            //'Indice Min': this.criteria.indiceMin ? this.criteria.indiceMin : environment.emptyForExport ,
            //'Indice Max': this.criteria.indiceMax ? this.criteria.indiceMax : environment.emptyForExport ,
        //'Echelle': this.criteria.echelle?.reference ? this.criteria.echelle?.reference : environment.emptyForExport ,
        }];
      }
}
