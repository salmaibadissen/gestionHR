import {Component, OnInit} from '@angular/core';
import {EmployeService} from 'src/app/controller/service/Employe.service';
import {EmployeDto} from 'src/app/controller/model/Employe.model';
import {EmployeCriteria} from 'src/app/controller/criteria/EmployeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';


import { SexeService } from 'src/app/controller/service/Sexe.service';
import { ParcoursUniversitaireService } from 'src/app/controller/service/ParcoursUniversitaire.service';
import { DepartementService } from 'src/app/controller/service/Departement.service';
import { PosteService } from 'src/app/controller/service/Poste.service';
import { NotationService } from 'src/app/controller/service/Notation.service';
import { CongesService } from 'src/app/controller/service/Conges.service';
import { EchelleService } from 'src/app/controller/service/Echelle.service';
import { EchelonService } from 'src/app/controller/service/Echelon.service';
import { PromotionService } from 'src/app/controller/service/Promotion.service';

import {ParcoursUniversitaireDto} from 'src/app/controller/model/ParcoursUniversitaire.model';
import {CongesDto} from 'src/app/controller/model/Conges.model';
import {DepartementDto} from 'src/app/controller/model/Departement.model';
import {SexeDto} from 'src/app/controller/model/Sexe.model';
import {EchelonDto} from 'src/app/controller/model/Echelon.model';
import {PromotionDto} from 'src/app/controller/model/Promotion.model';
import {PosteDto} from 'src/app/controller/model/Poste.model';
import {NotationDto} from 'src/app/controller/model/Notation.model';
import {EchelleDto} from 'src/app/controller/model/Echelle.model';
import { MessageService, ConfirmationService  } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';
import {SituationFamilialeService} from "../../../../../../controller/service/SituationFamiliale.service";
import {LocalService} from "../../../../../../controller/service/Local.service";
import {Local} from "protractor/built/driverProviders";
import {SituationFamilialeDto} from "../../../../../../controller/model/SituationFamiliale.model";



@Component({
  selector: 'app-employe-list-admin',
  templateUrl: './employe-list-admin.component.html'
})
export class EmployeListAdminComponent extends AbstractListController<EmployeDto, EmployeCriteria, EmployeService>  implements OnInit {

    fileName = 'Employe';
    private locals: Array<Local>;

    sexes: Array<SexeDto>;
    parcoursUniversitaires: Array<ParcoursUniversitaireDto>;
    departements: Array<DepartementDto>;
    postes: Array<PosteDto>;
    notations: Array<NotationDto>;
    congess: Array<CongesDto>;
    echelles: Array<EchelleDto>;
    echelons: Array<EchelonDto>;
    promotions: Array<PromotionDto>;
    situationFamiliales: Array<SituationFamilialeDto>;

    constructor(datePipe: DatePipe, employeService: EmployeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router, authService: AuthService, exportService: ExportService
        , private sexeService: SexeService, private departementService: DepartementService, private echelleService: EchelleService, private echelonService: EchelonService, private gradeService: PromotionService, private parcoursUniversitaireService: ParcoursUniversitaireService, private situationFamilialeService: SituationFamilialeService, private localService: LocalService) {
        super(datePipe, employeService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadSexe();
        this.loadParcoursUniversitaire();
        this.loadDepartement();
        //this.loadSituationFamiliale();
        //   this.loadPoste();
        //   this.loadNotation();
        //   this.loadConges();
        // this.loadEchelle();
        // this.loadEchelon();
        // this.loadGrade();
    }

    public async loadEmployes() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.service.findAll().subscribe(employes => this.items = employes, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'username', header: 'Username'},
            {field: 'password', header: 'Password'},
            {field: 'prenom', header: 'Prenom'},
            {field: 'nom', header: 'Nom'},
            {field: 'nomArabe', header: 'Nom Arabe'},
            {field: 'dateDeNaissance', header: 'Date de naissance'},
            {field: 'lieuDeNaissance', header: 'Lieu de naissance'},
            {field: 'adresse', header: 'Adresse'},
            {field: 'sexe?.libelle', header: 'Sexe'},
            {field: 'cin', header: 'Cin'},
            {field: 'situationFamiliale', header: 'Situation familiale'},
            {field: 'parcoursUniversitaire', header: 'Parcours universitaire'},
            {field: 'tel', header: 'Tel'},
            {field: 'dateEmbauche', header: 'Date embauche'},
            {field: 'matricule', header: 'Matricule'},
            {field: 'adressEmail', header: 'Adress email'},
            {field: 'compteBancaire', header: 'Compte bancaire'},
            {field: 'departement?.id', header: 'Departement'},
            {field: 'poste', header: 'Poste'},
            // {field: 'notation?.id', header: 'Notation'},
            // {field: 'nombreAbsence', header: 'Nombre absence'},
            //  {field: 'conges?.id', header: 'Conges'},
            {field: 'echelle?.reference', header: 'Echelle'},
            {field: 'echelon?.reference', header: 'Echelon'},
            // {field: 'grade?.libelle', header: 'Grade'},
            {field: 'local', header: 'Local'},
        ];
    }


    public async loadSexe() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.sexeService.findAllOptimized().subscribe(sexes => this.sexes = sexes, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadParcoursUniversitaire() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.parcoursUniversitaireService.findAll().subscribe(parcoursUniversitaires => this.parcoursUniversitaires = parcoursUniversitaires, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadSituationFamiliale() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.situationFamilialeService.findAll().subscribe(situationFamiliales => this.situationFamiliales = situationFamiliales, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadDepartement() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.departementService.findAll().subscribe(departements => this.departements = departements, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    /*   public async loadPoste(){
           await this.roleService.findAll();
           const isPermistted = await this.roleService.isPermitted('Employe', 'list');
           isPermistted ? this.posteService.findAll().subscribe(postes => this.postes = postes,error=>console.log(error))
           : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
       }
       public async loadNotation(){
           await this.roleService.findAll();
           const isPermistted = await this.roleService.isPermitted('Employe', 'list');
           isPermistted ? this.notationService.findAll().subscribe(notations => this.notations = notations,error=>console.log(error))
           : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
       }
       public async loadConges(){
           await this.roleService.findAll();
           const isPermistted = await this.roleService.isPermitted('Employe', 'list');
           isPermistted ? this.congesService.findAll().subscribe(congess => this.congess = congess,error=>console.log(error))
           : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
       }*/

    public async loadLocal() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.localService.findAll().subscribe(departements => this.locals = this.locals, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadEchelle() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.echelleService.findAllOptimized().subscribe(echelles => this.echelles = echelles, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadEchelon() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.echelonService.findAllOptimized().subscribe(echelons => this.echelons = echelons, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public async loadGrade() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.gradeService.findAllOptimized().subscribe(grades => this.promotions = this.promotions, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public initDuplicate(res: EmployeDto) {
    }

    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Usernmae': e.username,
                'Password': e.password,
                'Prenom': e.prenom,
                'Nom': e.nom,
                'Nom en arabe': e.nom,
                'Date de naissance': this.datePipe.transform(e.dateDeNaissance, 'dd/MM/yyyy hh:mm'),
                'Lieu de naissance': e.lieuDeNaissance,
                'Adresse': e.adresse,
                'Sexe': e.sexe?.libelle,
                'Cin': e.cin,
                'Parcours universitaire': e.parcoursUniversitaire,
                'Tel': e.tel,
                'Date embauche': this.datePipe.transform(e.dateEmbauche, 'dd/MM/yyyy hh:mm'),
                'Matricule': e.matricule,
                'Adress email': e.adressEmail,
                'Compte bancaire': e.compteBancaire,
                'Departement': e.departement?.id,
                'Poste': e.poste,
                // 'Notation': e.notation?.id ,
                //   'Nombre absence': e.nombreAbsence ,
                //  'Conges': e.conges?.id ,
                //   'Echelle': e.echelle?.reference ,
                //  'Echelon': e.echelon?.reference ,
                // 'Grade': e.grade?.libelle ,
                'Local': e.local,
            }
        });

        this.criteriaData = [{
            'Login': this.criteria.username ? this.criteria.username : environment.emptyForExport,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport,
            'Prenom': this.criteria.prenom ? this.criteria.prenom : environment.emptyForExport,
            'Nom': this.criteria.nom ? this.criteria.nom : environment.emptyForExport,
            'Nom en arabe': this.criteria.nomArabe ? this.criteria.nomArabe : environment.emptyForExport,
            'Date de naissance Min': this.criteria.dateDeNaissanceFrom ? this.datePipe.transform(this.criteria.dateDeNaissanceFrom, this.dateFormat) : environment.emptyForExport,
            'Date de naissance Max': this.criteria.dateDeNaissanceTo ? this.datePipe.transform(this.criteria.dateDeNaissanceTo, this.dateFormat) : environment.emptyForExport,
            'Lieu de naissance': this.criteria.lieuDeNaissance ? this.criteria.lieuDeNaissance : environment.emptyForExport,
            'Adresse': this.criteria.adresse ? this.criteria.adresse : environment.emptyForExport,
            'Sexe': this.criteria.sexe?.libelle ? this.criteria.sexe?.libelle : environment.emptyForExport,
            'Cin': this.criteria.cin ? this.criteria.cin : environment.emptyForExport,
            'Situation familiale': this.criteria.situationFamiliale?.id ? this.criteria.situationFamiliale?.id : environment.emptyForExport,
            'Parcours universitaire': this.criteria.parcoursUniversitaire?.id ? this.criteria.parcoursUniversitaire?.id : environment.emptyForExport,
            'Tel': this.criteria.tel ? this.criteria.tel : environment.emptyForExport,
            'Date embauche Min': this.criteria.dateEmbaucheFrom ? this.datePipe.transform(this.criteria.dateEmbaucheFrom, this.dateFormat) : environment.emptyForExport,
            'Date embauche Max': this.criteria.dateEmbaucheTo ? this.datePipe.transform(this.criteria.dateEmbaucheTo, this.dateFormat) : environment.emptyForExport,
            'Matricule Min': this.criteria.matriculeMin ? this.criteria.matriculeMin : environment.emptyForExport,
            'Matricule Max': this.criteria.matriculeMax ? this.criteria.matriculeMax : environment.emptyForExport,
            'Adress email': this.criteria.adressEmail ? this.criteria.adressEmail : environment.emptyForExport,
            'Compte bancaire': this.criteria.compteBancaire ? this.criteria.compteBancaire : environment.emptyForExport,
            //'Departement': this.criteria.departement?.id ? this.criteria.departement?.id : environment.emptyForExport ,
            //'Poste': this.criteria.poste?.id ? this.criteria.poste?.id : environment.emptyForExport ,
            //'Notation': this.criteria.notation?.id ? this.criteria.notation?.id : environment.emptyForExport ,
            //  'Nombre absence Min': this.criteria.nombreAbsenceMin ? this.criteria.nombreAbsenceMin : environment.emptyForExport ,
            //  'Nombre absence Max': this.criteria.nombreAbsenceMax ? this.criteria.nombreAbsenceMax : environment.emptyForExport ,
            //'Conges': this.criteria.conges?.id ? this.criteria.conges?.id : environment.emptyForExport ,
            //'Echelle': this.criteria.echelle?.reference ? this.criteria.echelle?.reference : environment.emptyForExport ,
            //'Echelon': this.criteria.echelon?.reference ? this.criteria.echelon?.reference : environment.emptyForExport ,
            //'Grade': this.criteria.grade?.libelle ? this.criteria.grade?.libelle : environment.emptyForExport ,
            'Local': this.criteria.local ? this.criteria.local : environment.emptyForExport,
        }];
    }

    public exporte(element: EmployeDto): void {
        this.service.export(element).subscribe((data: ArrayBuffer) => {
            const blob = new Blob([data], {type: 'application/pdf'});
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = "bilan.pdf";
            link.setAttribute('target', '_blank'); // open link in new tab
            link.click();
            window.URL.revokeObjectURL(url);
        }, (error) => {
            console.error(error); // handle any errors that occur
        });

    }
}