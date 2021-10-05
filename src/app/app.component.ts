import { Component, VERSION } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public service: MyServiceService) {}

  name = 'Angular ' + VERSION.major;
}
