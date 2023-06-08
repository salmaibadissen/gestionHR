import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {PromotionService} from 'src/app/controller/service/Promotion.service';
import {PromotionDto} from 'src/app/controller/model/Promotion.model';
import {PromotionCriteria} from 'src/app/controller/criteria/PromotionCriteria.model';
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {DepartementService} from "../../../../../../controller/service/Departement.service";
import {SexeService} from "../../../../../../controller/service/Sexe.service";
import {LocalService} from "../../../../../../controller/service/Local.service";
import {EchelonService} from "../../../../../../controller/service/Echelon.service";
import {EchelleService} from "../../../../../../controller/service/Echelle.service";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";
import {SexeDto} from "../../../../../../controller/model/Sexe.model";
import {DepartementDto} from "../../../../../../controller/model/Departement.model";
import {LocalDto} from "../../../../../../controller/model/Local.model";
import {EchelleDto} from "../../../../../../controller/model/Echelle.model";
import {EchelonDto} from "../../../../../../controller/model/Echelon.model";
import {GradeService} from "../../../../../../controller/service/Grade.service";
import {GradeDto} from "../../../../../../controller/model/Grade.model";



@Component({
  selector: 'app-promotion-edit-admin',
  templateUrl: './Promotion-edit-admin.component.html'
})
export class PromotionEditAdminComponent extends AbstractEditController<PromotionDto, PromotionCriteria, PromotionService>   implements OnInit {


    private _employesElement = new EmployeDto();



    private _validEmployesPassword = true;
    private _validEmployePassword = true;
    private _validePromotionGrade = true;
    private _validPromotionGrade = true;




    constructor(private datePipe: DatePipe, private promotionService: PromotionService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router ,private  gradeService:GradeService   ,private employeService: EmployeService, private departementService: DepartementService, private sexeService: SexeService, private localService:LocalService, private echelonService: EchelonService, private echelleService: EchelleService

    ) {
        super(datePipe, promotionService, messageService, confirmationService, roleService, router, stringUtilService);
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
        this.echelle = new EchelleDto();
        this.echelon = new EchelonDto();
        this.echelleService.findAll().subscribe((data) => this.echelles = data);
        this.echelonService.findAll().subscribe((data) => this.echelons = data);
        this.grade = new GradeDto();
        this.gradeService.findAll().subscribe((data) => this.grades = data);
}

    get echelle(): EchelleDto {
        return this.echelleService.item;
    }
    set echelle(value: EchelleDto) {
        this.echelleService.item = value;
    }
    get echelon(): EchelonDto {
        return this.echelonService.item;
    }
    set echelon(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelons(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelons(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get echelles(): Array<EchelleDto> {
        return this.echelleService.items;
    }
    set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
    }
    get createEchelonDialog(): boolean {
        return this.echelonService.createDialog;
    }
    set createEchelonDialog(value: boolean) {
        this.echelonService.createDialog= value;
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
        get grades(): Array<GradeDto> {
            return this.gradeService.items;
        }
        set grades(value: Array<GradeDto>) {
            this.gradeService.items = value;
        }
        set createGradeDialog(value: boolean) {
            this.gradeService.createDialog= value;
        }

        get grade(): GradeDto {
            return this.gradeService.item;
        }
        set grade(value: GradeDto) {
            this.gradeService.item = value;
        }
        get employesElement(): EmployeDto {
            if( this._employesElement == null )
                this._employesElement = new EmployeDto();
            return this._employesElement;
        }

    set employesElement(value: EmployeDto) {
        this._employesElement = value;
    }
    public async openCreateGrade(grade: string) {
        const isPermistted = await this.roleService.isPermitted('Grade', 'add');
        if(isPermistted) {
            this.grade = new GradeDto();
            this.createGradeDialog = true;
        }else{
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
    set createEchelleDialog(value: boolean) {
        this.echelleService.createDialog= value;
    }

    public async openCreateEchelle(echelle: string) {
        const isPermistted = await this.roleService.isPermitted('Echelle', 'add');
        if(isPermistted) {
            this.echelle = new EchelleDto();
            this.createEchelleDialog = true;
        }else{
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
    public async openCreateEchelon(echelon: string) {
        const isPermistted = await this.roleService.isPermitted('Echelon', 'add');
        if(isPermistted) {
            this.echelon = new EchelonDto();
            this.createEchelonDialog = true;
        }else{
            this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
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

   /* public addEmployes() {
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





    public setValidation(value: boolean){
        this.validPromotionGrade = value;
        //  this.validGradeCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePromotionGrade();
    }

    public validatePromotionGrade(){
        if (this.stringUtilService.isEmpty(this.item.grade)) {
            this.errorMessages.push('Nom non valide');
            this.validPromotionGrade = false;
        } else {
            this.validPromotionGrade = true;
        }
    }



    get validPromotionGrade(): boolean {
        return this._validPromotionGrade;
    }

    set validPromotionGrade(value: boolean) {
        this._validPromotionGrade = value;
    }


}
