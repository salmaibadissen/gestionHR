import {Component, OnInit} from '@angular/core';
import {EchelleService} from 'src/app/controller/service/Echelle.service';
import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import {EchelleCriteria} from 'src/app/controller/criteria/EchelleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


//import { EchelleService } from 'src/app/controller/service/Echelle.service';

import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-echelle-list-admin',
  templateUrl: './echelle-list-admin.component.html'
})
export class EchelleListAdminComponent extends AbstractListController<EchelleDto, EchelleCriteria, EchelleService>  implements OnInit {

    fileName = 'Echelle';

    echelles :Array<EchelleDto>;
    private echelleService:EchelleService;
  
    constructor(datePipe: DatePipe, echelleService: EchelleService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService) {
        super(datePipe, echelleService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEchelle();
    }

    public async loadEchelles(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Echelle', 'list');
        isPermistted ? this.service.findAll().subscribe(echelles => this.items = echelles,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
           // {field: 'dateActivation', header: 'Date activation'},
           // {field: 'echelle?.reference', header: 'Echelle'},
        ];
    }


    public async loadEchelle(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Echelle', 'list');
        isPermistted ? this.echelleService.findAllOptimized().subscribe(echelles => this.echelles = echelles,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: EchelleDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
               /* 'Date activation': this.datePipe.transform(e.dateActivation , 'dd/MM/yyyy hh:mm'),
                'Echelle': e.echelle?.reference ,*/
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
           // 'Date activation Min': this.criteria.dateActivationFrom ? this.datePipe.transform(this.criteria.dateActivationFrom , this.dateFormat) : environment.emptyForExport ,
         //   'Date activation Max': this.criteria.dateActivationTo ? this.datePipe.transform(this.criteria.dateActivationTo , this.dateFormat) : environment.emptyForExport ,
        //'Echelle': this.criteria.echelle?.reference ? this.criteria.echelle?.reference : environment.emptyForExport ,
        }];
      }
}
