import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Step } from 'src/app/Models/Step';
import { StepService } from 'src/app/Services/step.service';

@Component({
  selector: 'app-step-login',
  templateUrl: './step-login.component.html',
  styleUrls: ['./step-login.component.css']
})
export class StepLoginComponent implements OnInit {

  body!: Step;
  constructor(private _service:StepService,private route:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onSubmit(myform:any){
    this.body=myform.value;
    
    this._service.CheckLogin(this.body).subscribe(
      (res) =>
      {
        if (res.status==200) {
          //this.route.navigateByUrl("userlist");
          //alert("Login success");
          //this.logInUser=this.body;
          console.log(res);
          //sessionStorage.setItem("username",this.body.email);
          
          this.route.navigateByUrl("stepdashboard");
        }
      }, (err) => {
        alert("There was a problem logging you out");
        console.log(err);
        //this.route.navigateByUrl("home");
      });
   
    
    }

}
