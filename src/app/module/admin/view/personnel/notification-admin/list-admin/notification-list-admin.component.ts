import {Component, OnInit} from '@angular/core';
import {SituationFamilialeService} from 'src/app/controller/service/SituationFamiliale.service';
import {SituationFamilialeDto} from 'src/app/controller/model/SituationFamiliale.model';
import {SituationFamilialeCriteria} from 'src/app/controller/criteria/SituationFamilialeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';
import { RoleService } from 'src/app/zynerator/security/Role.service';
import {DatePipe} from '@angular/common';



import { MessageService, ConfirmationService } from 'primeng/api';
import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { ExportService } from 'src/app/zynerator/util/Export.service';

@Component({
  selector: 'app-notification-list-admin',
  templateUrl: './notification-list-admin.component.html'
})
export class NotificationListAdminComponent extends AbstractListController<SituationFamilialeDto, SituationFamilialeCriteria, SituationFamilialeService>  implements OnInit {

    fileName = 'Notification';

  
    constructor(datePipe: DatePipe, notificationService: SituationFamilialeService, messageService: MessageService, confirmationService: ConfirmationService
        , roleService: RoleService, router: Router , authService: AuthService , exportService: ExportService
) {
        super(datePipe, notificationService, messageService, confirmationService, roleService, router, authService, exportService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadNotifications(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Notification', 'list');
        isPermistted ? this.service.findAll().subscribe(notifications => this.items = notifications,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'dateNotification', header: 'Date notification'},
        ];
    }



	public initDuplicate(res: SituationFamilialeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
              //  'Date notification': this.datePipe.transform(e.dateNotification , 'dd/MM/yyyy hh:mm'),
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
         //   'Date notification Min': this.criteria.dateNotificationFrom ? this.datePipe.transform(this.criteria.dateNotificationFrom , this.dateFormat) : environment.emptyForExport ,
          //  'Date notification Max': this.criteria.dateNotificationTo ? this.datePipe.transform(this.criteria.dateNotificationTo , this.dateFormat) : environment.emptyForExport ,
        }];
      }
}
