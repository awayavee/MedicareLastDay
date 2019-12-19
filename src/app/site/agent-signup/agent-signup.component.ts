import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Admin } from 'src/app/model/admin.model';

import { User } from 'src/app/model/user.model';
import { Router } from '@angular/router';
import { Agent } from 'src/app/model/agent.model';

@Component({
  selector: 'app-agent-signup',
  templateUrl: './agent-signup.component.html',
  styleUrls: ['./agent-signup.component.css']
})
export class AgentSignupComponent implements OnInit {


  agentRegisterForm:FormGroup;
 
  agent:Agent;
  user:User;
  formSubmitted: boolean;

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {

    this.agentRegisterForm=new FormGroup({
      'username': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'firstname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'lastname': new FormControl(null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$'), Validators.maxLength(50)]),
      'age': new FormControl(null, [Validators.required,Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]),
      'gender': new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      'dateOfBirth': new FormControl(null, [Validators.required]),
      'contactNo': new FormControl(null,[Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]),
      'altContactNo': new FormControl(null, [Validators.pattern('^[0-9]+$'),Validators.maxLength(10)]),
      'email': new FormControl(null, [Validators.required,Validators.email,Validators.maxLength(50)]),
      'password': new FormControl(null, [Validators.required,Validators.maxLength(15)]),
      'address1': new FormControl(null, [Validators.required, Validators.maxLength(100)]),
      'address2': new FormControl(null, Validators.maxLength(100)),
      'city': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'state': new FormControl(null, [Validators.required,Validators.maxLength(50)]),
      'zipcode': new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.pattern('^[0-9]+$')])
    })
  }

  onSignUpSubmit(){
    console.log(this.agentRegisterForm.value);
    this.agent={
      firstName:this.agentRegisterForm.value['firstname'],
      lastName:this.agentRegisterForm.value['lastname'],
  age:this.agentRegisterForm.value['age'],
  gender:this.agentRegisterForm.value['gender'],
  dateOfBirth:this.agentRegisterForm.value['dateOfBirth'],
  contactNo:this.agentRegisterForm.value['contactNo'],
  altContactNo:this.agentRegisterForm.value['altContactNo'],
  email:this.agentRegisterForm.value['email'],
  password:this.agentRegisterForm.value['password'],
  address1:this.agentRegisterForm.value['address1'],
  address2:this.agentRegisterForm.value['address2'],
  city:this.agentRegisterForm.value['city'],
  state:this.agentRegisterForm.value['state'],
  zipCode:this.agentRegisterForm.value['zipcode']

    }

    this.user={
      username:this.agentRegisterForm.value['username'],
         password:this.agentRegisterForm.value['password'],
         agent:this.agent
       }
     
       this.userService.addUser(this.user).subscribe((data)=>{
         console.log(this.user+" agent user object")
         this.router.navigate(['/login']);
       });
       this.formSubmitted=true; 
  }

  get username(){
    return this.agentRegisterForm.get('username');
  }

  get firstname(){
    return this.agentRegisterForm.get('firstname');
  }
  get lastname(){
    return this.agentRegisterForm.get('lastname');
  }
  get age(){
    return this.agentRegisterForm.get('age');
  }
  get gender(){
    return this.agentRegisterForm.get('gender');
  }
  get dateOfBirth(){
    return this.agentRegisterForm.get('dateOfBirth');
  }

  get contactNo(){
    return this.agentRegisterForm.get('contactNo');
  }
  get altContactNo(){
    return this.agentRegisterForm.get('altContactNo');
  }
  get email(){
    return this.agentRegisterForm.get('email');
  }
  get password(){
    return this.agentRegisterForm.get('password');
  }
  get address1(){
    return this.agentRegisterForm.get('address1');
  }

  get address2(){
    return this.agentRegisterForm.get('address2');
  }
  get city(){
    return this.agentRegisterForm.get('city');
  }
  get state(){
    return this.agentRegisterForm.get('state');
  }
  get zipcode(){
    return this.agentRegisterForm.get('zipcode');
  }
  get status(){
    return this.agentRegisterForm.get('status');
  }

}
