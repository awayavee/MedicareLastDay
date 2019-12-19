import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'src/app/model/doctor.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {
  @Input() doctor:Doctor;
doctorImg:string[]=['https://images.unsplash.com/photo-1550831107-1553da8c8464?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1551601651-bc60f254d532?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1520177812839-78269c5ed62d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1567568315185-8738d14226ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1536064479547-7ee40b74b807?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
'https://images.unsplash.com/photo-1560249953-598cedd0e273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
]

  constructor(private authService:AuthService) { }

  ngOnInit() {
  
  }
  isEditAllowed(){
    return this.authService.loggedIn && this.authService.isAdmin
  }

}
