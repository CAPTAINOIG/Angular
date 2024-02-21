import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  constructor() { }
  public display = 'And Ayo'
  public myage = 15
  public numberarray: number[]=[1,2,3,4,5,6,7,8,9,10]
  public item = `my name is Teslim ${this.display} and my age is ${this.myage}`

  public returnitem(){
    return this.item
  }
  public returnnum(){
    return this.numberarray
  }
  public getstudents(){
   return JSON.parse(localStorage['newstudents'])
  }
}
