import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminNgoComponent } from './Admin/admin-ngo/admin-ngo.component';


import { HomeComponent } from './Components/home/home.component';
import { NgoComponent } from './Components/ngo/ngo.component';
import { StepLoginComponent } from './Step/step-login/step-login.component';
import { StepRegistartionComponent } from './Step/step-registartion/step-registartion.component';
import { StepdashboardComponent } from './Step/stepdashboard/stepdashboard.component';
import { FAQComponent } from './Step/faq/faq.component';
import { GuidelinesComponent } from './Step/guidelines/guidelines.component';
import { StepngoComponent } from './Step/stepngo/stepngo.component';
import { TrainingComponent } from './Step/training/training.component';
import { NgoRegistrationComponent } from './NGO/ngo-registration/ngo-registration.component';

import { AboutusComponent } from './Home/aboutushome/aboutus.component';
import { AdminTraineeComponent } from './Admin/admin-trainee/admin-trainee.component';
import { NgodashboardComponent } from './NGO/ngodashboard/ngodashboard.component';
import { NgoFundingNormsComponent } from './NGO/ngo-funding-norms/ngo-funding-norms.component';
import { NgoregisterComponent } from './NGO/ngoregister/ngoregister.component';
import { NgoLoginComponent } from './NGO/ngo-login/ngo-login.component';
import { NgoAfloginComponent } from './Ngo_new/ngo-aflogin/ngo-aflogin.component';
import { AddCourseComponent } from './Ngo_new/add-course/add-course.component';
import { NgocriteriaComponent } from './NGO/ngocriteria/ngocriteria.component';


const routes: Routes = [
  
  {path:"adminlogin",component:AdminLoginComponent},
  {path:"admindash",component:AdminDashboardComponent},
  {path:"adminngo",component:AdminNgoComponent},
  {path:"admintrainee",component:AdminTraineeComponent},
  {path:"ngoregistration",component:NgoRegistrationComponent},
  {path:"ngoregister",component:NgoregisterComponent},
  {path:"ngodashboard",component:NgodashboardComponent},
  {path:"ngologin",component:NgoLoginComponent},
  {path:"home",component:HomeComponent},
  {path:"steplogin",component:StepLoginComponent},
  {path:"stepregistration",component:StepRegistartionComponent},
  {path:"stepdashboard",component:StepdashboardComponent},
  {path:"stepguidelines",component:GuidelinesComponent},
  {path:"steptraining",component:TrainingComponent},
  {path:"stepngo",component:StepngoComponent},
  {path:"stepfaq",component:FAQComponent},
  {path:"homeaboutus",component:AboutusComponent},
  {path:"ngofundingnorms",component:NgoFundingNormsComponent},
  {path:"ngoaflogin",component:NgoAfloginComponent},
  {path:"ngoaddcourses",component:AddCourseComponent},
  {path:"ngocriteria",component:NgocriteriaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
