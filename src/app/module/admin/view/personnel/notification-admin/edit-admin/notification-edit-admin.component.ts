import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {SituationFamilialeService} from 'src/app/controller/service/SituationFamiliale.service';
import {SituationFamilialeDto} from 'src/app/controller/model/SituationFamiliale.model';
import {SituationFamilialeCriteria} from 'src/app/controller/criteria/SituationFamilialeCriteria.model';



@Component({
  selector: 'app-notification-edit-admin',
  templateUrl: './notification-edit-admin.component.html'
})
export class NotificationEditAdminComponent extends AbstractEditController<SituationFamilialeDto, SituationFamilialeCriteria, SituationFamilialeService>   implements OnInit {






    constructor(private datePipe: DatePipe, private notificationService: SituationFamilialeService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  

    ) {
        super(datePipe, notificationService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
