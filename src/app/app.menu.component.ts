import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';

import { AuthService } from 'src/app/zynerator/security/Auth.service';
import { RoleService } from 'src/app/zynerator/security/Role.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  animations: [
    trigger('inline', [
      state(
        'hidden',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visible',
        style({
          height: '*',
        })
      ),
      state(
        'hiddenAnimated',
        style({
          height: '0px',
          overflow: 'hidden',
        })
      ),
      state(
        'visibleAnimated',
        style({
          height: '*',
        })
      ),
      transition(
        'visibleAnimated => hiddenAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
      transition(
        'hiddenAnimated => visibleAnimated',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class AppMenuComponent implements OnInit {
  model: any[];
  modelsuperadmin:any[];
  modelanonymous: any[];
    modeladmin : any[];
  constructor(public app: AppComponent,
   public appMain: AppMainComponent,
   private roleService: RoleService,
   private authService:AuthService,
  private router: Router) {}

  ngOnInit() {


    this.modeladmin =
      [
           /*   {
                label: 'Gestion tache',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste poste',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/poste/list']
                    },
                ]
              },*/

          {
              label: 'Gestion employe',
              icon: 'pi pi-wallet',
              items:[
                  {
                      label: 'Liste employe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/employe/list']
                  }
              ]
          },
              {
                label: 'Gestion promotion',
                icon: 'pi pi-wallet',
                items:[
                   /* {
                      label: 'Liste sexe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/sexe/list']
                    },
                    {
                      label: 'Liste echelon',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personel/echelon/list']
                    },*/
                   {
                      label: 'Liste promotion',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personel/promotion/list']
                    },
                  /*  {
                        label: 'Liste grades',
                        icon: 'pi pi-fw pi-plus-circle',
                        routerLink: ['/app/admin/personel/grade/list']
                    },
                    {
                      label: 'Liste echelle',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/echelle/list']
                    },*/
                ]
              },
              {
                label: 'Gestion service',
                icon: 'pi pi-wallet',
                items:[
                 /*   {
                      label: 'Liste parcours universitaire',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/parcours-universitaire/list']
                    },*/
                    {
                      label: 'Liste departement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/departement/list']
                    },
                    {
                      label: 'Liste local',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/local/list']
                    },
                ]
              },
              {
                label: 'Gestion Notation',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste notation',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/notation/list']
                    },
                ]
              },
              {
                label: 'Gestion Absence',
                icon: 'pi pi-wallet',
                items:[
                    {
                      label: 'Liste conges',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/conges/list']
                    },
                    {
                      label: 'Liste absence',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/absence/list']
                    },
                ]
              },
          {
                label: 'Les statistiques',
                 icon: 'pi pi-wallet',
              items:[
                  {
                      label: 'Repartition par sexe',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/statistique/sexe']
                  },
                  {
                      label: 'Repartition par departement',
                      icon: 'pi pi-fw pi-plus-circle',
                      routerLink: ['/app/admin/personnel/statistique/departement']
                  },
              ]
          },
    ]
        if (this.authService.authenticated) {
      if (this.authService.authenticatedUser.roles) {

        this.authService.authenticatedUser.roles.forEach(role => {
          const roleName: string = this.getRole(role);
          this.roleService._role.next(roleName.toUpperCase());
          eval('this.model = this.model' + this.getRole(role));
        })
      }

    }
  }
  getRole(text){
  const [role, ...rest] = text.split('_');
  return rest.join('').toLowerCase();
}
  onMenuClick(event) {
    this.appMain.onMenuClick(event);
  }
}
