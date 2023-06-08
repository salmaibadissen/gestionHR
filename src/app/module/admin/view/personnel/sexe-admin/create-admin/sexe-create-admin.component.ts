import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SexeService} from 'src/app/controller/service/Sexe.service';
import {SexeDto} from 'src/app/controller/model/Sexe.model';
import {SexeCriteria} from 'src/app/controller/criteria/SexeCriteria.model';
@Component({
  selector: 'app-sexe-create-admin',
  templateUrl: './sexe-create-admin.component.html'
})
export class SexeCreateAdminComponent extends AbstractCreateController<SexeDto, SexeCriteria, SexeService>  implements OnInit {



   private _validSexeReference = true;
   private _validSexeLibelle = true;

    constructor(private datePipe: DatePipe, private sexeService: SexeService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, sexeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validSexeReference = value;
        this.validSexeLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSexeReference();
        this.validateSexeLibelle();
    }

    public validateSexeReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validSexeReference = false;
        } else {
            this.validSexeReference = true;
        }
    }
    public validateSexeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validSexeLibelle = false;
        } else {
            this.validSexeLibelle = true;
        }
    }






    get validSexeReference(): boolean {
        return this._validSexeReference;
    }

    set validSexeReference(value: boolean) {
         this._validSexeReference = value;
    }
    get validSexeLibelle(): boolean {
        return this._validSexeLibelle;
    }

    set validSexeLibelle(value: boolean) {
         this._validSexeLibelle = value;
    }



}
