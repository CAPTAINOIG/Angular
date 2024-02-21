import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { MyappComponent } from './myapp/myapp.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ServicecomponentComponent } from './servicecomponent/servicecomponent.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MysignupComponent } from './mysignup/mysignup.component';
import { PipeComponent } from './pipe/pipe.component';

import { MysigninComponent } from './mysignin/mysignin.component';
import { studentguardGuard } from './guards/studentguard.guard';
import { ValidatingformComponent } from './validatingform/validatingform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { BehavioursignupComponent } from './behavioursignup/behavioursignup.component';
import { EventparentComponent } from './eventparent/eventparent.component';
import { EventchildComponent } from './eventchild/eventchild.component';

export const routes: Routes = [
    {path:'', component: LandingpageComponent},
    {path: 'home', redirectTo: '', pathMatch:'full'},
    {path: 'behaviour', component: BehavioursubjectComponent },
    {path: 'parent', component: EventparentComponent },
    {path: 'child', component: EventchildComponent },
    {path:'service', component: ServicecomponentComponent},
    {path: 'signin', component: MysigninComponent},
    {path: 'mysignup', component: MysignupComponent},
    {path: 'validating', component: ValidatingformComponent},
    {path: 'reactive', component: ReactiveformComponent},
    {path: 'pipe', component: PipeComponent},

    {path: 'sample', children:[
        {path: '', component: MyappComponent},
        {path: 'deposit', component: LandingpageComponent}
    ]},
    {path: 'behavioursignup', component: BehavioursignupComponent },
    {path:'display/:index', component: MyappComponent},
    {path:'mydisplay/:myindex', component: LandingpageComponent},
    {path: 'dashboard', children:[
        {path: '', component: MydashboardComponent},
    ],canActivate:[studentguardGuard]},
    {path: '**', component: ErrorpageComponent},
];
