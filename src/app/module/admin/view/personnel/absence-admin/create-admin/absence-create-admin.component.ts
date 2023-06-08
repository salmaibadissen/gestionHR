import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {AbsenceService} from 'src/app/controller/service/Absence.service';
import {AbsenceDto} from 'src/app/controller/model/Absence.model';
import {AbsenceCriteria} from 'src/app/controller/criteria/AbsenceCriteria.model';
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";
import {EchelonService} from "../../../../../../controller/service/Echelon.service";
import {EchelleService} from "../../../../../../controller/service/Echelle.service";
import {SexeService} from "../../../../../../controller/service/Sexe.service";
import {CongesService} from "../../../../../../controller/service/Conges.service";
import {PromotionService} from "../../../../../../controller/service/Promotion.service";
import {NotationService} from "../../../../../../controller/service/Notation.service";
import {SexeDto} from "../../../../../../controller/model/Sexe.model";
import {NotationDto} from "../../../../../../controller/model/Notation.model";
import {CongesDto} from "../../../../../../controller/model/Conges.model";
import {EchelleDto} from "../../../../../../controller/model/Echelle.model";
import {EchelonDto} from "../../../../../../controller/model/Echelon.model";
import {PromotionDto} from "../../../../../../controller/model/Promotion.model";
import {EmployeCriteria} from "../../../../../../controller/criteria/EmployeCriteria.model";
import {DepartementService} from "../../../../../../controller/service/Departement.service";
import {LocalService} from "../../../../../../controller/service/Local.service";
import {LocalDto} from "../../../../../../controller/model/Local.model";
import {DepartementDto} from "../../../../../../controller/model/Departement.model";
@Component({
  selector: 'app-absence-create-admin',
  templateUrl: './absence-create-admin.component.html'
})
export class AbsenceCreateAdminComponent extends AbstractCreateController<AbsenceDto, AbsenceCriteria, AbsenceService>  implements OnInit {
   private _employesElement = new EmployeDto();



    private _validEmployesPassword = true;
    private _validEmployePassword = true;
    constructor(private datePipe: DatePipe, private absenceService: AbsenceService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService,private router: Router, private employeService: EmployeService, private departementService: DepartementService, private sexeService: SexeService, private localService:LocalService



    ) {
        super(datePipe, absenceService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.employesElement.sexe = new SexeDto();
        this.sexeService.findAll().subscribe((data) => this.sexes = data);
        this.employesElement.departement = new DepartementDto();
        this.departementService.findAll().subscribe((data) => this.departements = data);
        this.employesElement.local = new LocalDto();
        this.localService.findAll().subscribe((data) => this.locals = data);
}




    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }
    get employes(): Array<EmployeDto> {
        return this.employeService.items;
    }
    set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }
    set createEmployeDialog(value: boolean) {
        this.employeService.createDialog= value;
    }

    get employe(): EmployeDto {
        return this.employeService.item;
    }
    set employe(value: EmployeDto) {
        this.employeService.item = value;
    }
    get sexes(): Array<SexeDto> {
        return this.sexeService.items;
    }
    set sexes(value: Array<SexeDto>) {
        this.sexeService.items = value;
    }
    get locals(): Array<LocalDto> {
        return this.localService.items;
    }
    set locals(value: Array<LocalDto>) {
        this.localService.items = value;
    }
    get departements(): Array<DepartementDto> {
        return this.departementService.items;
    }
    set departements(value: Array<DepartementDto>) {
        this.departementService.items = value;
    }
    get employesElement(): EmployeDto {
        if( this._employesElement == null )
            this._employesElement = new EmployeDto();
        return this._employesElement;
    }

    set employesElement(value: EmployeDto) {
        this._employesElement = value;
    }

    public async openCreateEmploye(employe: string) {
        const isPermistted = await this.roleService.isPermitted('Employe', 'add');
        if(isPermistted) {
            this.employe = new EmployeDto();
            this.createEmployeDialog = true;
        }else{
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

  /*  public addEmployes() {
        if( this.item.employes == null )
            this.item.employes = new Array<EmployeDto>();
      //  this.validateEmployes();
        if (this.errorMessages.length === 0) {
            this.item.employes.push({... this.employesElement});
            this.employesElement = new EmployeDto();
        }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
    }*/
  validateEmployes(){
        this.errorMessages = new Array();
        this.validateEmployesPassword();
    }


    public setValidation(value: boolean){
        this.validEmployesPassword = value;
    }
  /*  public deleteEmploye(p: EmployeDto) {
        this.item.employes.forEach((element, index) => {
            if (element === p) { this.item.employes.splice(index, 1); }
        });
    }*/

    public editEmploye(p: EmployeDto) {
        this.employesElement = {... p};
        this.activeTab = 0;
    }
    public validateEmployesPassword(){
        if (this.employesElement.password == null) {
            this.errorMessages.push('Password de la employe est  invalide');
            this.validEmployesPassword = false;
        } else {
            this.validEmployesPassword = true;
        }
    }
    get validEmployesPassword(): boolean {
        return this._validEmployesPassword;
    }
    set validEmployesPassword(value: boolean) {
        this._validEmployesPassword = value;
    }
    get validEmployePassword(): boolean {
        return this._validEmployePassword;
    }
    set validEmployePassword(value: boolean) {
        this._validEmployePassword = value;
    }












}
