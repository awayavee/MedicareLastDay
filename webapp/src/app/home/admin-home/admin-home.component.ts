import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/model/user.model';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
users:User[];


  constructor(private adminService:AdminService,private userAuthService:UserAuthService) { }

  ngOnInit() {
   this.getAllUsers();
   
  }
  getAllUsers(){
    this.adminService.getAllUsers().subscribe(data=>{
    
      this.users=[...data];
      console.log(this.users);
    })
  }
  onChange(user:User)
  {
    this.adminService.updateStatus(user.userId).subscribe(data=>{
      console.log("status updated");
    this.getAllUsers();

    })
  }

}
