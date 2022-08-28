import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Step } from '../Models/Step';


@Injectable({
  providedIn: 'root'
})
export class StepService {
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
  url:string="http://localhost:32377/api/Step_Registration";

  constructor(private http:HttpClient) { }
  getUsers():Observable<any>
  {
    return this.http.get<any>(this.url);
  }

  getUserById(id:number):Observable<any>
  {
    return this.http.get<any>(`${this.url}/${id}`)  
  }

  UpdateUser( user: any): Observable<Step> {
    return this.http.put<Step>(this.url+"/"+ user.userid,user,this.httpOptions).pipe(catchError(this.handleError));
  }

  AddUser(newuser:Step):Observable<any>
  {
    return this.http.post<any>(this.url,newuser);
  }
  
  CheckLogin(user:Step):Observable<any> {
    return this.http.post<any>((this.url+"/login"),user,{observe:'response'});
  }

  handleError(error:HttpErrorResponse){
    let errorMessage="";
    errorMessage=error.status +'\n'+error.statusText+'\n'+error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
