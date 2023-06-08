import {EmployeDto} from './Employe.model';
import {PosteDto} from './Poste.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';


export class DepartementDto  extends BaseDto{

    public id: number;
    public nom: string;
    public discription: string;
   // public employe: EmployeDto ;
  //   public postes: Array<PosteDto>;
  //   public employes: Array<EmployeDto>;

}
