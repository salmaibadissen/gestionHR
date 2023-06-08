import {Component, OnInit, Input} from '@angular/core';

import {ConfirmationService, MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/api';
import { environment } from 'src/environments/environment';
import {DatePipe} from '@angular/common';

import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';
import {RoleService} from 'src/app/zynerator/security/Role.service';
import {StringUtilService} from 'src/app/zynerator/util/StringUtil.service';

import {EmployeService} from 'src/app/controller/service/Employe.service';
import {EmployeDto} from 'src/app/controller/model/Employe.model';
import {EmployeCriteria} from 'src/app/controller/criteria/EmployeCriteria.model';


import {EchelonDto} from 'src/app/controller/model/Echelon.model';
import {EchelonService} from 'src/app/controller/service/Echelon.service';
import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import {EchelleService} from 'src/app/controller/service/Echelle.service';
import {ParcoursUniversitaireDto} from 'src/app/controller/model/ParcoursUniversitaire.model';
import {ParcoursUniversitaireService} from 'src/app/controller/service/ParcoursUniversitaire.service';
import {DepartementDto} from 'src/app/controller/model/Departement.model';
import {DepartementService} from 'src/app/controller/service/Departement.service';
import {SexeDto} from 'src/app/controller/model/Sexe.model';
import {SexeService} from 'src/app/controller/service/Sexe.service';
import {PosteDto} from 'src/app/controller/model/Poste.model';
import {PosteService} from 'src/app/controller/service/Poste.service';
import {CongesDto} from 'src/app/controller/model/Conges.model';
import {CongesService} from 'src/app/controller/service/Conges.service';
import {PromotionDto} from 'src/app/controller/model/Promotion.model';
import {PromotionService} from 'src/app/controller/service/Promotion.service';
import {NotationDto} from 'src/app/controller/model/Notation.model';
import {NotationService} from 'src/app/controller/service/Notation.service';
import {LocalDto} from "../../../../../../controller/model/Local.model";
import {LocalService} from "../../../../../../controller/service/Local.service";
import {SituationFamilialeDto} from "../../../../../../controller/model/SituationFamiliale.model";
import {SituationFamilialeService} from "../../../../../../controller/service/SituationFamiliale.service";

@Component({
  selector: 'app-employe-edit-admin',
  templateUrl: './employe-edit-admin.component.html'
})
export class EmployeEditAdminComponent extends AbstractEditController<EmployeDto, EmployeCriteria, EmployeService>   implements OnInit {


    private _validEmployePassword = true;

    private _validSexeReference = true;
    private _validSexeLibelle = true;


    constructor(private datePipe: DatePipe, private employeService: EmployeService
        , private stringUtilService: StringUtilService, private roleService: RoleService,  private messageService: MessageService
        , private confirmationService: ConfirmationService, private router: Router  
,  private parcoursUniversitaireService: ParcoursUniversitaireService, private departementService: DepartementService, private sexeService: SexeService, private posteService: PosteService, private congesService: CongesService, private notationService: NotationService,private localService:LocalService,private situationFamilialeService:SituationFamilialeService,
    ) {
        super(datePipe, employeService, messageService, confirmationService, roleService, router, stringUtilService);
    }

    ngOnInit(): void {
    this.sexe = new SexeDto();
    this.sexeService.findAll().subscribe((data) => this.sexes = data);
    this.parcoursUniversitaire = new ParcoursUniversitaireDto();
    this.parcoursUniversitaireService.findAll().subscribe((data) => this.parcoursUniversitaires = data);
    this.departement = new DepartementDto();
    this.departementService.findAll().subscribe((data) => this.departements = data);
        this.situationFamiliale = new SituationFamilialeDto();
        this.situationFamilialeService.findAll().subscribe((data) => this.situationFamiliales = data);
  //  this.poste = new PosteDto();
   // this.posteService.findAll().subscribe((data) => this.postes = data);
   // this.notation = new NotationDto();
  //  this.notationService.findAll().subscribe((data) => this.notations = data);
   // this.conges = new CongesDto();
  //  this.congesService.findAll().subscribe((data) => this.congess = data);

}

    public setValidation(value : boolean){
        this.validEmployePassword = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEmployePassword();
    }
    public validateEmployePassword(){
        if (this.stringUtilService.isEmpty(this.item.password)) {
            this.errorMessages.push('Password non valide');
            this.validEmployePassword = false;
        } else {
            this.validEmployePassword = true;
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

    get locals(): Array<LocalDto> {
        return this.localService.items;
    }
    set locals(value: Array<LocalDto>) {
        this.localService.items = value;
    }
    get local(): LocalDto {
        return this.localService.item;
    }
    set local(value: LocalDto) {
        this.localService.item = value;
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


    get validEmployePassword(): boolean {
        return this._validEmployePassword;
    }
    set validEmployePassword(value: boolean) {
        this._validEmployePassword = value;
    }

    get validSexeReference(): boolean {
        return this._validSexeReference;
    }
    set validSexeReference(value: boolean) {
        this._validSexeReference = value;
    }
    get validSexeLibelle(): boolean {
        return this._validSexeLibelle;
    }
    set validSexeLibelle(value: boolean) {
        this._validSexeLibelle = value;
    }
    get situationFamiliale(): SituationFamilialeDto {
        return this.situationFamilialeService.item;
    }
    set situationFamiliale(value: SituationFamilialeDto) {
        this.situationFamilialeService.item = value;
    }
    get situationFamiliales(): Array<SituationFamilialeDto> {
        return this.situationFamilialeService.items;
    }
    set situationFamiliales(value: Array<SituationFamilialeDto>) {
        this.situationFamilialeService.items = value;
    }
    get createSituationFamilialeDialog(): boolean {
        return this.situationFamilialeService.createDialog;
    }
    set createSituationFamilialeDialog(value: boolean) {
        this.situationFamilialeService.createDialog= value;
    }

}
