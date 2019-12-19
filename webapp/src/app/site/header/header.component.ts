import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  constructor(private router:Router,private userAuthService: UserAuthService,private authService:AuthService, private userService:UserService) { 
  
    
  }

  ngOnInit() {
    
  }

  isAuthenticated(){
    return this.authService.loggedIn;
  }

  getUser(){
  return this.userAuthService.getUser();
    }

  isAdmin(){
    return this.authService.isAdmin;
  }

  isDoctor(){
    return this.authService.isDoctor;
  }

  isPatient(){
    return this.authService.isPatient;
  }

  isAgent(){
    return this.authService.isAgent;
  }
  
  
  onSignOut(){
    this.authService.logOut();
    this.router.navigate([this.authService.redirectUrl]);
  }
}
