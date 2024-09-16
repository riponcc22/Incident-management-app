import { Component} from '@angular/core';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule } from '@angular/router';
import { IncidentEditComponent } from './incident-edit/incident-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    //FontAwesomeModule,
    RouterModule,
    MainNavComponent,
    BottomNavComponent,
    IncidentAddComponent,
    LoginComponent,
    RegisterComponent,
    IncidentEditComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  template: `
  <main class="container">
    <app-main-nav></app-main-nav>
    <a [routerLink]="['/']">
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
    <app-bottom-nav><app-bottom-nav>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  
}
