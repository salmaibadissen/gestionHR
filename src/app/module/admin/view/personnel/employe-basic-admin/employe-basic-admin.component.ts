import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeService} from "../../../../../controller/service/Employe.service";

@Component({
  selector: 'app-employe-basic-admin',
  templateUrl: './employe-basic-admin.component.html',
  styleUrls: ['./employe-basic-admin.component.scss']
})
export class EmployeBasicAdminComponent implements OnInit{
  basicData: any;

  basicOptions: any;
  departements:any;
  employeDepartements:any;
  private repartitionParDepartement: Map<string, number>;
  private nom: IterableIterator<string>;
  private count: IterableIterator<number>;
  constructor( private employeService:EmployeService) {
  }
  ngOnInit(): void {

    this.employeService.getRepartitionParDepartement().subscribe(
        repartition => {
          this.repartitionParDepartement = repartition;
          // Utilisez les résultats pour afficher la répartition des employés par département
         this.departements = Object.keys(repartition);
          //this.count=this.repartitionParDepartement.values();
        this.employeDepartements =Object.values(repartition);
          this.createBasic();
        },
        error => {
          // Gérez les erreurs de requête
          console.error('Une erreur s\'est produite lors de la récupération de la répartition des employés par département :', error);
        }
    );
  }


   createBasic():void{
     const documentStyle = getComputedStyle(document.documentElement);
     const textColor = documentStyle.getPropertyValue('--text-color');
     const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
     const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

     this.basicData = {
       labels: this.departements,
       datasets: [
         {
           label: 'Departement',
           data: this.employeDepartements,
           backgroundColor: ['rgba(255, 159, 64, 0.2)' ,
           'rgba(75, 192, 192, 0.2)' ,
           'rgba(54, 162, 235, 0.2)' ,
           'rgba(153, 102, 255, 0.2)' ,
           'rgba(255, 99, 132, 0.2)' ,
           'rgba(255, 205, 86, 0.2)' ,
           'rgba(201, 203, 207, 0.2)' ,
           'rgba(145, 232, 225, 0.2)' ,
           'rgba(94, 245, 134, 0.2)'],
           borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)','rgb(255, 99, 132)' , 'rgb(255, 205, 86)' , 'rgb(201, 203, 207)' , 'rgb(145, 232, 225)' , 'rgb(94, 245, 134)'],
           borderWidth: 1
         }
       ]
     };

     this.basicOptions = {
       plugins: {
         legend: {
           labels: {
             color: textColor
           }
         }
       },
       scales: {
         y: {
           beginAtZero: true,
           ticks: {
             color: textColorSecondary
           },
           grid: {
             color: surfaceBorder,
             drawBorder: false
           }
         },
         x: {
           ticks: {
             color: textColorSecondary
           },
           grid: {
             color: surfaceBorder,
             drawBorder: false
           }
         }
       }
     };
   }

}
