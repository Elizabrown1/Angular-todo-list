import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public httpClient : HttpClient) { }
  
  getUsers(obj: any){
    return this.httpClient.post<any>("http://localhost/connection/backend/signup.php", obj)
  }
}
