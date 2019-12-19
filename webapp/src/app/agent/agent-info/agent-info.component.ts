import { Component, OnInit, Input } from '@angular/core';
import { Agent } from 'src/app/model/agent.model';
import { User } from 'src/app/model/user.model';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  
   @Input() user:User;
  constructor(private adminService: AdminService, private userService: UserService,private authService:AuthService) { }

  ngOnInit() {


  }

  Gender(){ 
    if (this.user.agent.gender==="true"){
      return true;
    } else return false;
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
