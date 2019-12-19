import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserAuthService } from './user-auth.service';
import { User } from '../model/user.model';
import { Subject } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    baseUrl=environment.baseUrl;
    baseUrlMed=environment.baseUrlMedicare
    filter=new Subject();

    constructor(private http:HttpClient, private userAuthService:UserAuthService) {
    }

    getUserStatus(username:string):Observable<any>{

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.get<any>(`${this.baseUrl+ "/users"}/${username}`, httpOptions);

    }
    getActivePatients(status:boolean):Observable<any>{

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.get<any>(`${this.baseUrlMed+ "/medicare/users/patients"}/${status}`, httpOptions);

    }
    getActiveDoctors(status:boolean):Observable<any>{

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.get<any>(`${this.baseUrlMed+ "/medicare/users/doctors"}/${status}`, httpOptions);

    }
    getActiveAgents(status:boolean):Observable<any>{

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.get<any>(`${this.baseUrlMed+ "/medicare/users/agents"}/${status}`, httpOptions);

    }
    getUser(username:string):Observable<any>{

        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.get<any>(`${this.baseUrl+ "/users/getuser"}/${username}`, httpOptions);

    }

    addUser(user:User){
       

        return this.http.post<void>(`${this.baseUrl}/users`, user);
    }


    
}

