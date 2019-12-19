import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  users:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {

   this.userService.getActivePatients(true).subscribe((data)=>
   {
     this.users=[...data];
     console.log(this.users);
   })
  }
}
