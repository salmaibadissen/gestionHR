import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {LocalService} from 'src/app/controller/service/Local.service';
import {LocalDto} from 'src/app/controller/model/Local.model';
import {LocalCriteria} from 'src/app/controller/criteria/LocalCriteria.model';



@Component({
  selector: 'app-local-edit-admin',
  templateUrl: './local-edit-admin.component.html'
})
export class LocalEditAdminComponent extends AbstractEditController<LocalDto, LocalCriteria, LocalService>   implements OnInit {






    constructor(private datePipe: DatePipe, private localService: LocalService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, localService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
