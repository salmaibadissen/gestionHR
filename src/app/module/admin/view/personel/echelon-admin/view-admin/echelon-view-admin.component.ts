import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {EchelonService} from 'src/app/controller/service/Echelon.service';
import {EchelonDto} from 'src/app/controller/model/Echelon.model';
import {EchelonCriteria} from 'src/app/controller/criteria/EchelonCriteria.model';

import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import {EchelleService} from 'src/app/controller/service/Echelle.service';
@Component({
  selector: 'app-echelon-view-admin',
  templateUrl: './echelon-view-admin.component.html'
})
export class EchelonViewAdminComponent extends AbstractViewController<EchelonDto, EchelonCriteria, EchelonService> implements OnInit {


    constructor(private datePipe: DatePipe, private echelonService: EchelonService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router
    ){
        super(datePipe, echelonService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
      //  this.echelle = new EchelleDto();
      //  this.echelleService.findAll().subscribe((data) => this.echelles = data);
    }


  /*  get echelle(): EchelleDto {
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
*/

}
