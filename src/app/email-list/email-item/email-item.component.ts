import { Component, Input, OnInit } from '@angular/core';
import { email } from 'src/app/email.model';
import { EmailService } from 'src/app/email.service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  @Input() email: email = {user: "Billy Bob", date: "Tuesday", userEmail: "billybob@bob.com", recieverEmail: "you@you.com", content: "Hey! I got your email, sounds good.", categories:['Inbox'] };

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  onClickedEmail(){
    this.emailService.emailIsClicked(this.email)
  }

}

