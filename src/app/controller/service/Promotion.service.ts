import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {PromotionDto} from '../model/Promotion.model';
import {PromotionCriteria} from '../criteria/PromotionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PromotionService extends AbstractService<PromotionDto, PromotionCriteria> {
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/promotion/');
    }

    public constrcutDto(): PromotionDto {
        return new PromotionDto();
    }

    public constrcutCriteria(): PromotionCriteria {
        return new PromotionCriteria();
    }
}
