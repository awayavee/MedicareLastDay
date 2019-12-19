import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
  @Input() patient:Patient;
  users:User[]
 
 
  constructor(private userService:UserService) { }

  ngOnInit() {
  
this.userService.getActiveUsers(true).subscribe(data=>{
this.users=[...data]
console.log(this.users);
})
  }
  // getAllUsers(){
  //   this.patientService.getPatient(this.patient.id).subscribe(data=>{
    
  //     this.users=[...data];
  //     console.log(this.users);
  //   })
  // }
  // onChange(patient:Patient)
  // {
  //   console.log("inside onchange")
  //   this.patientService.updatePatientStatus(patient.id).subscribe(data=>{
  //     console.log("status updated");
  //     this.patientService.getPatient(patient.id).subscribe(data=>{
  //       console.log(data);
  //     })

  //   })
  // }

}
