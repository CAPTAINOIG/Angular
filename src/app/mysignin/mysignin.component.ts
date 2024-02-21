import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

interface Studentinterface {
  email: string,
  password: string,
  message: string
}
@Component({
  selector: 'app-mysignin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mysignin.component.html',
  styleUrl: './mysignin.component.css'
})
export class MysigninComponent {
  constructor(public routes: Router, public service : LoginserviceService) { }
  public email = ''
  public password = ''
  public message = ''
  public studentarray: Studentinterface[] = []
  ngOnInit() {
    const studentsData = localStorage['students'];
    if(studentsData){
      this.studentarray = JSON.parse(studentsData)
      console.log(this.studentarray);
    }
  }

  signin() {
    let currectuser = this.studentarray.find((student, index) => this.email == student.email && this.password == student.password)
    if (currectuser) {
      localStorage.setItem('current_user', JSON.stringify(currectuser))
      
      this.routes.navigate(['/dashboard'])
    }
    else {
      alert("user not found")
      this.message = 'user not found'
    }
  }
}
