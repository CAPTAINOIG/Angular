import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-myapp',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './myapp.component.html',
  styleUrl: './myapp.component.css'
})
export class MyappComponent {
  constructor(public activated: ActivatedRoute, public routes: Router){}
  public user: any=[];
  // ngOnInit(){
  //   console.log(this.activated.snapshot.params["index"]);
  // }
  ngOnInit(): void {
    const index = this.activated.snapshot.params['index'];
    const userArray = JSON.parse(localStorage['contents'])
    this.user = userArray[index]
  }
  check(){
    this.routes.navigate(['home'])
  }


  
  // DelectBtn(i: number) {
  //   console.log(i);
  //   this.users = this.users.filter((user, index) => index !== i);
  //   localStorage.setItem('contents', JSON.stringify(this.users));
  // }

  


  
}
