import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './site/login/login.component';
import { AdminSignupComponent } from './site/admin-signup/admin-signup.component';
import { PatientSignupComponent } from './site/patient-signup/patient-signup.component';
import { AgentSignupComponent } from './site/agent-signup/agent-signup.component';
import { DoctorSignupComponent } from './site/doctor-signup/doctor-signup.component';
import { CarouselComponent } from './site/carousel/carousel.component';
import { SignupOptionComponent } from './site/signup-option/signup-option.component';
import { HomeComponent } from './home/home/home.component';
import { DoctorHomeComponent } from './home/doctor-home/doctor-home.component';
import { PatientHomeComponent } from './home/patient-home/patient-home.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AgentHomeComponent } from './home/agent-home/agent-home.component';
import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { DoctorEditComponent } from './doctor/doctor-edit/doctor-edit.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientEditComponent } from './patient/patient-edit/patient-edit.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { MedicalTestHistoryComponent } from './medical-test-history/medical-test-history.component';
import { ViewMedicareTestHistoryComponent } from './view-medicare-test-history/view-medicare-test-history.component';
import { AgentListComponent } from './agent/agent-list/agent-list.component';
import { AgentEditComponent } from './agent/agent-edit/agent-edit.component';
import { CreateAgentComponent } from './admin/create-agent/create-agent.component';
import { CreateDoctorComponent } from './admin/create-doctor/create-doctor.component';
import { NotificationComponent } from './notification/notification.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:PatientSignupComponent},
  {path:'adminSignup', component:AdminSignupComponent},
  {path:'doctorSignup', component:DoctorSignupComponent},
  {path:'patientSignup', component:PatientSignupComponent},
  {path:'agentSignup', component:AgentSignupComponent},
  {path:'signupOption', component:SignupOptionComponent},
  {path:'doctorEdit/:id',component:DoctorEditComponent},
  {path:'patientEdit/:id',component:PatientEditComponent},
  {path:'agentEdit/:id',component:AgentEditComponent},
  {path:'doctorHome', component:DoctorHomeComponent},
  {path:'patientHome', component:PatientHomeComponent},
  {path:'adminHome', component:AdminHomeComponent},
  {path:'doctorList', component:DoctorListComponent},
  {path:'agentList', component:AgentListComponent},
  {path:'agentHome', component:AgentHomeComponent},
  {path:'patientList', component:PatientListComponent},
  {path:'appointment/:id', component:AppointmentComponent},
  {path:'viewAppointment',component:ViewAppointmentComponent},
  {path:'viewMedicalTest',component:ViewMedicareTestHistoryComponent},
  {path:'agentList', component:AgentListComponent},
  {path:'createAgent', component:CreateAgentComponent},
  {path:'createDoctor', component:CreateDoctorComponent},
  {path:'notification',component:NotificationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
