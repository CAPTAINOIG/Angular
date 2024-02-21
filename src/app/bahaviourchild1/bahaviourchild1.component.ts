import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorService } from '../service/behavior.service';

interface behaviorinterface{
  firstname: string,
  lastname: string,
  age: string,
  email: string,
  password: string,
  address: string
}

@Component({
  selector: 'app-bahaviourchild1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bahaviourchild1.component.html',
  styleUrl: './bahaviourchild1.component.css'
})
export class Bahaviourchild1Component {
  constructor(public bahaviour : BehaviorService){}
  public firstname = ''
  public lastname = ''
  public age = ''
  public email = ''
  public password = ''
  public address = ''

  public studentarray:behaviorinterface [] = []
  
  ngOnInit() {
    const studentsData = localStorage['store'];
    if(studentsData){
      this.studentarray = JSON.parse(studentsData)
      // console.log(this.studentarray);
    }
  }

  // it first go to the bahavior in our constructor then the behavior we declared in our service to get the details and we use (next) to update our code
  sendlist(list:any, i:any){
    console.log(i);
    localStorage.setItem('index', JSON.stringify(i))
    this.bahaviour.behavior.next(list)
    // console.log(this.bahaviour.behavior);
    
  }

 
}
