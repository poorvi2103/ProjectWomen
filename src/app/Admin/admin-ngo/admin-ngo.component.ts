import { Component, OnInit } from '@angular/core';
import { NGO } from 'src/app/Models/NGO';
import { NgoService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-admin-ngo',
  templateUrl: './admin-ngo.component.html',
  styleUrls: ['./admin-ngo.component.css']
})
export class AdminNgoComponent implements OnInit {

  ngo!: NGO[];
    
  constructor(public _service: NgoService) {

  }

  ngOnInit() {
      this.display();
  }

  display() {
     
    this._service.getNgo().subscribe(data => {
      this.ngo = data;
      console.log(this.ngo);
    });
  }

}
