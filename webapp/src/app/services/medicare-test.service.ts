import { Subject } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Injectable } from '@angular/core'
import { UserAuthService } from './user-auth.service'
import { HttpHeaders, HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class MedicareTestService{
    filter=new Subject()
    baseUrl=environment.baseUrlMedicare

    constructor(private http:HttpClient, private userAuthService:UserAuthService){}
    
    viewMedicareTestHistory()
    {
        const httpOptions={
            headers:new HttpHeaders({
                'Content-Type':'application/json',
                'Authorization':'Bearer '+ this.userAuthService.getToken()
            })
        };

        return this.http.get<any>(`${this.baseUrl+ "/medicare/history"}`, httpOptions);
    }
}