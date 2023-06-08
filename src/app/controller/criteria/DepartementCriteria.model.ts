import {EmployeCriteria} from './EmployeCriteria.model';
import {PosteCriteria} from './PosteCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class DepartementCriteria  extends   BaseCriteria  {

    public id: number;
    public nom: string;
    public nomLike: string;
    public discription: string;
    public discriptionLike: string;
//  public employe: EmployeCriteria ;
 // public employes: Array<EmployeCriteria> ;
    //  public postes: Array<PosteCriteria>;


}
