import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private  http: HttpClient) { }

  getData() {
    return this.http.get(`http://www.json-generator.com/api/json/get/cfHrFvTqWa?indent=2`)
  }

  
}
