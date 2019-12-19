import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DoctorHomeComponent } from 'src/app/home/doctor-home/doctor-home.component';
import { Doctor } from 'src/app/model/doctor.model';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MedicareService } from 'src/app/model/medicare-service.model';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.css']
})
export class DoctorSignupComponent implements OnInit {
  doctor:Doctor;
  user:User;
  medicareServices:MedicareService
  formSubmitted=false;

  doctorRegisterForm=this.formBuilder.group({
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
  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
  
  }
  onSignUpSubmit(){
    console.log("helllo signup");
    console.log(this.doctorRegisterForm.value['medicareService']);
    this.medicareServices={
      medicareService:this.doctorRegisterForm.value['medicareService'],
      serviceDescription:this.doctorRegisterForm.value['serviceDescription'],
      amount:this.doctorRegisterForm.value['amount']
    }
    console.log(this.medicareServices)
    this.doctor={
 
      firstName:this.doctorRegisterForm.value['firstname'],
      lastName:this.doctorRegisterForm.value['lastname'],
      age:this.doctorRegisterForm.value['age'],
      gender:this.doctorRegisterForm.value['gender'],
      dateOfBirth:this.doctorRegisterForm.value['dateOfBirth'],
      contactNo:this.doctorRegisterForm.value['contactNo'],
      altContactNo:this.doctorRegisterForm.value['altContactNo'],
      email:this.doctorRegisterForm.value['email'],
      password:this.doctorRegisterForm.value['password'],
      address1:this.doctorRegisterForm.value['address1'],
      address2:this.doctorRegisterForm.value['address2'],
      city:this.doctorRegisterForm.value['city'],
      state:this.doctorRegisterForm.value['state'],
      zipCode:this.doctorRegisterForm.value['zipcode'],
      degree:this.doctorRegisterForm.value['degree'],
      speciality:this.doctorRegisterForm.value['speciality'],
      workHours:this.doctorRegisterForm.value['workHours'],
      hospitalName:this.doctorRegisterForm.value['hospitalName'],
      medicareServices:{
      medicareService:this.doctorRegisterForm.value['medicareService'],
      serviceDescription:this.doctorRegisterForm.value['serviceDescription'],
      amount:this.doctorRegisterForm.value['amount']
    }
  }
        
     
      this.user={
          username:this.doctorRegisterForm.value['username'],
          password:this.doctorRegisterForm.value['password'],
          doctor:this.doctor
        }
        console.log(this.user);
        console.log(this.user.doctor.medicareServices)
        this.userService.addUser(this.user).subscribe((data)=>{
          console.log(this.user+" doctor signup")
      
           this.router.navigate(['/login']);
        });
      
        this.formSubmitted=true;
      
  }

  get username(){
    return this.doctorRegisterForm.get('username');
  }
  get firstname(){
    return this.doctorRegisterForm.get('firstname');
  }
  get lastname(){
    return this.doctorRegisterForm.get('lastname');
  }
  get age(){
    return this.doctorRegisterForm.get('age');
  }
  get gender(){
    return this.doctorRegisterForm.get('gender');
  }
  get dateOfBirth(){
    return this.doctorRegisterForm.get('dateOfBirth');
  }

  get contactNo(){
    return this.doctorRegisterForm.get('contactNo');
  }
  get altContactNo(){
    return this.doctorRegisterForm.get('altContactNo');
  }
  get email(){
    return this.doctorRegisterForm.get('email');
  }
  get password(){
    return this.doctorRegisterForm.get('password');
  }
  get address1(){
    return this.doctorRegisterForm.get('address1');
  }
  get address2(){
    return this.doctorRegisterForm.get('address2');
  }
  get city(){
    return this.doctorRegisterForm.get('city');
  }
  get state(){
    return this.doctorRegisterForm.get('state');
  }
  get zipcode(){
    return this.doctorRegisterForm.get('zipcode');
  }
  get degree(){
    return this.doctorRegisterForm.get('degree');
  }
  get speciality(){
    return this.doctorRegisterForm.get('speciality');
  }
  get workHours(){
    return this.doctorRegisterForm.get('workHours');
  }
  get hospitalName(){
    return this.doctorRegisterForm.get('hospitalName');
  }
  get status(){
    return this.doctorRegisterForm.get('status');
  }

  get medicareService()
  {
    return this.doctorRegisterForm.get('medicareService');
  }
  get serviceDescription()
  {
    return this.doctorRegisterForm.get('serviceDescription');
  }
  get amount()
  {
    return this.doctorRegisterForm.get('amount');
  }

}