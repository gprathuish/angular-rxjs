import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  message: any;
  subscription: Subscription;

  constructor(private messageService: SampleService) {
      // subscribe to home component messages
  }

  ngOnInit(){
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }
}
