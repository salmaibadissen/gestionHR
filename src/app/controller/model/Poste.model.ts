import {DepartementDto} from './Departement.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class PosteDto  extends BaseDto{

    public id: number;
    public titre: string;
    public discription: string;
   public dateAffectation: Date;
    public dateAffectationMax: string ;
    public dateAffectationMin: string ;
   // public departement: DepartementDto ;

}
