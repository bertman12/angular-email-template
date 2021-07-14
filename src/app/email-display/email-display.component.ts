import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-display',
  templateUrl: './email-display.component.html',
  styleUrls: ['./email-display.component.css']
})
export class EmailDisplayComponent implements OnInit {

  constructor(private emailService: EmailService) { }
  selectedEmail = this.emailService.selectedEmail;
  ngOnInit(): void {
    this.emailService.clickedemail.subscribe(
      (email) => {this.selectedEmail = email}
    )
  }

}
