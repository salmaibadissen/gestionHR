import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {EchelonCriteria} from "../criteria/EchelonCriteria.model";
import {EchelleCriteria} from "../criteria/EchelleCriteria.model";
import {EmployeCriteria} from "../criteria/EmployeCriteria.model";
import {EchelonDto} from "./Echelon.model";
import {EchelleDto} from "./Echelle.model";
import {EmployeDto} from "./Employe.model";
import {GradeDto} from "./Grade.model";


export class PromotionDto  extends BaseDto{

    public id: number;
    public  grade:GradeDto;
    public  echelon:EchelonDto;
    public  echelle:EchelleDto;
    public  indice:number;
    public  dateActivation:Date;
    public  dateActivationMax:Date;
    public  dateActivationMin:Date;
    public employe: EmployeDto;

}
