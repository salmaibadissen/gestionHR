import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {LocalService} from 'src/app/controller/service/Local.service';
import {LocalDto} from 'src/app/controller/model/Local.model';
import {LocalCriteria} from 'src/app/controller/criteria/LocalCriteria.model';

@Component({
  selector: 'app-local-view-admin',
  templateUrl: './local-view-admin.component.html'
})
export class LocalViewAdminComponent extends AbstractViewController<LocalDto, LocalCriteria, LocalService> implements OnInit {


    constructor(private datePipe: DatePipe, private localService: LocalService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, localService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
