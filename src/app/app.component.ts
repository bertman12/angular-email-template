import { Component } from '@angular/core';
import { EmailService } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private emailService: EmailService){}
  
  mailOptions:string[] = this.emailService.mailOptions;

  onOptionSelected(option: string){
    if(option == 'Compose'){
      this.emailService.composeEmail();
    }
    else{
      this.emailService.getMailByCategory(option);
    }
  }


}
