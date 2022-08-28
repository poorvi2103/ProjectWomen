import { Component, OnInit } from '@angular/core';
import { NGO } from 'src/app/Models/NGO';
import { NgoService } from 'src/app/Services/ngo.service';

@Component({
  selector: 'app-ngoregister',
  templateUrl: './ngoregister.component.html',
  styleUrls: ['./ngoregister.component.css']
})
export class NgoregisterComponent implements OnInit {

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

    registration!: NGO;
    response!: string;
    constructor(private ngs: NgoService) {

    }


    add() {

        let confirm = true;

        if (confirm) {

            this.ngs.AddUser(this.registration).subscribe(
                data => {
                    //Take the response from server and storing in string variable
                    this.response = data['status'];
                    this.reloadPage();
                }
            );
        }
    }

    reloadPage() {
        window.location.href = './ngo/login';
    }

}
