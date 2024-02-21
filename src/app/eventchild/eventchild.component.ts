import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './eventchild.component.html',
  styleUrl: './eventchild.component.css'
})
export class EventchildComponent {
// @input is what we use to receive what we are passing from the parent component
// @Output is to send it out
@Input() public receivetext:any=''
public sendresponse = ''
@Output() public eventemit = new EventEmitter


// emit is to send
send(){
  this.eventemit.emit(this.sendresponse)
  this.sendresponse=''
}
}
