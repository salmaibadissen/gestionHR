import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {DepartementDto} from '../model/Departement.model';
import {DepartementCriteria} from '../criteria/DepartementCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {EmployeDto} from '../model/Employe.model';
import {PosteDto} from '../model/Poste.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService extends AbstractService<DepartementDto, DepartementCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/departement/');
    }

    public constrcutDto(): DepartementDto {
        return new DepartementDto();
    }

    public constrcutCriteria(): DepartementCriteria {
        return new DepartementCriteria();
    }
}
