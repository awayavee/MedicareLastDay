import { Injectable } from "@angular/core";
import { User } from '../model/user.model';
import { Router } from '@angular/router';

@Injectable ({
    providedIn:'root'
})

export class UserAuthService{

    loggedIn:boolean;
    
    role:string;
    redirectUrl=[];
    token:string;
    user:string;


    constructor(private router:Router){}

  


    public getToken(){
        return this.token;
    }
    public setToken(token :string){
        this.token=token
    }

    public getRole(){
        return this.role;
    }

    public setRole(role:string){
        this.role=role
    }

    public getUser(){
        return this.user;
    }

    public setUser(user:string){
        this.user=user
    }

   

    logOut(){
        this.redirectUrl=["/login"];
        this.user=null;
        this.role=null;
        this.loggedIn=false;
    }

}