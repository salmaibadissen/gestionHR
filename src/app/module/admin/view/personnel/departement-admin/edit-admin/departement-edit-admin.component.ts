import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

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
  selector: 'app-departement-edit-admin',
  templateUrl: './departement-edit-admin.component.html'
})
export class DepartementEditAdminComponent extends AbstractEditController<DepartementDto, DepartementCriteria, DepartementService>   implements OnInit {

  //  private _postesElement = new PosteDto();
   // private _employesElement = new EmployeDto();


   // private _validEmployesPassword = true;
   // private _validEmployePassword = true;



    constructor(private datePipe: DatePipe, private departementService: DepartementService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
/*, private employeService: EmployeService, private echelonService: EchelonService, private echelleService: EchelleService, private parcoursUniversitaireService: ParcoursUniversitaireService, private sexeService: SexeService, private posteService: PosteService, private congesService: CongesService, private gradeService: PromotionService, private notationService: NotationService
    */) {
        super(datePipe, departementService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {

     /*   this.employesElement.sexe = new SexeDto();
        this.sexeService.findAll().subscribe((data) => this.sexes = data);
        this.employesElement.parcoursUniversitaire = new ParcoursUniversitaireDto();
        this.parcoursUniversitaireService.findAll().subscribe((data) => this.parcoursUniversitaires = data);
        this.employesElement.poste = new PosteDto();
        this.posteService.findAll().subscribe((data) => this.postes = data);
        this.employesElement.notation = new NotationDto();
        this.notationService.findAll().subscribe((data) => this.notations = data);
        this.employesElement.conges = new CongesDto();
        this.congesService.findAll().subscribe((data) => this.congess = data);
        this.employesElement.echelle = new EchelleDto();
        this.echelleService.findAll().subscribe((data) => this.echelles = data);
        this.employesElement.echelon = new EchelonDto();
        this.echelonService.findAll().subscribe((data) => this.echelons = data);
        this.employesElement.grade = new GradeDto();
        this.gradeService.findAll().subscribe((data) => this.grades = data);

    this.employe = new EmployeDto();
    this.employeService.findAll().subscribe((data) => this.employes = data);

      */
}

   /* public validatePostes(){
        this.errorMessages = new Array();
    }
    public validateEmployes(){
        this.errorMessages = new Array();
        this.validateEmployesPassword();
    }
    public setValidation(value : boolean){
        this.validEmployesPassword = value;
        }
   public addPostes() {
        if( this.item.postes == null )
            this.item.postes = new Array<PosteDto>();
       this.validatePostes();
       if (this.errorMessages.length === 0) {
            if(this.postesElement.id == null){
                this.item.postes.push(this.postesElement);
            }else{
                const index = this.item.postes.findIndex(e => e.id == this.postesElement.id);
                this.item.postes[index] = this.postesElement;
            }
          this.postesElement = new PosteDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deletePoste(p: PosteDto) {
        this.item.postes.forEach((element, index) => {
            if (element === p) { this.item.postes.splice(index, 1); }
        });
    }

    public editPoste(p: PosteDto) {
        this.postesElement = {... p};
        this.activeTab = 0;
    }
   public addEmployes() {
        if( this.item.employes == null )
            this.item.employes = new Array<EmployeDto>();
       this.validateEmployes();
       if (this.errorMessages.length === 0) {
            if(this.employesElement.id == null){
                this.item.employes.push(this.employesElement);
            }else{
                const index = this.item.employes.findIndex(e => e.id == this.employesElement.id);
                this.item.employes[index] = this.employesElement;
            }
          this.employesElement = new EmployeDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteEmploye(p: EmployeDto) {
        this.item.employes.forEach((element, index) => {
            if (element === p) { this.item.employes.splice(index, 1); }
        });
    }

    public editEmploye(p: EmployeDto) {
        this.employesElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }


    private validateEmployesPassword(){
        if (this.employesElement.password == null) {
        this.errorMessages.push('Password de la employe est  invalide');
            this.validEmployesPassword = false;
        } else {
            this.validEmployesPassword = true;
        }
    }

   public async openCreateEchelle(echelle: string) {
        const isPermistted = await this.roleService.isPermitted('Echelle', 'edit');
        if(isPermistted) {
             this.echelle = new EchelleDto();
             this.createEchelleDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateNotation(notation: string) {
        const isPermistted = await this.roleService.isPermitted('Notation', 'edit');
        if(isPermistted) {
             this.notation = new NotationDto();
             this.createNotationDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateConges(conges: string) {
        const isPermistted = await this.roleService.isPermitted('Conges', 'edit');
        if(isPermistted) {
             this.conges = new CongesDto();
             this.createCongesDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateSexe(sexe: string) {
        const isPermistted = await this.roleService.isPermitted('Sexe', 'edit');
        if(isPermistted) {
             this.sexe = new SexeDto();
             this.createSexeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreatePoste(poste: string) {
        const isPermistted = await this.roleService.isPermitted('Poste', 'edit');
        if(isPermistted) {
             this.poste = new PosteDto();
             this.createPosteDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateEmploye(employe: string) {
        const isPermistted = await this.roleService.isPermitted('Employe', 'edit');
        if(isPermistted) {
             this.employe = new EmployeDto();
             this.createEmployeDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateParcoursUniversitaire(parcoursUniversitaire: string) {
        const isPermistted = await this.roleService.isPermitted('ParcoursUniversitaire', 'edit');
        if(isPermistted) {
             this.parcoursUniversitaire = new ParcoursUniversitaireDto();
             this.createParcoursUniversitaireDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get echelle(): EchelleDto {
       return this.echelleService.item;
   }
  set echelle(value: EchelleDto) {
        this.echelleService.item = value;
   }
   get echelles(): Array<EchelleDto> {
        return this.echelleService.items;
   }
   set echelles(value: Array<EchelleDto>) {
        this.echelleService.items = value;
   }
   get createEchelleDialog(): boolean {
       return this.echelleService.createDialog;
   }
  set createEchelleDialog(value: boolean) {
       this.echelleService.createDialog= value;
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
   get createEchelonDialog(): boolean {
       return this.echelonService.createDialog;
   }
  set createEchelonDialog(value: boolean) {
       this.echelonService.createDialog= value;
   }
   get notation(): NotationDto {
       return this.notationService.item;
   }
  set notation(value: NotationDto) {
        this.notationService.item = value;
   }
   get notations(): Array<NotationDto> {
        return this.notationService.items;
   }
   set notations(value: Array<NotationDto>) {
        this.notationService.items = value;
   }
   get createNotationDialog(): boolean {
       return this.notationService.createDialog;
   }
  set createNotationDialog(value: boolean) {
       this.notationService.createDialog= value;
   }
   get conges(): CongesDto {
       return this.congesService.item;
   }
  set conges(value: CongesDto) {
        this.congesService.item = value;
   }
   get congess(): Array<CongesDto> {
        return this.congesService.items;
   }
   set congess(value: Array<CongesDto>) {
        this.congesService.items = value;
   }
   get createCongesDialog(): boolean {
       return this.congesService.createDialog;
   }
  set createCongesDialog(value: boolean) {
       this.congesService.createDialog= value;
   }
   get grade(): GradeDto {
       return this.gradeService.item;
   }
  set grade(value: GradeDto) {
        this.gradeService.item = value;
   }
   get grades(): Array<GradeDto> {
        return this.gradeService.items;
   }
   set grades(value: Array<GradeDto>) {
        this.gradeService.items = value;
   }
   get createGradeDialog(): boolean {
       return this.gradeService.createDialog;
   }
  set createGradeDialog(value: boolean) {
       this.gradeService.createDialog= value;
   }
   get sexe(): SexeDto {
       return this.sexeService.item;
   }
  set sexe(value: SexeDto) {
        this.sexeService.item = value;
   }
   get sexes(): Array<SexeDto> {
        return this.sexeService.items;
   }
   set sexes(value: Array<SexeDto>) {
        this.sexeService.items = value;
   }
   get createSexeDialog(): boolean {
       return this.sexeService.createDialog;
   }
  set createSexeDialog(value: boolean) {
       this.sexeService.createDialog= value;
   }
   get poste(): PosteDto {
       return this.posteService.item;
   }
  set poste(value: PosteDto) {
        this.posteService.item = value;
   }
   get postes(): Array<PosteDto> {
        return this.posteService.items;
   }
   set postes(value: Array<PosteDto>) {
        this.posteService.items = value;
   }
   get createPosteDialog(): boolean {
       return this.posteService.createDialog;
   }
  set createPosteDialog(value: boolean) {
       this.posteService.createDialog= value;
   }
   get employe(): EmployeDto {
       return this.employeService.item;
   }
  set employe(value: EmployeDto) {
        this.employeService.item = value;
   }
   get employes(): Array<EmployeDto> {
        return this.employeService.items;
   }
   set employes(value: Array<EmployeDto>) {
        this.employeService.items = value;
   }
   get createEmployeDialog(): boolean {
       return this.employeService.createDialog;
   }
  set createEmployeDialog(value: boolean) {
       this.employeService.createDialog= value;
   }
   get parcoursUniversitaire(): ParcoursUniversitaireDto {
       return this.parcoursUniversitaireService.item;
   }
  set parcoursUniversitaire(value: ParcoursUniversitaireDto) {
        this.parcoursUniversitaireService.item = value;
   }
   get parcoursUniversitaires(): Array<ParcoursUniversitaireDto> {
        return this.parcoursUniversitaireService.items;
   }
   set parcoursUniversitaires(value: Array<ParcoursUniversitaireDto>) {
        this.parcoursUniversitaireService.items = value;
   }
   get createParcoursUniversitaireDialog(): boolean {
       return this.parcoursUniversitaireService.createDialog;
   }
  set createParcoursUniversitaireDialog(value: boolean) {
       this.parcoursUniversitaireService.createDialog= value;
   }

    get postesElement(): PosteDto {
        if( this._postesElement == null )
            this._postesElement = new PosteDto();
         return this._postesElement;
    }

    set postesElement(value: PosteDto) {
        this._postesElement = value;
    }
    get employesElement(): EmployeDto {
        if( this._employesElement == null )
            this._employesElement = new EmployeDto();
         return this._employesElement;
    }

    set employesElement(value: EmployeDto) {
        this._employesElement = value;
    }


    get validEmployesPassword(): boolean {
        return this._validEmployesPassword;
    }
    set validEmployesPassword(value: boolean) {
        this._validEmployesPassword = value;
    }
    get validEmployePassword(): boolean {
        return this._validEmployePassword;
    }
    set validEmployePassword(value: boolean) {
        this._validEmployePassword = value;
    }*/
}
