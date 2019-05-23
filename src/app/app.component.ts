import { Component, OnInit } from '@angular/core';
import { SampleService } from './sample.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';

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
