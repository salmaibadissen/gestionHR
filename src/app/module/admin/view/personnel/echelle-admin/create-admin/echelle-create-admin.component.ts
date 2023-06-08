import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EchelleService} from 'src/app/controller/service/Echelle.service';
import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import {EchelleCriteria} from 'src/app/controller/criteria/EchelleCriteria.model';
@Component({
  selector: 'app-echelle-create-admin',
  templateUrl: './echelle-create-admin.component.html'
})
export class EchelleCreateAdminComponent extends AbstractCreateController<EchelleDto, EchelleCriteria, EchelleService>  implements OnInit {



   private _validEchelleReference = true;


    constructor(private datePipe: DatePipe, private echelleService: EchelleService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, echelleService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.echelle = new EchelleDto();
    this.echelleService.findAll().subscribe((data) => this.echelles = data);
}





    public setValidation(value: boolean){
        this.validEchelleReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEchelleReference();
    }

    public validateEchelleReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validEchelleReference = false;
        } else {
            this.validEchelleReference = true;
        }
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

    get echelle(): EchelleDto {
        return this.echelleService.item;
    }
    set echelle(value: EchelleDto) {
        this.echelleService.item = value;
    }
    get echelles(): Array<EchelleDto> {
        return this.echelleService.items;
    }
    set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
    }
    get createEchelleDialog(): boolean {
       return this.echelleService.createDialog;
    }
    set createEchelleDialog(value: boolean) {
        this.echelleService.createDialog= value;
    }



    get validEchelleReference(): boolean {
        return this._validEchelleReference;
    }

    set validEchelleReference(value: boolean) {
         this._validEchelleReference = value;
    }

    /*get validEchelleReference(): boolean {
        return this._validEchelleReference;
    }
    set validEchelleReference(value: boolean) {
        this._validEchelleReference = value;
    }
  */

}
