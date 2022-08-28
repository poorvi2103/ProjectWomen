import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/Models/Step';
import { StepService } from 'src/app/Services/step.service';



@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.css']
})
export class TraineesComponent implements OnInit {

    steplist!: Step[];


  constructor(private _service: StepService) {

  }

  ngOnInit() {
    this.display();
  }

  display() {

    this._service.getUsers().subscribe(data => {
      this.steplist = data;
      console.log(this.steplist);
    });
  }


}
