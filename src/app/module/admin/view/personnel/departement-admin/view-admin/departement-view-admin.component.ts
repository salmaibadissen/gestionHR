import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {MessageService} from 'primeng/api';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {DepartementDto} from 'src/app/controller/model/Departement.model';
import {DepartementCriteria} from 'src/app/controller/criteria/DepartementCriteria.model';

import {EmployeDto} from 'src/app/controller/model/Employe.model';
import {EmployeService} from 'src/app/controller/service/Employe.service';
import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import {EchelleService} from 'src/app/controller/service/Echelle.service';
import {EchelonDto} from 'src/app/controller/model/Echelon.model';
import {EchelonService} from 'src/app/controller/service/Echelon.service';
import {SexeDto} from 'src/app/controller/model/Sexe.model';
import {SexeService} from 'src/app/controller/service/Sexe.service';
import {CongesDto} from 'src/app/controller/model/Conges.model';
import {CongesService} from 'src/app/controller/service/Conges.service';
import {NotationDto} from 'src/app/controller/model/Notation.model';
import {NotationService} from 'src/app/controller/service/Notation.service';
import {ParcoursUniversitaireDto} from 'src/app/controller/model/ParcoursUniversitaire.model';
import {ParcoursUniversitaireService} from 'src/app/controller/service/ParcoursUniversitaire.service';
import {PosteDto} from 'src/app/controller/model/Poste.model';
import {PosteService} from 'src/app/controller/service/Poste.service';
import {PromotionDto} from 'src/app/controller/model/Promotion.model';
import {PromotionService} from 'src/app/controller/service/Promotion.service';
@Component({
  selector: 'app-departement-view-admin',
  templateUrl: './departement-view-admin.component.html'
})
export class DepartementViewAdminComponent extends AbstractViewController<DepartementDto, DepartementCriteria, DepartementService> implements OnInit {
    postesss= new PosteDto();
    postess: Array<PosteDto> = [];
   employesss= new EmployeDto();
    employess: Array<EmployeDto> = [];

    constructor(private datePipe: DatePipe, private departementService: DepartementService
                , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
                , private router: Router  
/*, private employeService: EmployeService, private echelonService: EchelonService, private echelleService: EchelleService, private parcoursUniversitaireService: ParcoursUniversitaireService, private sexeService: SexeService, private posteService: PosteService, private congesService: CongesService, private gradeService: PromotionService, private notationService: NotationService
    */){
        super(datePipe, departementService, messageService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
      /*  this.employesss.sexe = new SexeDto();
        this.sexeService.findAll().subscribe((data) => this.sexes = data);
        this.employesss.parcoursUniversitaire = new ParcoursUniversitaireDto();
        this.parcoursUniversitaireService.findAll().subscribe((data) => this.parcoursUniversitaires = data);
        this.employesss.poste = new PosteDto();
        this.posteService.findAll().subscribe((data) => this.postess = data);
        this.employesss.notation = new NotationDto();
        this.notationService.findAll().subscribe((data) => this.notations = data);
        this.employesss.conges = new CongesDto();
        this.congesService.findAll().subscribe((data) => this.congess = data);
        this.employesss.echelle = new EchelleDto();
        this.echelleService.findAll().subscribe((data) => this.echelles = data);
        this.employesss.echelon = new EchelonDto();
        this.echelonService.findAll().subscribe((data) => this.echelons = data);
        this.employesss.grade = new GradeDto();
        this.gradeService.findAll().subscribe((data) => this.grades = data);
        this.employe = new EmployeDto();
        this.employeService.findAll().subscribe((data) => this.employess = data);*/
    }


   /* get echelle(): EchelleDto {
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
    get echelon(): EchelonDto {
       return this.echelonService.item;
    }
    set echelon(value: EchelonDto) {
        this.echelonService.item = value;
    }
    get echelons():Array<EchelonDto> {
       return this.echelonService.items;
    }
    set echelons(value: Array<EchelonDto>) {
        this.echelonService.items = value;
    }
    get notation(): NotationDto {
       return this.notationService.item;
    }
    set notation(value: NotationDto) {
        this.notationService.item = value;
    }
    get notations():Array<NotationDto> {
       return this.notationService.items;
    }
    set notations(value: Array<NotationDto>) {
        this.notationService.items = value;
    }
    get conges(): CongesDto {
       return this.congesService.item;
    }
    set conges(value: CongesDto) {
        this.congesService.item = value;
    }
    get congess():Array<CongesDto> {
       return this.congesService.items;
    }
    set congess(value: Array<CongesDto>) {
        this.congesService.items = value;
    }
    get grade(): GradeDto {
       return this.gradeService.item;
    }
    set grade(value: GradeDto) {
        this.gradeService.item = value;
    }
    get grades():Array<GradeDto> {
       return this.gradeService.items;
    }
    set grades(value: Array<GradeDto>) {
        this.gradeService.items = value;
    }
    get sexe(): SexeDto {
       return this.sexeService.item;
    }
    set sexe(value: SexeDto) {
        this.sexeService.item = value;
    }
    get sexes():Array<SexeDto> {
       return this.sexeService.items;
    }
    set sexes(value: Array<SexeDto>) {
        this.sexeService.items = value;
    }
    get poste(): PosteDto {
       return this.posteService.item;
    }
    set poste(value: PosteDto) {
        this.posteService.item = value;
    }
    get postes():Array<PosteDto> {
       return this.posteService.items;
    }
    set postes(value: Array<PosteDto>) {
        this.posteService.items = value;
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
    get parcoursUniversitaire(): ParcoursUniversitaireDto {
       return this.parcoursUniversitaireService.item;
    }
    set parcoursUniversitaire(value: ParcoursUniversitaireDto) {
        this.parcoursUniversitaireService.item = value;
    }
    get parcoursUniversitaires():Array<ParcoursUniversitaireDto> {
       return this.parcoursUniversitaireService.items;
    }
    set parcoursUniversitaires(value: Array<ParcoursUniversitaireDto>) {
        this.parcoursUniversitaireService.items = value;
    }
*/

}
