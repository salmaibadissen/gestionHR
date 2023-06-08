import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {GradeService} from 'src/app/controller/service/Grade.service';
import {GradeDto} from 'src/app/controller/model/Grade.model';
import {GradeCriteria} from 'src/app/controller/criteria/GradeCriteria.model';

@Component({
  selector: 'app-grade-view-admin',
  templateUrl: './grade-view-admin.component.html'
})
export class GradeViewAdminComponent extends AbstractViewController<GradeDto, GradeCriteria, GradeService> implements OnInit {


    constructor(private datePipe: DatePipe, private gradeService: GradeService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, gradeService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
