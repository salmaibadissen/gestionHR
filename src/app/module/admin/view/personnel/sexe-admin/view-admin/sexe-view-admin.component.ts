import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {SexeService} from 'src/app/controller/service/Sexe.service';
import {SexeDto} from 'src/app/controller/model/Sexe.model';
import {SexeCriteria} from 'src/app/controller/criteria/SexeCriteria.model';

@Component({
  selector: 'app-sexe-view-admin',
  templateUrl: './sexe-view-admin.component.html'
})
export class SexeViewAdminComponent extends AbstractViewController<SexeDto, SexeCriteria, SexeService> implements OnInit {


    constructor(private datePipe: DatePipe, private sexeService: SexeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, sexeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
