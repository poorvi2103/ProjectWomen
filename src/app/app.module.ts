import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NgoComponent } from './Components/ngo/ngo.component';
import { StepLoginComponent } from './Step/step-login/step-login.component';
import { StepRegistartionComponent } from './Step/step-registartion/step-registartion.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainNavbarComponent } from './Components/main-navbar/main-navbar.component';
import { StepdashboardComponent } from './Step/stepdashboard/stepdashboard.component';
import { GuidelinesComponent } from './Step/guidelines/guidelines.component';
import { TrainingComponent } from './Step/training/training.component';
//import { CourseregistrationComponent } from './Step/courseregistration/courseregistration.component';
import { StatusComponent } from './Step/status/status.component';
import { FAQComponent } from './Step/faq/faq.component';

import { StepngoComponent } from './Step/stepngo/stepngo.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminNgoComponent } from './Admin/admin-ngo/admin-ngo.component';

import { NgodashboardComponent } from './NGO/ngodashboard/ngodashboard.component';
import { NgocriteriaComponent } from './NGO/ngocriteria/ngocriteria.component';
import { NgoorganisationComponent } from './NGO/ngoorganisation/ngoorganisation.component';
import { NgoFundingNormsComponent } from './NGO/ngo-funding-norms/ngo-funding-norms.component';
import { NgoregisterComponent } from './NGO/ngoregister/ngoregister.component';
import { NgostatusComponent } from './NGO/ngostatus/ngostatus.component';
import { NgofaqComponent } from './NGO/ngofaq/ngofaq.component';
import { AdminTraineeComponent } from './Admin/admin-trainee/admin-trainee.component';
import { NgoLoginComponent } from './NGO/ngo-login/ngo-login.component';
import { NgoAfloginComponent } from './Ngo_new/ngo-aflogin/ngo-aflogin.component';
import { AddCourseComponent } from './Ngo_new/add-course/add-course.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgoComponent,
    StepLoginComponent,
    StepRegistartionComponent,
    StepdashboardComponent,
    MainNavbarComponent,
    GuidelinesComponent,
    TrainingComponent,
    //CourseregistrationComponent,
    StatusComponent,
    FAQComponent,
    
    StepngoComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminNgoComponent,
    AdminTraineeComponent,
    NgodashboardComponent,
    NgocriteriaComponent,
    NgoorganisationComponent,
    NgoFundingNormsComponent,
    NgoregisterComponent,
    NgostatusComponent,
    NgofaqComponent,
    NgoLoginComponent,
    NgoAfloginComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
