import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { email } from './email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  emailsByCategory: email[] = [
    {user: "Billy Bob", date: "Tuesday", userEmail: "billybob@gmail.com", recieverEmail: "you@gmail.com", content: "Hey! I got your email, sounds good.", categories: ['Inbox', 'Tagged'] },
    {user: "George Washington", date: "Friday", userEmail: "georgewashington@gmail.com", recieverEmail: "you@gmail.com", content: "The revolution is going well!", categories: ['Inbox'] },
    {user: "Neanderthal Times", date: "Pre-History", userEmail: "oogabooga@gmail.com", recieverEmail: "you@gmail.com", content: "Rock coin to the moon!", categories: ['Inbox', 'Important'] },
    {user: "Eric Ericson", date: "Today", userEmail: "eric@gmail.com", recieverEmail: "you@gmail.com", content: "Nice to meet you! My name is eric!", categories: ['Trash'] },
    {user: "Jack Nicholson", date: "Wednesday", userEmail: "mrJack@gmail.com", recieverEmail: "you@gmail.com", content: "Nice to meet you! My name is eric!", categories: ['Inbox','Tagged','Important'] },
    {user: "Eddy", date: "Today", userEmail: "you@gmail.com", recieverEmail: "frank@gmail.com", content: "Nice to meet you! My name is Eddy!", categories: ['Sent'] },
  ];

  selectedEmail: email = this.emailsByCategory[0];

  @Output() clickedemail = new Subject<email>();
  @Output() emailListModified = new Subject<email[]>();

  mailOptions: string[] = ['Compose', 'Inbox', 'Tagged', 'Important', 'Sent', 'Drafts', 'Trash']
  currentCategory:string = 'Inbox';
  
  constructor() { }

  //returns a new array of emails that contain the selected category
  getMailByCategory(categorySelected:string):email[]{
    let newEmailList:email[] = [];
    this.currentCategory = categorySelected;

    this.emailsByCategory.forEach((email:email) => {
      email.categories.forEach((category:string)=> {
        if(category === categorySelected){
          if(!newEmailList.includes(email)){ //check to see if we already have the email
            newEmailList.push(email);
          }
        }
      });
    });

    console.log('all emails that have the category...', categorySelected, 'newEmailListAY --->', newEmailList);
    this.emailListModified.next(newEmailList);
    return newEmailList; //used for first instance the component is created
                         //the function is called on construction of some components to initialize their newEmailListay
  }

  emailIsClicked(email: email){
    this.clickedemail.next(email);
  }

  composeEmail(){
    this.clickedemail.next({user: "", date: "", userEmail: "", recieverEmail: "", content: "", categories: [''] }); 
  }

  moveToTrash(trashedEmail:email){
    trashedEmail.categories = ['Trash'];
    this.clickedemail.next(this.getMailByCategory(this.currentCategory)[0] || {}); //grab the first email in the currently chosen category or if empty, return an empty object
    this.emailListModified.next(this.getMailByCategory(this.currentCategory) || {}); //inform subscribers of new list
  }

  deleteEmail(deletedEmail: email){
    this.emailsByCategory.forEach(
      (email, index) =>{
        if(email.content === deletedEmail.content){
          this.emailsByCategory.splice(index, 1);
        }
    });

    this.clickedemail.next(this.getMailByCategory(this.currentCategory)[0] || {}); //grab the first email in the currently chosen category or if empty, return an empty object
    this.emailListModified.next(this.getMailByCategory(this.currentCategory) || {}); //inform subscribers of new list
  }


}
