import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';
import { HeaderComponent } from './site/header/header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarouselComponent } from './site/carousel/carousel.component';
import { AdminSignupComponent } from './site/admin-signup/admin-signup.component';
import { PatientSignupComponent } from './site/patient-signup/patient-signup.component';
import { AgentSignupComponent } from './site/agent-signup/agent-signup.component';
import { DoctorSignupComponent } from './site/doctor-signup/doctor-signup.component';
import { SignupOptionComponent } from './site/signup-option/signup-option.component';
import { HomeComponent } from './home/home/home.component';
// import { NguCarouselModule } from '@ngu/carousel';
import { PatientHomeComponent } from './home/patient-home/patient-home.component';
import { DoctorHomeComponent } from './home/doctor-home/doctor-home.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AgentHomeComponent } from './home/agent-home/agent-home.component';
import { AuthService } from './services/auth.service';
import { UserAuthService } from './services/user-auth.service';
import { AuthenticationService } from './services/authenticate.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { DoctorInfoComponent } from './doctor/doctor-info/doctor-info.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { DoctorService } from './services/doctor.service';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { PatientInfoComponent } from './patient/patient-info/patient-info.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { MedicalTestHistoryComponent } from './medical-test-history/medical-test-history.component';
import { ViewMedicareTestHistoryComponent } from './view-medicare-test-history/view-medicare-test-history.component';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { AgentInfoComponent } from './agent/agent-info/agent-info.component';
import { AgentEditComponent } from './agent/agent-edit/agent-edit.component';
import { CreateAgentComponent } from './admin/create-agent/create-agent.component';
import { CreateDoctorComponent } from './admin/create-doctor/create-doctor.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DoctorSignupComponent,
    CarouselComponent,
    AdminSignupComponent,
    PatientSignupComponent,
    AgentSignupComponent,
    SignupOptionComponent,
    HomeComponent,
    PatientHomeComponent,
    DoctorHomeComponent,
    AdminHomeComponent,
    AgentHomeComponent,
    DoctorInfoComponent,
    DoctorListComponent,
    DoctorEditComponent,
    PatientEditComponent,
    PatientInfoComponent,
    PatientListComponent,
    AppointmentComponent,
    ViewAppointmentComponent,
    MedicalTestHistoryComponent,
    ViewMedicareTestHistoryComponent,
    AgentListComponent,
    AgentInfoComponent,
    AgentEditComponent,
    CreateAgentComponent,
    CreateDoctorComponent,
  
  ],
  imports: [
    // NguCarouselModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [AuthService, UserAuthService, AuthenticationService, UserService, DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
