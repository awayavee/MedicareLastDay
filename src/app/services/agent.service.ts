import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { Agent } from '../model/agent.model';

@Injectable({
    providedIn: 'root'
})

export class AgentService{
    filter=new Subject()
    baseUrl=environment.baseUrlMedicare

    constructor(private http:HttpClient, private userAuthService:UserAuthService){}

    getAllAgents(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        console.log(this.userAuthService.getRole());
        console.log(this.userAuthService.getToken());
        
        
        return this.http.get<Agent[]>(this.baseUrl + "/medicare/agents", httpOptions)
    }

    getAgent(agentId: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        return this.http.get<Agent[]>(`${this.baseUrl + "/medicare/agent"}/${agentId}`, httpOptions)
    }

    updateAgent(agent: Agent): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        console.log(agent);
        
        return this.http.put<void>(this.baseUrl+"/medicare/agent",agent,httpOptions)
    }

}