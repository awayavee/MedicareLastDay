import { Component, OnInit, Input } from '@angular/core';
import { Agent } from 'src/app/model/agent.model';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {

  genders:boolean;
   @Input() agent:Agent;
  constructor() { }

  ngOnInit() {


  }

  Gender(){
    if (this.agent.gender==="true"){
      return true;
    } else return false;
  }

}
