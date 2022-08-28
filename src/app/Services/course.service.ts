import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Course } from '../Models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url:string="http://localhost:32377/api/Courses";

  constructor(private http:HttpClient) { }
  getCourse():Observable<any>
  {
    return this.http.get<any>(this.url);
  }

  getCourseById(id:number):Observable<any>
  {
    return this.http.get<any>(`${this.url}/${id}`)  
  }

  UpdateCourse( user: any): Observable<Course> {
    return this.http.put<Course>(this.url+"/"+ user.userid,user,this.httpOptions).pipe(catchError(this.handleError));
  }

  AddCourse(newcourse:Course):Observable<any>
  {
    return this.http.post<any>(this.url,newcourse);
  }
  
  
  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
