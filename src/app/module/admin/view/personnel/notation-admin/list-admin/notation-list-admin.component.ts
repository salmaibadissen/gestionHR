import {Component, OnInit} from '@angular/core';
import {NotationService} from 'src/app/controller/service/Notation.service';
import {NotationDto} from 'src/app/controller/model/Notation.model';
import {NotationCriteria} from 'src/app/controller/criteria/NotationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';
import {EmployeService} from "../../../../../../controller/service/Employe.service";
import {DepartementService} from "../../../../../../controller/service/Departement.service";
import {SexeService} from "../../../../../../controller/service/Sexe.service";
import {LocalService} from "../../../../../../controller/service/Local.service";
import {EmployeDto} from "../../../../../../controller/model/Employe.model";

@Component({
  selector: 'app-notation-list-admin',
  templateUrl: './notation-list-admin.component.html'
})
export class NotationListAdminComponent extends AbstractListController<NotationDto, NotationCriteria, NotationService>  implements OnInit {

    fileName = 'Notation';
    private employes: Array<EmployeDto>;

  
    constructor(datePipe: DatePipe, notationService: NotationService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService, private employeService: EmployeService, private departementService: DepartementService, private sexeService: SexeService, private localService:LocalService
) {
        super(datePipe, notationService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEmploye();

    }

    public async loadNotations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Notation', 'list');
        isPermistted ? this.service.findAll().subscribe(notations => this.items = notations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'premierNote', header: 'Achevement tache'},
            {field: 'deusiemeNote', header: 'Rendement'},
            {field: 'troisiemeNote', header: 'Capacite organisation'},
            {field: 'quatriemeNote', header: 'Comportement professionnel'},
            {field: 'cinquiemeNote', header: 'Recherche'},
            {field: 'sommeDesNotes', header: 'Somme des notes'},
            {field: 'commentaire', header: 'Commentaire'},
            {field: 'annee', header: 'Année'},
            {field: 'employe?.cin', header: 'Employe'},

        ];
    }
  public async loadEmploye(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Employe', 'list');
        isPermistted ? this.employeService.findAllOptimized().subscribe(employes => this.employes = employes,error=>console.log(+error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }



	public initDuplicate(res: NotationDto) {

	}
   /* public exporte(element:NotationDto): void{
        this.service.export(element).subscribe((data: ArrayBuffer) => {
            const blob = new Blob([data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = "notation.pdf";
            link.setAttribute('target', '_blank'); // open link in new tab
            link.click();
            window.URL.revokeObjectURL(url);
        }, (error) => {
            console.error(error); // handle any errors that occur
        });
    }*/
   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Achevement tache': e.premierNote ,
                 'Rendement': e.deusiemeNote ,
                 'Capacite organisation': e.troisiemeNote ,
                 'Comportement professionnel': e.quatriemeNote ,
                 'Recherche': e.cinquiemeNote ,
                 'Somme des notes': e.sommeDesNotes ,
                 'Annee': e.annee ,

            }
        });

        this.criteriaData = [{
            'Premier note Min': this.criteria.premierNoteMin ? this.criteria.premierNoteMin : environment.emptyForExport ,
            'Premier note Max': this.criteria.premierNoteMax ? this.criteria.premierNoteMax : environment.emptyForExport ,
            'Deusieme note Min': this.criteria.deusiemeNoteMin ? this.criteria.deusiemeNoteMin : environment.emptyForExport ,
            'Deusieme note Max': this.criteria.deusiemeNoteMax ? this.criteria.deusiemeNoteMax : environment.emptyForExport ,
            'Troisieme note Min': this.criteria.troisiemeNoteMin ? this.criteria.troisiemeNoteMin : environment.emptyForExport ,
            'Troisieme note Max': this.criteria.troisiemeNoteMax ? this.criteria.troisiemeNoteMax : environment.emptyForExport ,
            'Quatrieme note Min': this.criteria.quatriemeNoteMin ? this.criteria.quatriemeNoteMin : environment.emptyForExport ,
            'Quatrieme note Max': this.criteria.quatriemeNoteMax ? this.criteria.quatriemeNoteMax : environment.emptyForExport ,
            'Cinquieme note Min': this.criteria.cinquiemeNoteMin ? this.criteria.cinquiemeNoteMin : environment.emptyForExport ,
            'Cinquieme note Max': this.criteria.cinquiemeNoteMax ? this.criteria.cinquiemeNoteMax : environment.emptyForExport ,
            'Somme des notes Min': this.criteria.sommeDesNotesMin ? this.criteria.sommeDesNotesMin : environment.emptyForExport ,
            'Somme des notes Max': this.criteria.sommeDesNotesMax ? this.criteria.sommeDesNotesMax : environment.emptyForExport ,
            'Annee': this.criteria.annee ? this.criteria.annee : environment.emptyForExport ,
            'Employe': this.criteria.employe?.password ? this.criteria.employe?.password : environment.emptyForExport ,

        }];
      }

}
