import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class AuthenticationService{
    baseUrl=environment.baseUrl;
    constructor(private httpClient: HttpClient){}

    public authenticate(user:String, password:string):Observable<any>{
        let credentials=btoa(user +':' + password);
        let headers=new HttpHeaders();
        headers=headers.set('Authorization', 'Basic '+ credentials);
        console.log({headers});
        return this.httpClient.get(this.baseUrl + "/authenticate", {headers})
}
}
