import { Injectable, Output, EventEmitter } from '@angular/core';
import { email } from './email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  emails: email[] = [
    {user: "Billy Bob", date: "Tuesday", userEmail: "billybob@bob.com", recieverEmail: "you@you.com", content: "Hey! I got your email, sounds good." },
    {user: "George Washington", date: "Friday", userEmail: "georgewashington@usa.com", recieverEmail: "you@you.com", content: "The revolution is going well!" },
    {user: "Neanderthal Times", date: "Pre-History", userEmail: "oogabooga@oog.com", recieverEmail: "you@you.com", content: "Rock coin to the moon!" },
    {user: "Eric Ericson", date: "Today", userEmail: "eric@mynameiseric.com", recieverEmail: "you@you.com", content: "Nice to meet you! My name is eric!" },
  ];

  selectedEmail: email = 
  {user: "Billy Bob", 
  date: "Tuesday", 
  userEmail: "billybob@bob.com", 
  recieverEmail: "you@you.com", 
  content: "Hey! I got your email, sounds good." };
  @Output() clickedemail = new EventEmitter<email>();
  @Output() emailListModified = new EventEmitter<null>();

  constructor() { }

  emailIsClicked(email: email){
    this.clickedemail.emit(email);
  }

  getEmails(){
    return this.emails.slice();
  }
  deleteEmail(email: email){
    this.emails.forEach(
      (obj, index) =>{
        if(obj.content === email.content){
          this.emails.splice(index, 1);
        }
    })
    this.emailListModified.emit();
  }


}
