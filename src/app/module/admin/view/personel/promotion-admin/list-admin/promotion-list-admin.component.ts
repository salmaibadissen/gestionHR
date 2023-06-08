import {Component, OnInit} from '@angular/core';
import {PromotionService} from 'src/app/controller/service/Promotion.service';
import {PromotionDto} from 'src/app/controller/model/Promotion.model';
import {PromotionCriteria} from 'src/app/controller/criteria/PromotionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';
import {EchelleDto} from "../../../../../../controller/model/Echelle.model";
import {EchelonDto} from "../../../../../../controller/model/Echelon.model";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {DepartementService} from "../../../../../../controller/service/Departement.service";
import {SexeService} from "../../../../../../controller/service/Sexe.service";
import {LocalService} from "../../../../../../controller/service/Local.service";
import {EchelonService} from "../../../../../../controller/service/Echelon.service";
import {EchelleService} from "../../../../../../controller/service/Echelle.service";
import {GradeService} from "../../../../../../controller/service/Grade.service";
import {GradeDto} from "../../../../../../controller/model/Grade.model";

@Component({
  selector: 'app-promotion-list-admin',
  templateUrl: './promotion-list-admin.component.html'
})
export class PromotionListAdminComponent extends AbstractListController<PromotionDto, PromotionCriteria, PromotionService>  implements OnInit {

    fileName = 'Promotion';
    echelles :Array<EchelleDto>;
    echelons :Array<EchelonDto>;
    employes :Array<EmployeDto>;
    private grades: Array<GradeDto>;

  
    constructor(datePipe: DatePipe, promotionService: PromotionService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService,private gradeService:GradeService, private employeService: EmployeService, private departementService: DepartementService, private sexeService: SexeService, private localService:LocalService, private echelonService: EchelonService, private echelleService: EchelleService
) {
        super(datePipe, promotionService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEchelle();
      this.loadEchelon();
      this.loadEmploye();
      this.loadGrade();
    }

    public async loadPromotions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Promotion', 'list');
        isPermistted ? this.service.findAll().subscribe(promotions => this.items = promotions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }
    public async loadEchelle(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Promotion', 'list');
        isPermistted ? this.echelleService.findAllOptimized().subscribe(echelles => this.echelles = echelles,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGrade(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Promotion', 'list');
        isPermistted ? this.gradeService.findAllOptimized().subscribe(grades => this.grades = grades,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEchelon(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Promotion', 'list');
        isPermistted ? this.echelonService.findAllOptimized().subscribe(echelons => this.echelons = echelons,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEmploye(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Promotion', 'list');
        isPermistted ? this.employeService.findAllOptimized().subscribe(grades => this.employes = this.employes,error=>console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }


    public initCol() {
        this.cols = [
            {field: 'grade', header: 'Grade'},
            {field: 'indice', header: 'Indice'},
            {field: 'date activation', header: 'Date activation'},
            {field: 'employe?.password', header: 'Employe'},
            {field: 'echelle?.reference', header: 'Echelle'},
            {field: 'echelon?.reference', header: 'Echelon'},

        ];
    }



	public initDuplicate(res: PromotionDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Grade': e.grade?.libelle ,
                'Date activation': this.datePipe.transform(e.dateActivation , 'dd/MM/yyyy hh:mm'),
                'Indice': e.indice ,
                 'Employe': e.employe?.password ,
                 'Echelle': e.echelle?.reference ,
                 'Echelon': e.echelon?.reference ,
                //'Employe': e.employe?.nom ,


            }
        });

        this.criteriaData = [{
            'Date activation Min': this.criteria.dateActivation ? this.datePipe.transform(this.criteria.dateActivationFrom , this.dateFormat) : environment.emptyForExport ,
            'Date activation Max': this.criteria.dateActivationTo ? this.datePipe.transform(this.criteria.dateActivationTo , this.dateFormat) : environment.emptyForExport ,
            'Indice': this.criteria.indice ? this.criteria.indice : environment.emptyForExport ,
            'Employe': this.criteria.employe?.password ? this.criteria.employe?.password : environment.emptyForExport ,
            'Echelle': this.criteria.echelle?.reference ? this.criteria.echelle?.reference : environment.emptyForExport ,
            'Echelon': this.criteria.echelon?.reference ? this.criteria.echelon?.reference : environment.emptyForExport ,
            'Grade': this.criteria.grade?.libelle ? this.criteria.grade?.libelle : environment.emptyForExport ,

        }];
      }
}
