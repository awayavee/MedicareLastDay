import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients:Patient[]
  patientList:Patient[]
user:any;

  constructor(private patientService:PatientService) { }

  ngOnInit() {

   this.patientService.getAllPatients().subscribe((data:Patient[])=>
   {
     this.patients=[...data];
     console.log(this.patients);
   })
  }
}
