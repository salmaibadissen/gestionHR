import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EmployeCriteria} from "./EmployeCriteria.model";


export class CongesCriteria  extends   BaseCriteria  {

    public id: number;
    public dateDebut: string;
    public dateDebutFrom: string;
    public dateDebutTo: string;
    public duree: Number;
    public dureeMin: Number;
    public dureeMax: Number;
     public jourRestantParAnnee: number;
     public jourRestantParAnneeMin: number;
     public jourRestantParAnneeMax: number;
     public numeroAutorisation: number;
     public numeroAutorisationMax: number;
     public numeroAutorisationMin: number;
     public annee:number;
     public anneeMax:number;
    public anneeMin:number;
    public status :string;
     public statusLike :string;
     public dateAutorisation:Date;
    public employe: EmployeCriteria ;
    public employes: Array<EmployeCriteria> ;


}
