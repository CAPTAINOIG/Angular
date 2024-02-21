import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface UserProfile {
  first_name: string,
  last_name: string,
  Email: string,
  phone_number: string,
  Gender: string
}

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  public first_name = ''
  public last_name = ''
  public Email = ''
  public phone_number = ''
  public Gender = ''


  public users: UserProfile[] = [];

  constructor(public activated: ActivatedRoute, public routes: Router){}

  

  ngOnInit(){
    console.log(this.activated.snapshot.params["myindex"]);
    const storedUsers = localStorage.getItem('contents');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  addContent() {
    if (this.first_name == "" || this.last_name == "" || this.Email == "" || this.phone_number == "" || this.Gender == ""){
      alert("Enter Something")
    }
    else{
      const user: UserProfile = {
        first_name: this.first_name,
        last_name: this.last_name,
        Email: this.Email,
        phone_number: this.phone_number,
        Gender: this.Gender
     };
      this.users.push(user);
      console.log(this.users);
      localStorage.setItem('contents', JSON.stringify(this.users));
  
      this.first_name = ""
      this.last_name = ""
      this.Email = ""
      this.phone_number = ""
      this.Gender = ""
    }
  }

  DelectBtn(i: number) {
    console.log(i);
    this.users = this.users.filter((user, index) => index !== i);
    localStorage.setItem('contents', JSON.stringify(this.users));
  }

  
  public showDetailsIndex: number = -1;
  navigateToUserDetails(index: number): void {
    console.log(index);
    this.showDetailsIndex = index === this.showDetailsIndex ? -1 : index;
    this.routes.navigate([`display/${index}`])
  }
  public editMode: boolean = false;
  public editIndex: number | null = null;
  EditBtn(index: number): void {
    // this.editMode = true;
    this.editIndex = index;

    const user = this.users[index];
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.Email = user.Email;
    this.phone_number = user.phone_number;
    this.Gender = user.Gender;
  }

  saveEdit(): void {
    if (this.editIndex !== null) {
      this.users[this.editIndex] = {
        first_name: this.first_name,
        last_name: this.last_name,
        Email: this.Email,
        phone_number: this.phone_number,
        Gender: this.Gender
      };

      localStorage.setItem('contents', JSON.stringify(this.users));
      this.resetForm();
    }
  }

  cancelEdit(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.editMode = false;
    this.editIndex = null;
    this.first_name = '';
    this.last_name = '';
    this.Email = '';
    this.phone_number = '';
    this.Gender = '';
  }
  
}
