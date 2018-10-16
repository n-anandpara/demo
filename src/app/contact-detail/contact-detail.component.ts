import { Component, OnInit } from '@angular/core';
import { hours, socialLinks } from '../data/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  hours: any;
  contacts: any;
  socialLinks: any;
  cData: any;


  constructor( private  http: HttpClient ) { }

  ngOnInit() {
    this.fetchContacts();
    this.fetchHours();
    this.fetchSocial();


    // this.data.getData().subscribe(
    //   data => this.cData = data
    // )
  }

  fetchContacts(){
    this.http.get(`http://www.json-generator.com/api/json/get/cfHrFvTqWa?indent=2`).map(res => res).subscribe( data => { this.cData = data } );
  }

  fetchHours() {
    this.hours = hours;
  }
  
  fetchSocial(){
    this.socialLinks = socialLinks;
  }


}
