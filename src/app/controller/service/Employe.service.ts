import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EmployeDto} from '../model/Employe.model';
import {EmployeCriteria} from '../criteria/EmployeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {CongesDto} from '../model/Conges.model';
import {DepartementDto} from '../model/Departement.model';
import {SexeDto} from '../model/Sexe.model';
import {EchelonDto} from '../model/Echelon.model';
import {PromotionDto} from '../model/Promotion.model';
import {PosteDto} from '../model/Poste.model';
import {NotationDto} from '../model/Notation.model';
import {EchelleDto} from '../model/Echelle.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService extends AbstractService<EmployeDto, EmployeCriteria> {
    private url_femme='http://localhost:8036/api/admin/employe/femme/';
     private  url_homme='http://localhost:8036/api/admin/employe/homme/';
     private  url_dep='http://localhost:8036/api/admin/employe/departement/nom/';
    private loginUrl: 'http://localhost:8036/api/admin/employe/user/login';
    constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/employe/');
    }


    login(username: string, password: string): Observable<any> {
        const loginRequest = {
            username ,
            password  };
        console.log(this.loginUrl);
        console.log(loginRequest);
      return this.http.post<any>( this.loginUrl, loginRequest);
    }

    // @ts-ignore
    public countFemmes():Observable<number>{
        return  this.http.get<number>(this.url_femme)

    }
    public countHommes():Observable<number>{
        return  this.http.get<number>(this.url_homme)

    }
    public export(element:EmployeDto): Observable<ArrayBuffer>{
        return this.http.post(this.API +'exportPdf/' ,element, {  responseType:"arraybuffer"});
    }

    getRepartitionParDepartement(): Observable<Map<string, number>> {
        return this.http.get<Map<string, number>>(environment.apiUrl+'admin/employe/repartition-departement');
    }
    public countDepartementNom(nom:string):Observable<number>{
        return this.http.get<number>(this.url_dep+nom)
    }
    public constrcutDto(): EmployeDto {
        return new EmployeDto();
    }

    public constrcutCriteria(): EmployeCriteria {
        return new EmployeCriteria();
    }
}
