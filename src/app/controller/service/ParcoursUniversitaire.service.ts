import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ParcoursUniversitaireDto} from '../model/ParcoursUniversitaire.model';
import {ParcoursUniversitaireCriteria} from '../criteria/ParcoursUniversitaireCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ParcoursUniversitaireService extends AbstractService<ParcoursUniversitaireDto, ParcoursUniversitaireCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/parcoursUniversitaire/');
    }

    public constrcutDto(): ParcoursUniversitaireDto {
        return new ParcoursUniversitaireDto();
    }

    public constrcutCriteria(): ParcoursUniversitaireCriteria {
        return new ParcoursUniversitaireCriteria();
    }
}
