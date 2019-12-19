import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor.model';
import { DoctorService } from 'src/app/services/doctor.service';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  users:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {

   this.userService.getActiveDoctors(true).subscribe((data)=>
   {
     this.users=[...data];
     console.log(this.users);
   })
  }

}
