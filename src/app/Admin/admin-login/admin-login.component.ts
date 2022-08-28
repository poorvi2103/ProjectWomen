import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _service:AdminService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(myform:any)
  {
    let body = myform.value;

    this._service.adminlogin(body).subscribe(
      (res) =>
      {
        if(res.status == 200) 
        {
          console.log(res);
          alert("login sucess")
          this.router.navigateByUrl("/admindash");
        }
      },(err)=>{
        alert("There was problem logging you out");
        console.log(err);
      //  this.router.navigateByUrl("userlist");
      }
    );
  }

}
