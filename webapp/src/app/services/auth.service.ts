import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from '../model/user.model';
import { AuthenticationService } from './authenticate.service';
import { UserAuthService } from './user-auth.service';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loggedIn=false;

    isAdmin=false;
    isDoctor=false;
    isPatient=false;
    isAgent=false;

    redirectUrl='/';
    patientUrl='/patientHome';
    doctorUrl='/doctorHome';
    adminUrl='/adminHome';
    agentUrl='/agentHome';

    userAuthenticated: User;
    accessToken:string;
    error:string;
    isLoginValid:boolean=true;

    constructor(private userService:UserService, private authenticationService:AuthenticationService, private userAuthService: UserAuthService, private router:Router){
    }

    logIn(username:string, password:string){
        this.authenticationService.authenticate(username,password).subscribe(data=>{
                  this.userAuthService.loggedIn=true
                  console.log(data.role.substring(5).toLowerCase());
                  this.userAuthService.setToken(data.token)
                  this.userAuthService.setRole(data.role)
                  this.userAuthService.setUser(username)
            
            this.loggedIn=true;
            this.isLoginValid=true;
            console.log("before"+data.role);

            if(data.role==='ROLE_ADMIN'){
                this.isAdmin=true;
                this.isAgent=false;
                this.isDoctor=false;
                this.isPatient=false;
                
            } 
            if(data.role==='ROLE_DOCTOR'){
                this.isAdmin=false;
                this.isAgent=false;
                this.isDoctor=true;
                this.isPatient=false;
            }

            if(data.role==='ROLE_PATIENT'){
                this.isAdmin=false;
                this.isAgent=false;
                this.isDoctor=false;
                this.isPatient=true;
            }
           
            if(data.role==='ROLE_AGENT'){
                this.isAdmin=false;
                this.isAgent=true;
                this.isDoctor=false;
                this.isPatient=false;
            }

            this.router.navigate(["/"+data.role.substring(5).toLowerCase()+"Home"]);
            
                },
                (error)=>{
                 this.isLoginValid=false;
                
                  console.log(error.message);
                  if(error.status==401){
                    this.error="Invalid username/password"
                  }
                }) 
    }

logOut(){
    this.redirectUrl='/';
    this.loggedIn=false;
}

isAdminUser(){
    return this.isAdmin;
}
}

