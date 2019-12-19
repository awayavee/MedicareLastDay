import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';

import { Patient } from '../model/patient.model';

@Injectable({
    providedIn: 'root'
})

export class PatientService{
    filter=new Subject()
    baseUrl=environment.baseUrlMedicare

    constructor(private http:HttpClient, private userAuthService:UserAuthService){}

    getAllPatients(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        console.log(this.userAuthService.getRole());
        console.log(this.userAuthService.getToken());
        
        
        return this.http.get<Patient[]>(this.baseUrl + "/medicare/patients", httpOptions)
    }

    getPatient(patientId: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        return this.http.get<Patient[]>(`${this.baseUrl + "/medicare/patient"}/${patientId}`, httpOptions)
    }

    updatePatient(patient: Patient): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        console.log(patient);
        
        return this.http.put<void>(this.baseUrl+"/medicare/patient",patient,httpOptions)
    }
    updatePatientStatus(id:number)
    {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        return this.http.get<Patient[]>(`${this.baseUrl + "/medicare/patient"}/${id}`, httpOptions)
    }

}