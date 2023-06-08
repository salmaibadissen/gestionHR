import {DepartementCriteria} from './DepartementCriteria.model';
import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class PosteCriteria  extends   BaseCriteria  {

    public id: number;
    public titre: string;
    public titreLike: string;
    public discription: string;
    public discriptionLike: string;
    public dateAffectation: Date;
    public dateAffectationFrom: Date;
    public dateAffectationTo: Date;
     public departement: DepartementCriteria ;
    public departements: Array<DepartementCriteria> ;

}
