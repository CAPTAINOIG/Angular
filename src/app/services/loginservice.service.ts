import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public currentuser:any=''
  constructor() { }

  getuser(data:any){
    this.currentuser=data
  }
  getcurrentuser(){
   return this.currentuser
  }
}
