import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

interface Profile {
  firstName: string,
  lastName: string,
  age: number
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  public firstName = 'samuel'
  public lastName = 'sunday'
  public age = 10
  public firststyling = 'form-control container w-50'
  public special = false

  obj1: Profile = {
    firstName: 'sunday1',
    lastName: 'Emaal',
    age: 10
  }

  array1: number[] = [1, 2, 3, 4, 5, 6]
  // array2:(string|number)[]= [1,2,,3,4,5,6]

  arrayObeject: Profile[] = [
    {
      firstName: 'sunday2',
      lastName: 'Emaal',
      age: 10
    },
    // {
    //   firstName: 'sunday',
    //   lastName: 'Emaal',
    //   age: 10
    // }

  ]

  ngOnInit() {
    for (let i of this.arrayObeject) {
      console.log(i.firstName);
    }
  }
  check(){
    this.special = !this.special
    console.log(this.special);
    
  }

  checkIndex(index: number){
    console.log(index);
    
  }
}
