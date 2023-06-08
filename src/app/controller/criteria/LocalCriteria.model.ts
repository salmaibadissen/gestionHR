import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';


export class LocalCriteria  extends   BaseCriteria  {

    public id: number;
    public libelle: string;
    public libelleLike: string;
    public localisation: String;
    public localisationLike: String;


}
