import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PosteService} from 'src/app/controller/service/Poste.service';
import {PosteDto} from 'src/app/controller/model/Poste.model';
import {PosteCriteria} from 'src/app/controller/criteria/PosteCriteria.model';

import {DepartementDto} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';
@Component({
  selector: 'app-poste-view-admin',
  templateUrl: './poste-view-admin.component.html'
})
export class PosteViewAdminComponent extends AbstractViewController<PosteDto, PosteCriteria, PosteService> implements OnInit {


    constructor(private datePipe: DatePipe, private posteService: PosteService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
, private departementService: DepartementService
    ){
        super(datePipe, posteService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.departement = new DepartementDto();
        this.departementService.findAll().subscribe((data) => this.departements = data);
    }


    get departement(): DepartementDto {
       return this.departementService.item;
    }
    set departement(value: DepartementDto) {
        this.departementService.item = value;
    }
    get departements():Array<DepartementDto> {
       return this.departementService.items;
    }
    set departements(value: Array<DepartementDto>) {
        this.departementService.items = value;
    }


}
