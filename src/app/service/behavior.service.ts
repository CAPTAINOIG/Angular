import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  constructor() { }
  public behavior = new BehaviorSubject<any>({
    firstname: "Teslim",
    lastname: "Teslim",
    age: "20",
    email: "teslim@gmail.com",
    address: 'ile',
    password:'tr'
  })
}
