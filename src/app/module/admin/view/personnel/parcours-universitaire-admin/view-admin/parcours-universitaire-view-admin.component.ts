import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {ParcoursUniversitaireService} from 'src/app/controller/service/ParcoursUniversitaire.service';
import {ParcoursUniversitaireDto} from 'src/app/controller/model/ParcoursUniversitaire.model';
import {ParcoursUniversitaireCriteria} from 'src/app/controller/criteria/ParcoursUniversitaireCriteria.model';

@Component({
  selector: 'app-parcours-universitaire-view-admin',
  templateUrl: './parcours-universitaire-view-admin.component.html'
})
export class ParcoursUniversitaireViewAdminComponent extends AbstractViewController<ParcoursUniversitaireDto, ParcoursUniversitaireCriteria, ParcoursUniversitaireService> implements OnInit {


    constructor(private datePipe: DatePipe, private parcoursUniversitaireService: ParcoursUniversitaireService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  

    ){
        super(datePipe, parcoursUniversitaireService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    }




}
