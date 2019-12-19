import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/model/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
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
