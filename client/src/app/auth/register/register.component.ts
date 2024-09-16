

import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../Model/user.model';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpressService } from '../../express.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: '',
    email: '',
    displayName: ''
  };

  constructor(private expressService: ExpressService, private router: Router) {}

  onSubmit(): void {
    this.expressService.registerUser(this.user).then(
      (response) => {
        alert('Registration successful!');
        this.router.navigate(['/login']); // Redirect to login page after successful registration
      }
    ).catch((error) => {
      console.error('Registration error:', error);
      alert('Failed to register. Please try again.');
    });
  }
}


