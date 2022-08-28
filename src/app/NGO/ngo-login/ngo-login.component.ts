import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgoService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css']
})
export class NgoLoginComponent implements OnInit {

  constructor(private _service:NgoService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(myform:any)
  {
    let body = myform.value;

    //localStorage.setItem('userDetails', JSON.stringify({token: body, name: 'userDetails'}));

    this._service.login(body).subscribe(
      (res) =>
      {
        if(res.status == 200) 
        {
      
          console.log(res);
          this.router.navigateByUrl("ngoaflogin");
        }
      },(err)=>{
        alert("There was problem logging you out");
        console.log(err);
      //  this.router.navigateByUrl("userlist");
      }
    );
  }
}