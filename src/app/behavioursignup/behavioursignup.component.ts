import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface behaviorinterface{
  firstname: string,
  lastname: string,
  age: string,
  email: string,
  password: string,
  address: string
}

@Component({
  selector: 'app-behavioursignup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behavioursignup.component.html',
  styleUrl: './behavioursignup.component.css'
})
export class BehavioursignupComponent {
  constructor(public routes: Router){}
  public firstname =''
  public lastname =''
  public age =''
  public email =''
  public password =''
  public address =''

  public studentArray: behaviorinterface[]=[]
  ngOnInit(){
    // this.studentArray= JSON.parse(localStorage.getItem('students')!)
    const storedUsers = localStorage.getItem('store')
    if(storedUsers){
      this.studentArray = JSON.parse(storedUsers)
    }
    // console.log(this.activated.snapshot.params["myindex"]);
    // const storedUsers = localStorage.getItem('contents');
    // if (storedUsers) {
    //   this.users = JSON.parse(storedUsers);
    // }
  }
  signup(){
    let studentobj: behaviorinterface = {
      firstname: this.firstname,
      lastname: this.lastname,
      age : this.age,
      email : this.email,
      password :  this.password,
      address : this.address
    }
    console.log(studentobj);
    this.studentArray.push(studentobj)
    localStorage.setItem('store', JSON.stringify(this.studentArray))
    // console.log(this.studentArray);
    

    if(this.studentArray.push(studentobj)){
      this.routes.navigate(['/behaviour'])
    }
  }
}
