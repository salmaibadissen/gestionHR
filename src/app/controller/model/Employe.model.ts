import {ParcoursUniversitaireDto} from './ParcoursUniversitaire.model';
import {CongesDto} from './Conges.model';
import {DepartementDto} from './Departement.model';
import {SexeDto} from './Sexe.model';
import {EchelonDto} from './Echelon.model';
import {PromotionDto} from './Promotion.model';
import {PosteDto} from './Poste.model';
import {NotationDto} from './Notation.model';
import {EchelleDto} from './Echelle.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';
import {LocalDto} from "./Local.model";
import {SituationFamilialeDto} from "./SituationFamiliale.model";


export class EmployeDto  extends BaseDto{

    public id: number;
    public username: string;
    public password: string;
    public prenom: string;
    public nomArabe: string;
    public nom: string;
    public dateDeNaissance: Date;
    public lieuDeNaissance: string;
    public adresse: string;
    public situationFamiliale: SituationFamilialeDto;
    public cin: string;
    public tel: string;
   public dateEmbauche: Date;
   public matricule: number;
    public adressEmail: string;
    public compteBancaire: string;
    public dateDeNaissanceMax: string ;
    public dateDeNaissanceMin: string ;
    public dateEmbaucheMax: string ;
    public dateEmbaucheMin: string ;
    public matriculeMax: string ;
    public matriculeMin: string ;
 /*   public localMax: string ;
    public localMin: string ;*/
    public sexe: SexeDto ;
    public parcoursUniversitaire: ParcoursUniversitaireDto ;
  //  public parcoursUniversitaireLike: String ;
    public departement: DepartementDto ;
    public poste: String ;
//    public notation: NotationDto ;
    public conges: CongesDto ;
    public local: LocalDto;
    public promotion: PromotionDto;

}
