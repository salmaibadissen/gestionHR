import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {PosteService} from 'src/app/controller/service/Poste.service';
import {PosteDto} from 'src/app/controller/model/Poste.model';
import {PosteCriteria} from 'src/app/controller/criteria/PosteCriteria.model';


import {DepartementDto} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';

@Component({
  selector: 'app-poste-edit-admin',
  templateUrl: './poste-edit-admin.component.html'
})
export class PosteEditAdminComponent extends AbstractEditController<PosteDto, PosteCriteria, PosteService>   implements OnInit {






    constructor(private datePipe: DatePipe, private posteService: PosteService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
, private departementService: DepartementService
    ) {
        super(datePipe, posteService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.departement = new DepartementDto();
    this.departementService.findAll().subscribe((data) => this.departements = data);
}

    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



   public async openCreateDepartement(departement: string) {
        const isPermistted = await this.roleService.isPermitted('Departement', 'edit');
        if(isPermistted) {
             this.departement = new DepartementDto();
             this.createDepartementDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get departement(): DepartementDto {
       return this.departementService.item;
   }
  set departement(value: DepartementDto) {
        this.departementService.item = value;
   }
   get departements(): Array<DepartementDto> {
        return this.departementService.items;
   }
   set departements(value: Array<DepartementDto>) {
        this.departementService.items = value;
   }
   get createDepartementDialog(): boolean {
       return this.departementService.createDialog;
   }
  set createDepartementDialog(value: boolean) {
       this.departementService.createDialog= value;
   }



}
