import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactInfo:Contact = new Contact();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmitContactInfo(){

  }

}
