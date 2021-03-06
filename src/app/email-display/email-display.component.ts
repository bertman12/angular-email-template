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
  uploadedFileName:string = '';

  ngOnInit(): void {
    this.emailService.clickedemail.subscribe(
      (email) => {this.selectedEmail = email}
    )
  }

  onFileUpload(event:any){
    console.log(event.target.files[0]);
    this.uploadedFileName = event.target.files[0].name;
  }

  //it skips never fulfills the first if condition, console.log() to figure out tomorrow
  onMoveToTrash(){
    if(this.selectedEmail.categories.includes('Trash')){
      const response = confirm('This will permanently delete the selected email.');
      if(response){
      this.emailService.deleteEmail(this.selectedEmail);
      }
    }
    else{
      const response = confirm('Are you sure you want to move to trash?');
      if(response){
        this.emailService.moveToTrash(this.selectedEmail);
      }
    }
  }

}
