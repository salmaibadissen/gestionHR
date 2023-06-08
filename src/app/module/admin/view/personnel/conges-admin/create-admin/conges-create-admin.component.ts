import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {CongesService} from 'src/app/controller/service/Conges.service';
import {CongesDto} from 'src/app/controller/model/Conges.model';
import {CongesCriteria} from 'src/app/controller/criteria/CongesCriteria.model';
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {DepartementService} from "../../../../../../controller/service/Departement.service";
import {SexeService} from "../../../../../../controller/service/Sexe.service";
import {LocalService} from "../../../../../../controller/service/Local.service";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";
import {SexeDto} from "../../../../../../controller/model/Sexe.model";
import {DepartementDto} from "../../../../../../controller/model/Departement.model";
import {LocalDto} from "../../../../../../controller/model/Local.model";
@Component({
  selector: 'app-conges-create-admin',
  templateUrl: './conges-create-admin.component.html'
})
export class CongesCreateAdminComponent extends AbstractCreateController<CongesDto, CongesCriteria, CongesService>  implements OnInit {

    private _employesElement = new EmployeDto();



    private _validEmployesPassword = true;
    private _validEmployePassword = true;



    constructor(private datePipe: DatePipe, private congesService: CongesService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  ,private employeService: EmployeService, private departementService: DepartementService, private sexeService: SexeService, private localService:LocalService

    ) {
        super(datePipe, congesService, messageService, confirmationService, roleService, router, stringUtilService);
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
  /*  public addEmploye() {
        if( this.item.employe == null )
            this.item.employe = new EmployeDto();
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
        this.item.employe.forEach((element, index) => {
            if (element === p) { this.item.employe.splice(index, 1); }
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
