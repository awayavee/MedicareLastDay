import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit {
  @Input() user: User;
  constructor(private adminService: AdminService, private userService: UserService,private authService:AuthService) { }

  ngOnInit() {


  }

  onChange(user: User) {
    this.adminService.updateStatus(user.userId).subscribe(data => {
      console.log("status updated");
      this.userService.getUser(user.username).subscribe(data => {
        this.user = data
      })


    })


  }
  isEditAllowed() {
    return this.authService.loggedIn && this.authService.isAdmin
  }

}
