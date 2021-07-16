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
  constructor(private emailService: EmailService) {
    this.localEmailData = this.emailService.emails;
   }

  
  ngOnInit(): void {
    this.emailService.emailListModified.subscribe(
      ()=>{this.localEmailData = this.emailService.getEmails()}
    )
  }

}
