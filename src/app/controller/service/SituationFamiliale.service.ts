import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {SituationFamilialeDto} from '../model/SituationFamiliale.model';
import {SituationFamilialeCriteria} from '../criteria/SituationFamilialeCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class SituationFamilialeService extends AbstractService<SituationFamilialeDto, SituationFamilialeCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/situationFamiliale/');
    }

    public constrcutDto(): SituationFamilialeDto {
        return new SituationFamilialeDto();
    }

    public constrcutCriteria(): SituationFamilialeCriteria {
        return new SituationFamilialeCriteria();
    }
}
