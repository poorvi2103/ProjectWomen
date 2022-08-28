import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/Models/Course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course: Course;
  constructor(private _service : CourseService,private router:Router) { }

  ngOnInit(): void {
  }
  add(mform:any)
  {
    let body = mform.value;
   
      this._service.AddCourse(body).subscribe(data=>console.log(body));
      this.router.navigateByUrl("ngoaflogin");
       
      }
   

}
