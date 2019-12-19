import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin.model';
import { User } from 'src/app/model/user.model';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  adminRegisterForm:FormGroup;
  formSubmitted: boolean;
  admin:Admin;
  user:User;

  constructor(private userService:UserService, private router: Router, private userAuth:UserAuthService, private formBuilder:FormBuilder) {
   }

  ngOnInit() {
    this.adminRegisterForm=new FormGroup({
      'username': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'age': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]),
      'gender': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'dateOfBirth': new FormControl(null, [Validators.required]),
      'contactNo': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]),
      'altContactNo': new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required,Validators.email,Validators.maxLength(50)]),
      'password': new FormControl(null, [Validators.required,Validators.maxLength(15)])
    });
  
}

onSignUpSubmit(){
  console.log(this.adminRegisterForm.value);
  this.admin={
 
firstName:this.adminRegisterForm.value['firstname'],
lastName:this.adminRegisterForm.value['lastname'],
age:this.adminRegisterForm.value['age'],
gender:this.adminRegisterForm.value['gender'],
dateOfBirth:this.adminRegisterForm.value['dateOfBirth'],
contactNo:this.adminRegisterForm.value['contactNo'],
altContactNo:this.adminRegisterForm.value['altContactNo'],
email:this.adminRegisterForm.value['email'],
password:this.adminRegisterForm.value['password']
  }

  this.user={
    username:this.adminRegisterForm.value['username'],
    password:this.adminRegisterForm.value['password'],
    admin:this.admin
  }

  this.userService.addUser(this.user).subscribe((data)=>{
    console.log(this.user+" admin user object")

     this.router.navigate(['/login']);
  });

  this.formSubmitted=true;

}

get username(){
  return this.adminRegisterForm.get('username');
}

get firstname(){
  return this.adminRegisterForm.get('firstname');
}
get lastname(){
  return this.adminRegisterForm.get('lastname');
}
get age(){
  return this.adminRegisterForm.get('age');
}
get gender(){
  return this.adminRegisterForm.get('gender');
}
get dateOfBirth(){
  return this.adminRegisterForm.get('dateOfBirth');
}

get contactNo(){
  return this.adminRegisterForm.get('contactNo');
}
get altContactNo(){
  return this.adminRegisterForm.get('altContactNo');
}
get email(){
  return this.adminRegisterForm.get('email');
}
get password(){
  return this.adminRegisterForm.get('password');
}

get status(){
  return this.adminRegisterForm.get('status')
}
}
