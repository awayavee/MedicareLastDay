import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';
import { Doctor } from '../model/doctor.model';

@Injectable({
    providedIn: 'root'
})

export class DoctorService{
    filter=new Subject()
    baseUrl=environment.baseUrlMedicare

    constructor(private http:HttpClient, private userAuthService:UserAuthService){}

    getAllDoctors(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        console.log(this.userAuthService.getRole());
        console.log(this.userAuthService.getToken());
        
        
        return this.http.get<Doctor[]>(this.baseUrl + "/medicare/doctors", httpOptions)
    }

    getDoctor(doctorId: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        return this.http.get<Doctor[]>(`${this.baseUrl + "/medicare/doctor"}/${doctorId}`, httpOptions)
    }
    getDoctors(medicareServices: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        return this.http.get<Doctor[]>(`${this.baseUrl + "/medicare/doctors"}/${medicareServices}`, httpOptions)
    }


    updateDoctor(doctor: Doctor): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.userAuthService.getToken()
            })
        }
        console.log(doctor);
        
        return this.http.put<void>(this.baseUrl+"/medicare/doctor",doctor,httpOptions)
    }

}