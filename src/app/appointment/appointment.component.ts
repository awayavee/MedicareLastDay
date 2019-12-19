import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../model/doctor.model';
import { Appointment } from '../model/appointment.model';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';
import { UserAuthService } from '../services/user-auth.service';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

 
  appointmentForm:FormGroup;
  appointment:Appointment;
  doctorEdited=false;
  id:number;
  doctors:Doctor;
  user:User;
  constructor(private route:ActivatedRoute,private doctorService:DoctorService, private router:Router,private userService:UserService,
    private userAuthService:UserAuthService,private appointmentervice:AppointmentService) { }

  ngOnInit() {


    this.appointmentForm=new FormGroup({
    'patientFirstName': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'patientLastName': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'bookingDate': new FormControl(null, [Validators.required]),
    'appointmentDate': new FormControl(null, [Validators.required]),
    'medicareService':new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'doctor': new FormControl(null, [Validators.required,Validators.maxLength(20)]),
  
  });
    this.userService.getUser(this.userAuthService.getUser()).subscribe(data=>{
      console.log(data);
      this.user=data;

    })
   this.route.params.subscribe((params: Params) => {
  const doctorId = params['id']
    console.log(doctorId);
    console.log("Welcome to appointment");
    this.doctorService.getDoctor(doctorId).subscribe((doctor: Doctor) => {
      console.log("helllooooooooooo"+doctor);
      
      if (doctor) {
        this.doctors=doctor;
        doctor.dateOfBirth = new Date(doctor.dateOfBirth)
     
        this.appointmentForm.patchValue({
          medicareService:doctor.medicareServices.medicareService,
          doctor:"Dr "+doctor.firstName
        })
     
     
        
      }

    })
  })
    
}

onAppointmentFormSubmit(){
  console.log(this.appointmentForm.value);
  this.appointment={
    
    
    patientFirstName:this.appointmentForm.value['patientFirstName'],
    patientLastName:this.appointmentForm.value['patientLastName'],
    bookingDate:this.appointmentForm.value['bookingDate'],
    appointmentDate:this.appointmentForm.value['appointmentDate'],
    medicareServices:this.doctors.medicareServices,
    doctor:this.doctors,
    user:this.user

  }
  console.log(this.appointment);
  this.appointmentervice.addAppointment(this.appointment).subscribe(data=>{
    console.log("Appointment added");
  })
 
}


get patientFirstName(){
  return this.appointmentForm.get('patientFirstName');
}
get patientLastName(){
  return this.appointmentForm.get('patientLastName');
}
get bookingDate(){
  return this.appointmentForm.get('bookingDate');
}
get appointmentDate(){
  return this.appointmentForm.get('appointmentDate');
}
get medicareService(){
  return this.appointmentForm.get('medicareService');
}
get doctor(){
  return this.appointmentForm.get('doctor');
}
}