import { Component } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private emailService: EmailService){}
  
  mailOptions:string[] = this.emailService.mailCategories;
  localOptionselected: string = 'Inbox'; //used for changing text of the dropdown menu button
  
  onComposeEmail(){
    this.emailService.composeEmail();
  }
  
  onOptionSelected(option: string){
    this.localOptionselected = option;
    this.emailService.getMailByCategory(option);
  }


}
