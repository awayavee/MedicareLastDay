import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
redirectUrl:string="/";
status:boolean=true;


  authSource: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute, private authService: AuthService, private userService:UserService) {

   }

  ngOnInit() {
    // this.authSource = this.authService.authSource
  }

  onSubmit(form: NgForm) {

    this.authService.logIn(form.value.username, form.value.password);
    
    // this.userService.getUser(form.value.username).subscribe(data=>{
    //   console.log(data)
    //   //  this.status=data.status;
    //   //  console.log(this.status);
    //   if(this.status){

    //   this.redirectUrl="/";
    //   this.router.navigate([this.redirectUrl]);
    //   }
      
    // })
  }

  isLoginValid(){

   // console.log(this.authService.isLoginValid);
    return this.authService.isLoginValid;
  
  }

  
}
