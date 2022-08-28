import { Component, OnInit } from '@angular/core';
import { NGO } from 'src/app/Models/NGO';
import { NgoService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-ngo-aflogin',
  templateUrl: './ngo-aflogin.component.html',
  styleUrls: ['./ngo-aflogin.component.css']
})
export class NgoAfloginComponent implements OnInit {

  constructor(private _service:NgoService) { }

  response!: string;
  userlogin!: NGO;

  ngOnInit() {
    //this.displayName();
  }

  /*displayName() {
    this.userlogin = JSON.parse(localStorage.getItem('userDetails'))['token'];
    this.response = this.userlogin.Ngo_Name;
  }

  logout(){
    localStorage.removeItem('userDetails');
    window.location.href='/ngo';
  }*/
}
