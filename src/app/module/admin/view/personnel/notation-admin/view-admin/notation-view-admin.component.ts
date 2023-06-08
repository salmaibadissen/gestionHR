import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {NotationService} from 'src/app/controller/service/Notation.service';
import {NotationDto} from 'src/app/controller/model/Notation.model';
import {NotationCriteria} from 'src/app/controller/criteria/NotationCriteria.model';
import {SexeDto} from "../../../../../../controller/model/Sexe.model";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";
import {EmployeService} from "../../../../../../controller/service/Employe.service";

@Component({
  selector: 'app-notation-view-admin',
  templateUrl: './notation-view-admin.component.html'
})
export class NotationViewAdminComponent extends AbstractViewController<NotationDto, NotationCriteria, NotationService> implements OnInit {


    constructor(private datePipe: DatePipe, private notationService: NotationService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  ,private employeService:EmployeService

    ){
        super(datePipe, notationService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
    }
    get employe(): EmployeDto {
        return this.employeService.item;
    }
    set employe(value: EmployeDto) {
        this.employeService.item = value;
    }
    get employes():Array<EmployeDto> {
        return this.employeService.items;
    }
    set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
    }




}
