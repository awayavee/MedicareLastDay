import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Patient } from 'src/app/model/patient.model';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  patientRegisterForm:FormGroup;
  patient:Patient;
  user:User;
  formSubmitted:boolean;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {

    this.patientRegisterForm=new FormGroup({
      'username': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'age': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]),
      'gender': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'dateOfBirth': new FormControl(null, [Validators.required]),
      'contactNo': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10), Validators.minLength(10)]),
      'altContactNo': new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required,Validators.email,Validators.maxLength(50)]),
      'password': new FormControl(null, [Validators.required,Validators.maxLength(15)]),
      'address1': new FormControl(null, [Validators.required,Validators.maxLength(100)]),
      'address2': new FormControl(null, [Validators.maxLength(100)]),
      'city': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'state': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'zipcode': new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')])
    })
  }

  onSignUpSubmit(){
    console.log(this.patientRegisterForm.value);
    this.patient={
      firstName:this.patientRegisterForm.value['firstname'],
      lastName:this.patientRegisterForm.value['lastname'],
  age:this.patientRegisterForm.value['age'],
  gender:this.patientRegisterForm.value['gender'],
  dateOfBirth:this.patientRegisterForm.value['dateOfBirth'],
  contactNo:this.patientRegisterForm.value['contactNo'],
  altContactNo:this.patientRegisterForm.value['altContactNo'],
  email:this.patientRegisterForm.value['email'],
  password:this.patientRegisterForm.value['password'],
  address1:this.patientRegisterForm.value['address1'],
  address2:this.patientRegisterForm.value['address2'],
  city:this.patientRegisterForm.value['city'],
  state:this.patientRegisterForm.value['state'],
  zipCode:this.patientRegisterForm.value['zipcode']

    }

    this.user={
      username:this.patientRegisterForm.value['username'],
         password:this.patientRegisterForm.value['password'],
         patient:this.patient
       }
     
       this.userService.addUser(this.user).subscribe((data)=>{
         console.log(this.user+" agent user object")
     
          this.router.navigate(['/login']);
       });
       this.formSubmitted=true;
     
  
  
  }

  get username(){
    return this.patientRegisterForm.get('username');
  }


  get firstname(){
    return this.patientRegisterForm.get('firstname');
  }
  get lastname(){
    return this.patientRegisterForm.get('lastname');
  }
  get age(){
    return this.patientRegisterForm.get('age');
  }
  get gender(){
    return this.patientRegisterForm.get('gender');
  }
  get dateOfBirth(){
    return this.patientRegisterForm.get('dateOfBirth');
  }

  get contactNo(){
    return this.patientRegisterForm.get('contactNo');
  }
  get altContactNo(){
    return this.patientRegisterForm.get('altContactNo');
  }
  get email(){
    return this.patientRegisterForm.get('email');
  }
  get password(){
    return this.patientRegisterForm.get('password');
  }
  get address1(){
    return this.patientRegisterForm.get('address1');
  }

  get address2(){
    return this.patientRegisterForm.get('address2');
  }
  get city(){
    return this.patientRegisterForm.get('city');
  }
  get state(){
    return this.patientRegisterForm.get('state');
  }
  get zipcode(){
    return this.patientRegisterForm.get('zipcode');
  }
  get status(){
    return this.patientRegisterForm.get('status');
  }

}
