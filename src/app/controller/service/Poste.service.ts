import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PosteDto} from '../model/Poste.model';
import {PosteCriteria} from '../criteria/PosteCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {DepartementDto} from '../model/Departement.model';

@Injectable({
  providedIn: 'root'
})
export class PosteService extends AbstractService<PosteDto, PosteCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/poste/');
    }

    public constrcutDto(): PosteDto {
        return new PosteDto();
    }

    public constrcutCriteria(): PosteCriteria {
        return new PosteCriteria();
    }
}
