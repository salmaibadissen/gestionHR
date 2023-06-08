import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EmployeCriteria} from "./EmployeCriteria.model";


export class NotationCriteria  extends   BaseCriteria  {

    public id: number;
     public premierNote: number;
     public premierNoteMin: number;
     public premierNoteMax: number;
     public deusiemeNote: number;
     public deusiemeNoteMin: number;
     public deusiemeNoteMax: number;
     public troisiemeNote: number;
     public troisiemeNoteMin: number;
     public troisiemeNoteMax: number;
     public quatriemeNote: number;
     public quatriemeNoteMin: number;
     public quatriemeNoteMax: number;
     public cinquiemeNote: number;
     public cinquiemeNoteMin: number;
     public cinquiemeNoteMax: number;
     public sommeDesNotes: number;
     public sommeDesNotesMin: number;
     public sommeDesNotesMax: number;
    public annee: Number;
    public anneFrom: Number;
    public anneeTo: Number;
 public employe: EmployeCriteria ;
 public employes: Array<EmployeCriteria> ;

}
