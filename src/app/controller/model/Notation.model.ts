import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {EmployeDto} from "./Employe.model";


export class NotationDto  extends BaseDto{

    public id: number;
    public premierNote: number;
    public deusiemeNote: number;
    public troisiemeNote: number;
    public quatriemeNote: number;
    public cinquiemeNote: number;
    public sommeDesNotes: number;
    public commentaire: string;
    public premierNoteMax: string ;
    public premierNoteMin: string ;
    public deusiemeNoteMax: string ;
    public deusiemeNoteMin: string ;
    public troisiemeNoteMax: string ;
    public troisiemeNoteMin: string ;
    public quatriemeNoteMax: string ;
    public quatriemeNoteMin: string ;
    public cinquiemeNoteMax: string ;
    public cinquiemeNoteMin: string ;
    public sommeDesNotesMax: string ;
    public sommeDesNotesMin: string ;
    public annee: Number;
    public employe: EmployeDto;


}
