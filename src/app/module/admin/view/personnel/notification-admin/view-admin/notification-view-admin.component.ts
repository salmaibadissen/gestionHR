import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SituationFamilialeService} from 'src/app/controller/service/SituationFamiliale.service';
import {SituationFamilialeDto} from 'src/app/controller/model/SituationFamiliale.model';
import {SituationFamilialeCriteria} from 'src/app/controller/criteria/SituationFamilialeCriteria.model';

@Component({
  selector: 'app-notification-view-admin',
  templateUrl: './notification-view-admin.component.html'
})
export class NotificationViewAdminComponent extends AbstractViewController<SituationFamilialeDto, SituationFamilialeCriteria, SituationFamilialeService> implements OnInit {


    constructor(private datePipe: DatePipe, private notificationService: SituationFamilialeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, notificationService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
