import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {PromotionService} from 'src/app/controller/service/Promotion.service';
import {PromotionDto} from 'src/app/controller/model/Promotion.model';
import {PromotionCriteria} from 'src/app/controller/criteria/PromotionCriteria.model';
import {EmployeDto} from "../../../../../../controller/model/Employe.model";
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {EchelleDto} from "../../../../../../controller/model/Echelle.model";
import {EchelleService} from "../../../../../../controller/service/Echelle.service";
import {EchelonService} from "../../../../../../controller/service/Echelon.service";
import {EchelonDto} from "../../../../../../controller/model/Echelon.model";
import {GradeService} from "../../../../../../controller/service/Grade.service";
import {GradeDto} from "../../../../../../controller/model/Grade.model";

@Component({
  selector: 'app-promotion-view-admin',
  templateUrl: './promotion-view-admin.component.html'
})
export class PromotionViewAdminComponent extends AbstractViewController<PromotionDto, PromotionCriteria, PromotionService> implements OnInit {


    constructor(private datePipe: DatePipe, private promotionService: PromotionService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router,private gradeService:GradeService  ,private employeService:EmployeService,private echelleService:EchelleService,private echelonService:EchelonService

    ){
        super(datePipe, promotionService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employes = data);
        this.echelle = new EchelleDto();
        this.echelleService.findAll().subscribe((data) => this.echelles = data);
        this.echelon = new EchelonDto();
        this.echelonService.findAll().subscribe((data) => this.echelons = data);
        this.grade = new GradeDto();
        this.gradeService.findAll().subscribe((data) => this.grades = data);
    }
    get grades(): Array<GradeDto> {
        return this.gradeService.items;
    }
    set grades(value: Array<GradeDto>) {
        this.gradeService.items = value;
    }
    set createGradeDialog(value: boolean) {
        this.gradeService.createDialog= value;
    }

    get grade(): GradeDto {
        return this.gradeService.item;
    }
    set grade(value: GradeDto) {
        this.gradeService.item = value;
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
    get echelle(): EchelleDto {
        return this.echelleService.item;
    }
    set echelle(value: EchelleDto) {
        this.echelleService.item = value;
    }
    get echelon(): EchelonDto {
        return this.echelonService.item;
    }
    set echelon(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelons(): Array<EchelonDto> {
        return this.echelonService.items;
    }
    set echelons(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get echelles(): Array<EchelleDto> {
        return this.echelleService.items;
    }
    set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
    }





}
