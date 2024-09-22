
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpressService } from '../../express.service'; // Assuming ExpressService is handling login
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,RegisterComponent,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private expressService: ExpressService,
    private router: Router
  ) {
    // Initialize the login form with form controls
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Handle the form submission
  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      
      // Call the login method from ExpressService
      this.expressService.loginUser(credentials).then(
        (response) => {
          // Store display name in localStorage for later use
          localStorage.setItem('displayName', response.user.displayName);
          localStorage.setItem('token', response.token); // Assuming you're using a token

          alert('Login successful!');
          this.router.navigate(['/incident']); // Navigate to incident page after successful login
        }
      ).catch((error) => {
        console.error('Login error:', error);
        alert('Login failed. Please try again.');
      });
    } else {
      alert('Please fill in all required fields.');
    }
  }
}
