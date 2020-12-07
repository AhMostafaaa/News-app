import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  users = [];
  errorMessage:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  addUser(userData){
   if (userData.form.invalid){
     this.errorMessage = true
   }else {
     this.errorMessage = false
    var user = {
      name:userData.value.userName,
      phone:userData.value.userPhone,
      email:userData.value.userEmail,
      message:userData.value.userMessage
    }
    this.users.push(user);
   }

  }
}
