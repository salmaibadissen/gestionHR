import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {EchelonDto} from '../model/Echelon.model';
import {EchelonCriteria} from '../criteria/EchelonCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EchelleDto} from '../model/Echelle.model';

@Injectable({
  providedIn: 'root'
})
export class EchelonService extends AbstractService<EchelonDto, EchelonCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/echelon/');
    }

    public constrcutDto(): EchelonDto {
        return new EchelonDto();
    }

    public constrcutCriteria(): EchelonCriteria {
        return new EchelonCriteria();
    }
}
