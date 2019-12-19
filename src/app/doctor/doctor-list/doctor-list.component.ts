import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors:Doctor[]
  doctorList:Doctor[]
user:any;

  constructor(private doctorService:DoctorService) { }

  ngOnInit() {

   this.doctorService.getAllDoctors().subscribe((data:Doctor[])=>
   {
     this.doctors=[...data];
     console.log(this.doctors);
   })
  }

}
