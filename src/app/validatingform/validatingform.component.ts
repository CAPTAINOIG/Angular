import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validatingform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './validatingform.component.html',
  styleUrl: './validatingform.component.css'
})
export class ValidatingformComponent {
  public firstname = ''
  public city = ''
  submit(){
    alert("okay")
  }
  
}
