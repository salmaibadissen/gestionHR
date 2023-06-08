import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {DepartementCriteria} from "./DepartementCriteria.model";
import {EmployeCriteria} from "./EmployeCriteria.model";


export class AbsenceCriteria  extends   BaseCriteria  {

    public id: number;
    public dateAbsence: Date;
    public dateAbsenceFrom: Date;
    public dateAbsenceTo: Date;
    public justification: string;
    public justificationLike: string;
    public employe: EmployeCriteria ;
    public employes: Array<EmployeCriteria> ;

}
