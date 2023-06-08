import {Component, OnInit} from '@angular/core';
import {CongesService} from 'src/app/controller/service/Conges.service';
import {CongesDto} from 'src/app/controller/model/Conges.model';
import {CongesCriteria} from 'src/app/controller/criteria/CongesCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {DepartementDto} from "../../../../../../controller/model/Departement.model";
import {PromotionDto} from "../../../../../../controller/model/Promotion.model";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";

@Component({
  selector: 'app-conges-list-admin',
  templateUrl: './conges-list-admin.component.html'
})
export class CongesListAdminComponent extends AbstractListController<CongesDto, CongesCriteria, CongesService>  implements OnInit {

    fileName = 'Conges';
    employes :Array<EmployeDto>;



    constructor(datePipe: DatePipe, congesService: CongesService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService, private employeService: EmployeService
) {
        super(datePipe, congesService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }
    public async loadEmploye(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.employeService.findAllOptimized().subscribe(employes => this.employes = this.employes,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadConges(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Conges', 'list');
        isPermistted ? this.service.findAll().subscribe(congess => this.items = congess,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'duree', header: 'Durée'},
            {field: 'jourRestantParAnnee', header: 'Jour restant par annee'},
            {field: 'status', header: 'Status'},
            {field: 'annee', header: 'Année'},
            {field: 'numeroAutorisation', header: 'Numéro autorisation'},
            {field: 'dateAutorisation', header: 'Date autorisation'},
            {field: 'employe?.cin', header: 'Employe'},

        ];
    }



	public initDuplicate(res: CongesDto) {

	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy'),
               // 'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy HH:mm'),
                 'Jour restant par annee': e.jourRestantParAnnee ,
                  ' Duree ': e.duree ,
                 'Annee': e.annee ,
                 'Numero autorisation': e.numeroAutorisation ,
                 'Date autorisation':this.datePipe.transform(e.dateAutorisation , 'dd/MM/yyyy'),
                 'Status': e.status ,
                'Employe': e.employe?.nom ,
            }
        });

        this.criteriaData = [{
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Date autorisation ': this.criteria.dateAutorisation ? this.datePipe.transform(this.criteria.dateAutorisation , this.dateFormat) : environment.emptyForExport ,
            //'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Jour restant par annee Min': this.criteria.jourRestantParAnneeMin ? this.criteria.jourRestantParAnneeMin : environment.emptyForExport ,
            'Jour restant par annee Max': this.criteria.jourRestantParAnneeMax ? this.criteria.jourRestantParAnneeMax : environment.emptyForExport ,
            'Numero autorisation': this.criteria.numeroAutorisation ? this.criteria.numeroAutorisation : environment.emptyForExport ,
            'Numero autorisation Max': this.criteria.numeroAutorisationMax ? this.criteria.numeroAutorisationMax : environment.emptyForExport ,
            'Numero autorisation Min': this.criteria.numeroAutorisationMin ? this.criteria.numeroAutorisationMin : environment.emptyForExport ,
            'Status': this.criteria.status ? this.criteria.status : environment.emptyForExport ,
            'Duree': this.criteria.duree ? this.criteria.duree : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Employe': this.criteria.employe?.nom ? this.criteria.employe?.nom : environment.emptyForExport ,

        }];
      }
}
