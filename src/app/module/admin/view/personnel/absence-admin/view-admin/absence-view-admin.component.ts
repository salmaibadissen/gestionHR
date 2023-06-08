import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {AbsenceService} from 'src/app/controller/service/Absence.service';
import {AbsenceDto} from 'src/app/controller/model/Absence.model';
import {AbsenceCriteria} from 'src/app/controller/criteria/AbsenceCriteria.model';
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";

@Component({
  selector: 'app-absence-view-admin',
  templateUrl: './absence-view-admin.component.html'
})
export class AbsenceViewAdminComponent extends AbstractViewController<AbsenceDto, AbsenceCriteria, AbsenceService> implements OnInit {


    constructor(private datePipe: DatePipe, private absenceService: AbsenceService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  ,private employeService:EmployeService

    ){
        super(datePipe, absenceService, messageService, roleService, router, stringUtilService);
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
