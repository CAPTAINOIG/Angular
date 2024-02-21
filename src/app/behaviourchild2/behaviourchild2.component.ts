import { Component } from '@angular/core';
import { BehaviorService } from '../service/behavior.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviourchild2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behaviourchild2.component.html',
  styleUrl: './behaviourchild2.component.css'
})
export class Behaviourchild2Component {
  constructor(public bahavior: BehaviorService){}
  public  bahavior_obj:any={}
  public  userIndex:any={}
  public  storage:any={}


  ngOnInit(){
    let userIndex = JSON.parse(localStorage['index'])
    let storage = JSON.parse(localStorage['store'])
    this.userIndex = userIndex
    this.storage = storage
    // bring the contact storage u set here
    console.log(userIndex);
    
    // here, once we click on the child1 our service is updated with the changes and here we call on the service to fetch what is there to update our code. its just like redux. the service is a global state.
    this.bahavior.behavior.subscribe(data=>{
      //once fetched, we saved it in data and save it in this.bahavior_obj variable. we can do this anywhere we want to have access
      this.bahavior_obj = data
      // console.log(this.bahavior_obj);
    })
  }  
  Del(){
    this.storage.splice(this.userIndex, 1)
    console.log(this.storage);
    // localStorage.setItem('store', JSON.stringify(this.studentArray))

    
    }

  }
