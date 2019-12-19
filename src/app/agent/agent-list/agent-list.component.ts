import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/model/agent.model';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {
  agents:Agent[]
  agentList:Agent[]
user:any;

  constructor(private agentService:AgentService) { }

  ngOnInit() {

   this.agentService.getAllAgents().subscribe((data:Agent[])=>
   {
     this.agents=[...data];
     console.log(this.agents);
   })
  }
}
