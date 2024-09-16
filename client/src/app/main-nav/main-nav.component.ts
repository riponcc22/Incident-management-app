// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// //import { ExpressService } from '../express.service';
// import { Router } from 'express';

// @Component({
//   selector: 'app-main-nav',
//   standalone: true,
//   imports: [CommonModule,RouterModule],
//   template: `
// <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//    <a class="navbar-brand" href="/">
//    <img src="/assets/images/teamlogo.jpg" alt="team logo" height="50">COMP229</a>
//    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//    <span class="navbar-toggler-icon"></span>
//    </button>
//    <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav ml-auto">
//       <li class="nav-item">
//          <a class="nav-link" [routerLink]="['/']"><i class="fas fa-lg fa-laptop-house"></i> Home </a>
//       </li>
//       <li class="nav-item">
//          <a class="nav-link" [routerLink]="['/about']"><i class="fas fa-info-circle"></i> About </a>
//       </li>
//       <li class="nav-item">
//          <a class="nav-link" [routerLink]="['/incident']">
//             <i class="fa-regular fa-address-card"></i>Incident Survey List
//          </a>
//       </li>
//       <li class="nav-item">
//       <a [routerLink]="['/login']" class="nav-link">
//          <i class="fas fa-lg fa-sign-in-alt"></i> Login
//          </a>
//       </li>

     
// `,
//   styleUrl: './main-nav.component.css'
// })
// export class MainNavComponent {
//   login=false;


 
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // Correct Router import from Angular

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <img src="/assets/images/teamlogo.jpg" alt="team logo" height="50">COMP229
      </a>
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
              <i class="fa-regular fa-address-card"></i> Incident Survey List
            </a>
          </li>
          <li *ngIf="!isLoggedIn()" class="nav-item">
            <a [routerLink]="['/login']" class="nav-link">
              <i class="fas fa-lg fa-sign-in-alt"></i> Login
            </a>
          </li>
          <li *ngIf="isLoggedIn()" class="nav-item">
            <span class="nav-link">Welcome, {{ displayName }}</span>
          </li>
          <li *ngIf="isLoggedIn()" class="nav-item">
            <button (click)="logout()" class="btn btn-danger nav-link">
              <i class="fas fa-lg fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  displayName: string | null = '';

  constructor(private router: Router) {
    // Retrieve the display name from localStorage
    this.displayName = localStorage.getItem('displayName');
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in based on token presence
    return !!localStorage.getItem('token');
  }

  // Logout method
  logout(): void {
    // Clear localStorage and navigate to the login page
    localStorage.removeItem('displayName');
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
