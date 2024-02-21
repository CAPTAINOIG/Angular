import { Component } from '@angular/core';
import { Behaviourchild2Component } from '../behaviourchild2/behaviourchild2.component';
import { Bahaviourchild1Component } from '../bahaviourchild1/bahaviourchild1.component';

@Component({
  selector: 'app-behavioursubject',
  standalone: true,
  imports: [Behaviourchild2Component, Bahaviourchild1Component],
  templateUrl: './behavioursubject.component.html',
  styleUrl: './behavioursubject.component.css'
})
export class BehavioursubjectComponent {

}
