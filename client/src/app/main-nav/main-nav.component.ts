import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
   <a class="navbar-brand" href="/">
   <img src="/assets/images/teamlogo.jpg" alt="team logo" height="50">COMP229</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item">
         <a class="nav-link" [routerLink]="['/']"><i class="fas fa-lg fa-laptop-house"></i> Home </a>
      </li>
      <li class="nav-item">
         <a class="nav-link" [routerLink]="['/about']"><i class="fas fa-info-circle"></i> About </a>
      </li>
      <li class="nav-item">
         <a class="nav-link" [routerLink]="['/incident']">
            <i class="fa-regular fa-address-card"></i>Incident Survey List
         </a>
      </li>
      <li class="nav-item">
      <a [routerLink]="['/login']" class="nav-link">
         <i class="fas fa-lg fa-sign-in-alt"></i> Login
         </a>
      </li>
`,
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent {
  login=false;
}
