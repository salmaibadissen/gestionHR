import {Component, OnInit} from '@angular/core';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {DepartementDto} from 'src/app/controller/model/Departement.model';
import {DepartementCriteria} from 'src/app/controller/criteria/DepartementCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { EmployeService } from 'src/app/controller/service/Employe.service';

import {EmployeDto} from 'src/app/controller/model/Employe.model';
import {PosteDto} from 'src/app/controller/model/Poste.model';
import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-departement-list-admin',
  templateUrl: './departement-list-admin.component.html'
})
export class DepartementListAdminComponent extends AbstractListController<DepartementDto, DepartementCriteria, DepartementService>  implements OnInit {

    fileName = 'Departement';

  //  employes :Array<EmployeDto>;


   constructor(datePipe: DatePipe, departementService: DepartementService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService /*, private employeService: EmployeService*/)
    {
        super(datePipe, departementService, messageService, confirmationService, roleService, router, authService, exportService);
    }


    ngOnInit() : void {
       // console.log("ngOnInit");
      this.findPaginatedByCriteria();
        console.log("findPaginatedByCriteria");
        this.initExport();
        console.log("initExport");
        this.initCol();
       //this.loadEmploye();
        console.log("initCol");


    }

    public async loadDepartements(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Departement', 'list');
        isPermistted ? this.service.findAll().subscribe(departements => this.items = departements,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'nom', header: 'Nom'},
            {field: 'discription', header: 'Discription'},
         //  {field: 'employe?.password', header: 'Employe'},
        ];
    }


   /* public async loadEmploye(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Departement', 'list');
        isPermistted ? this.employeService.findAllOptimized().subscribe(employes => this.employes = employes,error=>console.log("hajjaj"+error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }*/

	public initDuplicate(res: DepartementDto) {
      /*  if (res.postes != null) {
             //hajjaj res.postes.forEach(d => { d.departement = null; d.id = null; });
        }
        if (res.employes != null) {
            // res.employes.forEach(d => { d.departement = null; d.id = null; });
        }*/
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Nom': e.nom ,
                 'Discription': e.discription ,
                //'Employe': e.employe?.password ,
            }
        });

        this.criteriaData = [{
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport ,
            'Discription': this.criteria.discription ? this.criteria.discription : environment.emptyForExport ,
        //'Employe': this.criteria.employe?.password ? this.criteria.employe?.password : environment.emptyForExport ,
        }];
      }
}
