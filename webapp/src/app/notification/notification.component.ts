import { Component, OnInit } from '@angular/core';
import { Appointment } from '../model/appointment.model';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification:number[]

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit() {

    this.appointmentService.filter.subscribe(data=>{
      console.log(data);
      this.notification.push(data);
    })
  }

}
