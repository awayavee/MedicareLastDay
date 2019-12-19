import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from 'src/app/model/user.model';
import { Agent } from 'src/app/model/agent.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {

  agentCreateForm:FormGroup;
  agent:Agent;
  user:User;
  formSubmitted: boolean;


  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {

    this.agentCreateForm=new FormGroup({
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
    console.log(this.agentCreateForm.value);
    this.agent={
      firstName:this.agentCreateForm.value['firstname'],
      lastName:this.agentCreateForm.value['lastname'],
  age:this.agentCreateForm.value['age'],
  gender:this.agentCreateForm.value['gender'],
  dateOfBirth:this.agentCreateForm.value['dateOfBirth'],
  contactNo:this.agentCreateForm.value['contactNo'],
  altContactNo:this.agentCreateForm.value['altContactNo'],
  email:this.agentCreateForm.value['email'],
  password:this.agentCreateForm.value['password'],
  address1:this.agentCreateForm.value['address1'],
  address2:this.agentCreateForm.value['address2'],
  city:this.agentCreateForm.value['city'],
  state:this.agentCreateForm.value['state'],
  zipCode:this.agentCreateForm.value['zipcode']

    }

    this.user={
      username:this.agentCreateForm.value['username'],
         password:this.agentCreateForm.value['password'],
         agent:this.agent
       }
     
       this.userService.addUser(this.user).subscribe((data)=>{
         console.log(this.user+" agent user object")
         //this.router.navigate(['/adminHome']);
       });
       this.formSubmitted=true; 
  }

  get username(){
    return this.agentCreateForm.get('username');
  }

  get firstname(){
    return this.agentCreateForm.get('firstname');
  }
  get lastname(){
    return this.agentCreateForm.get('lastname');
  }
  get age(){
    return this.agentCreateForm.get('age');
  }
  get gender(){
    return this.agentCreateForm.get('gender');
  }
  get dateOfBirth(){
    return this.agentCreateForm.get('dateOfBirth');
  }

  get contactNo(){
    return this.agentCreateForm.get('contactNo');
  }
  get altContactNo(){
    return this.agentCreateForm.get('altContactNo');
  }
  get email(){
    return this.agentCreateForm.get('email');
  }
  get password(){
    return this.agentCreateForm.get('password');
  }
  get address1(){
    return this.agentCreateForm.get('address1');
  }

  get address2(){
    return this.agentCreateForm.get('address2');
  }
  get city(){
    return this.agentCreateForm.get('city');
  }
  get state(){
    return this.agentCreateForm.get('state');
  }
  get zipcode(){
    return this.agentCreateForm.get('zipcode');
  }
  get status(){
    return this.agentCreateForm.get('status');
  }
}
