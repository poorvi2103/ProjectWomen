import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { admin } from '../Models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url="http://localhost:32377/api/Admin/";
  constructor(private http:HttpClient) { }

  userlogin(body:admin):Observable<any>
  {
    return this.http.post<any>((this.url+"UserLogin"),body,{observe:'response'});
  }
  adminlogin(body:admin):Observable<any>
  {
    return this.http.post<any>((this.url+"Login"),body,{observe:'response'});
  }
}
