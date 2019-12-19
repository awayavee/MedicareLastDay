import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { UserAuthService } from '../services/user-auth.service';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  appointments:Appointment[];
  appointmentStatus:boolean;
  doctor:Doctor;

  constructor(private appointmentService:AppointmentService,private userAuthService:UserAuthService,private userService:UserService) { }

  ngOnInit() {
    if(this.userAuthService.getToken())
    {
    this.userService.getUser(this.userAuthService.getUser()).subscribe(data=>{
      console.log(data);
      if(data.doctor)
      this.doctor=data.doctor;
      this.view(this.doctor);
    })
  }
  }
  view(doctor:Doctor)
  {
    this.appointmentService.viewAppointment(doctor).subscribe(data=>{
      this.appointments=[...data];
      console.log(this.appointments);
    })
  }
  onChange(appointment:Appointment)
  {
    this.appointmentService.updateStatus(appointment.id).subscribe(data=>{
    console.log("status updated" );
    if(appointment.status===true)
    this.appointmentService.filter.next(1);
    if(appointment.status===false)
    this.appointmentService.filter.next(-1);
    this.view(appointment.doctor);

    }) 
  }

}
