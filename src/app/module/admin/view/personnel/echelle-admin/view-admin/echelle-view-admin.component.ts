import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EchelleService} from 'src/app/controller/service/Echelle.service';
import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import {EchelleCriteria} from 'src/app/controller/criteria/EchelleCriteria.model';

@Component({
  selector: 'app-echelle-view-admin',
  templateUrl: './echelle-view-admin.component.html'
})
export class EchelleViewAdminComponent extends AbstractViewController<EchelleDto, EchelleCriteria, EchelleService> implements OnInit {


    constructor(private datePipe: DatePipe, private echelleService: EchelleService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, echelleService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.echelle = new EchelleDto();
        this.echelleService.findAll().subscribe((data) => this.echelles = data);
    }


    get echelle(): EchelleDto {
       return this.echelleService.item;
    }
    set echelle(value: EchelleDto) {
        this.echelleService.item = value;
    }
    get echelles():Array<EchelleDto> {
       return this.echelleService.items;
    }
    set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
    }


}
