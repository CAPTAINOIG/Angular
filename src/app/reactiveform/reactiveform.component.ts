import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  firstname = ''
  constructor(public formbuilder : FormBuilder){}
  public formone = this.formbuilder.group({
    firstname:['', [Validators.required,Validators.minLength(4)]],
    email:['', Validators.email],
    password: ['', [Validators.required]]
  })
  ngOnInit(){
    console.log(this.formone.value);
  }
  
  submit(){
    // alert("working")
    this.formone.controls['firstname'].setValue('')
    this.formone.controls['email'].setValue('')
    this.formone.controls['password'].setValue('0')
  }
}
