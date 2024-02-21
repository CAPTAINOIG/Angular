import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Studentinterface{
  firstname: string,
  lastname: string,
  age: string,
  email: string,
  password: string,
  address: string
}
@Component({
  selector: 'app-mysignup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mysignup.component.html',
  styleUrl: './mysignup.component.css'
})
export class MysignupComponent {
  constructor(public routes: Router){}
  public firstname =''
  public lastname =''
  public age =''
  public email =''
  public password =''
  public address =''
  public message  =''
  public studentArray: Studentinterface[]=[]
  ngOnInit(){
    // this.studentArray= JSON.parse(localStorage.getItem('students')!)
    const storedUsers = localStorage.getItem('students')
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
    let studentobj: Studentinterface = {
      firstname: this.firstname,
      lastname: this.lastname,
      age : this.age,
      email : this.email,
      password :  this.password,
      address : this.address
    }
    console.log(studentobj);
    this.studentArray.push(studentobj)
    localStorage.setItem('students', JSON.stringify(this.studentArray))
    console.log(this.studentArray);
    

    if(this.studentArray.push(studentobj)){
      this.routes.navigate(['signin'])
    }
  }
}
