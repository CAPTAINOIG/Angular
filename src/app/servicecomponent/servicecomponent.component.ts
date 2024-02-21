import { Component } from '@angular/core';
import { LandingpageserviceService } from '../services/landingpageservice.service';

@Component({
  selector: 'app-servicecomponent',
  standalone: true,
  imports: [],
  templateUrl: './servicecomponent.component.html',
  styleUrl: './servicecomponent.component.css'
})
export class ServicecomponentComponent {
  constructor(public service: LandingpageserviceService){}
  public user = ''
  public sure = 'i study at SQI'
  ngOnInit(){
    this.user = this.service.returnitem()
    console.log(this.user);
    console.log(this.service.returnnum());
    
  }
}
