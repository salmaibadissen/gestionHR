import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {EmployeDto} from "./Employe.model";


export class AbsenceDto  extends BaseDto{

    public id: number;
   public dateAbsence: Date;
    public justification: string;
    public dateAbsenceMax: string ;
    public dateAbsenceMin: string ;
    public employe: EmployeDto

}
