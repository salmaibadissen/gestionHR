import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {EmployeDto} from "./Employe.model";
import {LocalDto} from "./Local.model";


export class CongesDto  extends BaseDto{

    public id: number;
   public dateDebut: string;
   public jourRestantParAnnee: number;
    public jourRestantParAnneeMax: string ;
    public jourRestantParAnneeMin: string ;
    public status:string;
    public duree: number;
    public annee:number;
    public numeroAutorisation:number;
    public dateAutorisation:Date;
 //   public employes: Array<EmployeDto>;
    public employe: EmployeDto;


}
