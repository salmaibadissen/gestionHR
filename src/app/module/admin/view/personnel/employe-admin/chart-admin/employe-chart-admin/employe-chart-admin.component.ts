import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-employe-chart-admin',
  templateUrl: './employe-chart-admin.component.html',
  styleUrls: ['./employe-chart-admin.component.scss']
})
export class EmployeChartAdminComponent implements OnInit{

  data: any;

  options: any;
  femmesCount: number;
hommesCount: number;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getHommesCount();
  this.getFemmesCount();

  }

  getFemmesCount(): void {
    this.http.get<number>('http://localhost:8036/api/admin/employe/femme/').subscribe(
        count => {
          this.femmesCount = count;
          this.createPieChart();
        },
        error => {
          console.log('Erreur lors de la récupération du nombre d\'employées femmes : ', error);
        }
    );
  }
  getHommesCount(): void {
    this.http.get<number>('http://localhost:8036/api/admin/employe/homme/').subscribe(
        count => {
          this.hommesCount = count;
          this.createPieChart();
        },
        error => {
          console.log('Erreur lors de la récupération du nombre d\'employées femmes : ', error);
        }
    );
  }
  createPieChart(): void {
    // Utilisez la bibliothèque de graphiques de votre choix pour créer le graphique circulaire (camembert) avec les données récupérées
    // Par exemple, vous pouvez utiliser Chart.js, ng2-charts, etc.
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    var jsonfile = [{type : "Homme" , num: this.hommesCount},{type : "Femme" , num:this.femmesCount}];
    var labels = jsonfile.map(function(e) {
      return e.type;
    });
    var data = jsonfile.map(function(e) {
      return e.num;
    });

    this.data = {
      labels: labels, //['A', 'B', 'C'],
      datasets: [
        {
          data: data, //[540, 325, 702],
          backgroundColor: ['blue','yellow','green'],
          hoverBackgroundColor: ['blue','yellow','green']
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };

  }







}
