import {Component, OnInit, Input} from '@angular/core';

import {RoleService} from 'src/app/zynerator/security/Role.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';

import { StringUtilService } from 'src/app/zynerator/util/StringUtil.service';
import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EchelonService} from 'src/app/controller/service/Echelon.service';
import {EchelonDto} from 'src/app/controller/model/Echelon.model';
import {EchelonCriteria} from 'src/app/controller/criteria/EchelonCriteria.model';
import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import {EchelleService} from 'src/app/controller/service/Echelle.service';
@Component({
  selector: 'app-echelon-create-admin',
  templateUrl: './echelon-create-admin.component.html'
})
export class EchelonCreateAdminComponent extends AbstractCreateController<EchelonDto, EchelonCriteria, EchelonService>  implements OnInit {



   private _validEchelonReference = true;
    private _validEchelleReference = true;

    constructor(private datePipe: DatePipe, private echelonService: EchelonService
     , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
    , private confirmationService: ConfirmationService, private router: Router
    ) {
        super(datePipe, echelonService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
  //  this.echelle = new EchelleDto();
   // this.echelleService.findAll().subscribe((data) => this.echelles = data);
}





    public setValidation(value: boolean){
        this.validEchelonReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEchelonReference();
    }

    public validateEchelonReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validEchelonReference = false;
        } else {
            this.validEchelonReference = true;
        }
    }



  /*  get echelle(): EchelleDto {
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
    }*/



    get validEchelonReference(): boolean {
        return this._validEchelonReference;
    }

    set validEchelonReference(value: boolean) {
         this._validEchelonReference = value;
    }

    get validEchelleReference(): boolean {
        return this._validEchelleReference;
    }
    set validEchelleReference(value: boolean) {
        this._validEchelleReference = value;
    }


}
