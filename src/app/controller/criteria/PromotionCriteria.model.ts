import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {EchelonCriteria} from "./EchelonCriteria.model";
import {EchelleCriteria} from "./EchelleCriteria.model";
import {EmployeCriteria} from "./EmployeCriteria.model";
import {GradeCriteria} from "./GradeCriteria.model";


export class PromotionCriteria  extends   BaseCriteria  {

    public id: number;
    public  grade:GradeCriteria;
    public  grades:Array<GradeCriteria>;
    public  echelon:EchelonCriteria;
    public  echelle:EchelleCriteria;
    public  indice:number;
    public  dateActivation:Date;
    public  dateActivationFrom:Date;
    public  dateActivationTo:Date;
    public  employe: EmployeCriteria ;
    public  employes:Array<EmployeCriteria> ;


}
