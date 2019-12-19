import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Doctor } from 'src/app/model/doctor.model';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { MedicareService } from 'src/app/model/medicare-service.model';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  doctorEditForm:FormGroup;
  doctorEdited=false;
  updatedDoctorItem:Doctor;
  updatedMedicareServices:MedicareService;
  doctorId: number;
  workhours:string[]=['06:00-08:00am', '08:00-10:00am','10:00-12:00pm','12:00-02:00pm','02:00-04:00pm','04:00-06:00pm','06:00-08:00pm', '08:00-10:00pm',
  '10:00-12:00am','12:00-02:00am', '02:00-04:00am', '04:00-06:00'];


  constructor(private route:ActivatedRoute,private doctorService:DoctorService, private router:Router) { }

  ngOnInit() {

    this.doctorEditForm=new FormGroup({
    'username': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(20)]),
    'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
    'age': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]),
    'gender': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    'dateOfBirth': new FormControl(null, [Validators.required]),
    'contactNo': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]),
    'altContactNo': new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
    'email': new FormControl(null, [Validators.required,Validators.email,Validators.maxLength(50)]),
    'password': new FormControl(null, [Validators.required,Validators.maxLength(15)]),
    'address1': new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    'address2': new FormControl(null, [Validators.maxLength(100)]),
    'city': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    'state': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    'zipcode': new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')]),
    'degree': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    'speciality': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
    'workHours': new FormControl(null, [Validators.required,Validators.maxLength(20)]),
    'hospitalName': new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    'medicareService': new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    'serviceDescription': new FormControl(null, [Validators.required,Validators.maxLength(100)]),
    'amount': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
  
  });
  this.route.params.subscribe((params: Params) => {
    const doctorId = params['id']
    console.log(doctorId);
    console.log("helllo doctor edit");
    this.doctorService.getDoctor(doctorId).subscribe((doctor: Doctor) => {
      console.log("helllooooooooooo"+doctor);
      if (doctor) {

        doctor.dateOfBirth = new Date(doctor.dateOfBirth)
        this.doctorId=doctor.id
        this.doctorEditForm.patchValue({

          firstname:doctor.firstName,
          lastname:doctor.lastName,
          age:doctor.age,
          gender:doctor.gender,
          dateOfBirth:doctor.dateOfBirth.toISOString().slice(0, 10), 
          contactNo:doctor.contactNo,
          altContactNo:doctor.altContactNo,
          email:doctor.email,
          password:doctor.password,
          address1:doctor.address1,
          address2:doctor.address2,
          city:doctor.city,
          state:doctor.state,
          zipcode:doctor.zipCode,
          degree:doctor.degree,
          speciality:doctor.speciality,
          workHours:doctor.workHours,
          hospitalName:doctor.hospitalName,
          medicareService:doctor.medicareServices.medicareService,
          serviceDescription:doctor.medicareServices.serviceDescription,
          amount:doctor.medicareServices.amount,

        }
        )
        console.log(doctor.firstName);
      }

    })
  })
    
}

onDoctorEditFormSubmit(){
  this.doctorEdited=true;
  this.updatedMedicareServices={
    medicareService:this.doctorEditForm.value.medicareService,
    serviceDescription:this.doctorEditForm.value.serviceDescription,
    amount:this.doctorEditForm.value.amount
  }
  this.updatedDoctorItem={
    id:this.doctorId,
    firstName:this.doctorEditForm.value.firstname,
    lastName:this.doctorEditForm.value.lastname,
    age:this.doctorEditForm.value.age,
    gender:this.doctorEditForm.value.gender,
    dateOfBirth:this.doctorEditForm.value.dateOfBirth,
    contactNo:this.doctorEditForm.value.contactNo,
    altContactNo:this.doctorEditForm.value.altContactNo,
    email:this.doctorEditForm.value.email,
    password:this.doctorEditForm.value.password,
    address1:this.doctorEditForm.value.address1,
    address2:this.doctorEditForm.value.address2,
    city:this.doctorEditForm.value.city,
    state:this.doctorEditForm.value.state,
    zipCode:this.doctorEditForm.value.zipcode,
    degree:this.doctorEditForm.value.degree,
    speciality:this.doctorEditForm.value.speciality,
    workHours:this.doctorEditForm.value.workHours,
    hospitalName:this.doctorEditForm.value.hospitalName,
    medicareServices:this.updatedMedicareServices
  }
  this.doctorService.updateDoctor(this.updatedDoctorItem).subscribe(data=>{
    console.log("subscribed in doctor edit");
  })
}

get username(){
  return this.doctorEditForm.get('username');
}
get firstname(){
  return this.doctorEditForm.get('firstname');
}
get lastname(){
  return this.doctorEditForm.get('lastname');
}
get age(){
  return this.doctorEditForm.get('age');
}
get gender(){
  return this.doctorEditForm.get('gender');
}
get dateOfBirth(){
  return this.doctorEditForm.get('dateOfBirth');
}

get contactNo(){
  return this.doctorEditForm.get('contactNo');
}
get altContactNo(){
  return this.doctorEditForm.get('altContactNo');
}
get email(){
  return this.doctorEditForm.get('email');
}
get password(){
  return this.doctorEditForm.get('password');
}
get address1(){
  return this.doctorEditForm.get('address1');
}
get address2(){
  return this.doctorEditForm.get('address2');
}
get city(){
  return this.doctorEditForm.get('city');
}
get state(){
  return this.doctorEditForm.get('state');
}
get zipcode(){
  return this.doctorEditForm.get('zipcode');
}
get degree(){
  return this.doctorEditForm.get('degree');
}
get speciality(){
  return this.doctorEditForm.get('speciality');
}
get workHours(){
  return this.doctorEditForm.get('workHours');
}
get hospitalName(){
  return this.doctorEditForm.get('hospitalName');
}
get status(){
  return this.doctorEditForm.get('status');
}
get medicareService()
{
  return this.doctorEditForm.get('medicareService');
}
get serviceDescription()
{
  return this.doctorEditForm.get('serviceDescription');
}
get amount()
{
  return this.doctorEditForm.get('amount');
}

}
