import { Component } from '@angular/core';
import { EventchildComponent } from '../eventchild/eventchild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [EventchildComponent, FormsModule],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {
public text = ''
public box = 'Blue'
public newtext=''
public data = ''
send(){
  this.newtext=this.text
  console.log(this.newtext);
  // for the parent to receive what is comig from the child we subscribe by receivig it
}
receiveresponse (data:any){
  console.log(data);
  this.data = data;
}
}
