/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseregistration',
  templateUrl: './courseregistration.component.html',
  styleUrls: ['./courseregistration.component.css']
})
export class CourseregistrationComponent implements OnInit {

  router: any;
    ngOnInit() {

    }

    array = { password: "" };

    keyPress(event: any) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }

    registration: Registration = new Registration();
    response: string;
    constructor(private ngs: RegistrationService) {

    }
    add() {

        this.ngs.sendToServer(this.registration).subscribe(
            data => {

                this.response = data['status'];
                this.reloadPage();
            }
        );
    }

    reloadPage() {
        window.location.href = './step/success';
    }

}


*/
