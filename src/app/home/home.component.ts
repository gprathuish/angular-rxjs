import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  counter: number = 0;
  constructor(private messageService: SampleService) { }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(`Message ${this.counter++} from Home Component to App Component!`);
  }

  clearMessage(): void {
    // clear message
    this.messageService.clearMessage();
  }

}
