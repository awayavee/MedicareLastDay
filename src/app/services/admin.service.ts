import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { User } from '../model/user.model';

@Injectable({
    providedIn: 'root'
})
export class AdminService
{
    filter=new Subject()
    baseUrl=environment.baseUrlMedicare
    constructor(private userAuthService:UserAuthService,private http:HttpClient)
    {

    }
    getAllUsers(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        console.log(this.userAuthService.getRole());
        console.log(this.userAuthService.getToken());
        
        
        return this.http.get<User[]>(this.baseUrl + "/medicare/users", httpOptions)
    }

    updateStatus(id:number):Observable<any>{
        const httpOptions={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })

        }
        return this.http.put<void>(`${this.baseUrl+ "/medicare/users"}/${id}`, httpOptions)
    }

}
