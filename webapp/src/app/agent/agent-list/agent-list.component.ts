import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/model/agent.model';
import { AgentService } from 'src/app/services/agent.service';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  

  users:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {

   this.userService.getActiveAgents(true).subscribe((data)=>
   {
     this.users=[...data];
     console.log(this.users);
   })
  }

}