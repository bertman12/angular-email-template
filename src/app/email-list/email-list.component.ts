import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { email } from '../email.model';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {
  
  localEmailData: email[] =[];
  currentCategory:string = 'Inbox'
  constructor(private emailService: EmailService) {
   }

  ngOnInit(): void {
    this.localEmailData = this.emailService.getMailByCategory('Inbox');
    this.emailService.emailListModified.subscribe(
      (newEmailsList)=>{
        this.localEmailData = newEmailsList
        this.currentCategory = this.emailService.currentCategory;
      }
      )
    }

}
