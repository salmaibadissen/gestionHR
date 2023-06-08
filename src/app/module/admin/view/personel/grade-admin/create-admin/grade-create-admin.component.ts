import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {GradeService} from 'src/app/controller/service/Grade.service';
import {GradeDto} from 'src/app/controller/model/Grade.model';
import {GradeCriteria} from 'src/app/controller/criteria/GradeCriteria.model';
@Component({
  selector: 'app-grade-create-admin',
  templateUrl: './grade-create-admin.component.html'
})
export class GradeCreateAdminComponent extends AbstractCreateController<GradeDto, GradeCriteria, GradeService>  implements OnInit {



   private _validGradeLibelle = true;
   private _validGradeCode = true;

    constructor(private datePipe: DatePipe, private gradeService: GradeService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, gradeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validGradeLibelle = value;
        this.validGradeCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateGradeLibelle();
        this.validateGradeCode();
    }

    public validateGradeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validGradeLibelle = false;
        } else {
            this.validGradeLibelle = true;
        }
    }
    public validateGradeCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validGradeCode = false;
        } else {
            this.validGradeCode = true;
        }
    }






    get validGradeLibelle(): boolean {
        return this._validGradeLibelle;
    }

    set validGradeLibelle(value: boolean) {
         this._validGradeLibelle = value;
    }
    get validGradeCode(): boolean {
        return this._validGradeCode;
    }

    set validGradeCode(value: boolean) {
         this._validGradeCode = value;
    }



}
