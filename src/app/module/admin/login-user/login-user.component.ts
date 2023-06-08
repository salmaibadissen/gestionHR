import {Component, OnInit} from '@angular/core';
import {EmployeService} from "../../../controller/service/Employe.service";
import {environment} from "../../../../environments/environment";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../zynerator/security/Auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit{
  username: string;
  password: string;

  constructor(private employeService: EmployeService,private router:Router,private authService:AuthService,private http:HttpClient) { }
   loginForm = new FormGroup({
        username:new FormControl('',Validators.required),
        password:new FormControl('',Validators.required)
    })

  submit(): void {
  /*  const formValues = this.loginForm.value;
    const username = formValues.username;
    const passowrd = formValues.password;
    this.authService.loginUser(username, passowrd);*/

  /* this.employeService.login(this.username, this.password).subscribe(
        response => {
          console.log('Authentification réussie');
            //this.router.navigate(['/' + environment.rootAppUrl + '/admin']);
        },
        error => {
          // Gérer les erreurs d'authentification
          console.error('Erreur d\'authentification :', error);
        }
    );*/
      const loginData = {
          username: this.username,
          password: this.password
      };
      this.http.post('http://localhost:8036/api/admin/employe/user/login',loginData).subscribe(
          response => {
            //  console.log('Authentification réussie');
          },
          error => {
              // Gérer les erreurs d'authentification
             // console.error('Erreur d\'authentification :', error);
          }
      )
  }

    ngOnInit(): void {
    }

}
