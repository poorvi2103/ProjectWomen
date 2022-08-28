import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NGO } from '../Models/NGO';

type NewType = Observable<any>;

@Injectable({
  providedIn: 'root'
})
export class NgoService {

  url:string="http://localhost:32377/api/Ngo_Registration";

  constructor(private http:HttpClient) { }

  getNgo():Observable<any>
  {
    return this.http.get<any>(this.url);
  }

  getNgoById(id:number):Observable<any>
  {
    return this.http.get<any>(this.url+"/"+id);  
  }

  AddUser(newuser:NGO):Observable<any>
  {
    return this.http.post<any>(this.url,newuser);
  }

  login(body:NGO):Observable<any>
  {
    return this.http.post<any>((this.url+"/Login"),body,{observe:'response'});
  }
}
