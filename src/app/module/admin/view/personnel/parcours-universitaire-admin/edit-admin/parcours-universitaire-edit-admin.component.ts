import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {ParcoursUniversitaireService} from 'src/app/controller/service/ParcoursUniversitaire.service';
import {ParcoursUniversitaireDto} from 'src/app/controller/model/ParcoursUniversitaire.model';
import {ParcoursUniversitaireCriteria} from 'src/app/controller/criteria/ParcoursUniversitaireCriteria.model';



@Component({
  selector: 'app-parcours-universitaire-edit-admin',
  templateUrl: './parcours-universitaire-edit-admin.component.html'
})
export class ParcoursUniversitaireEditAdminComponent extends AbstractEditController<ParcoursUniversitaireDto, ParcoursUniversitaireCriteria, ParcoursUniversitaireService>   implements OnInit {






    constructor(private datePipe: DatePipe, private parcoursUniversitaireService: ParcoursUniversitaireService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, parcoursUniversitaireService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
