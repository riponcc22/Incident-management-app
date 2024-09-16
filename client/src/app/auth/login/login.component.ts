
// import { Component,OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// //import { AuthService } from '../../auth.service'; // Make sure this path is correct
// // import { Router } from '@angular/router'; // Router import
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// //import { RouterModule } from '@angular/router';
// import { RegisterComponent } from '../register/register.component';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule,RegisterComponent],
//   templateUrl: './login.component.html',
// })


// export class LoginComponent implements OnInit {
//   [x: string]: any;
//   login!: FormGroup;  // Name this login to match your formGroup in the template
//   authService: any;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     // Initialize the form group with form controls and validators
//     this.login = this.fb.group({
//       username: ['', Validators.required],  // 'username' form control
//       password: ['', Validators.required]   // 'password' form control
//     });
//   }

//   // onSubmit() {
//   //   if (this.login.valid) {
//   //     // Handle form submission
//   //     console.log('Form submitted successfully', this.login.value);
//   //   }
//   //   }

//   onSubmit() {
//     if (this.login.valid) {
//       this.authService.login(this.login.value).subscribe({
//         next: (response: any) => {
//           console.log('Login successful:', response);
//           this['router'].navigate(['/incident']); // Redirect to incident list
//         },
//         error: (err: any) => {
//           console.error('Login failed:', err);
//         },
//       });
//     }
//   }
//   }

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router'; // Import Router
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RegisterComponent } from '../register/register.component';
// //import { AuthService } from '../../auth.service';
// import { HttpClientModule } from '@angular/common/http';
// import { User } from '../../Model/user.model';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//  imports: [CommonModule, ReactiveFormsModule, RegisterComponent,HttpClientModule],
//   templateUrl: './login.component.html',
// })
// export class LoginComponent implements OnInit {
//   login!: FormGroup; // FormGroup for login

//   constructor(
//     private fb: FormBuilder,
//    // private authService: AuthService, // Inject AuthService
//     private router: Router // Inject Router for navigation
//   ) {}

//   ngOnInit(): void {
//     // Initialize the form group with form controls and validators
//     this.login = this.fb.group({
//       username: ['', Validators.required], // 'username' form control
//       password: ['', Validators.required], // 'password' form control
//     });
//   }

//   onSubmit() {
//     if (this.login.valid) {
//       // Call the authService to handle login
//       console.log("Login submition successful",this.login.value)
//       // this.authService.login(this.login.value).subscribe({
//       //   next: (response: any) => {
//       //     console.log('Login successful:', response);
//       //     this.router.navigate(['/incident']); // Redirect to incident list
//       //   },
//       //   error: (err: any) => {
//       //     console.error('Login failed:', err);
//       //   },
//       // });
//     }
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExpressService } from '../../express.service'; // Assuming ExpressService is handling login
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,RegisterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// export class LoginComponent {
//   loginForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//     private expressService: ExpressService,
//     private router: Router
//   ) {
//     // Initialize the login form with form controls
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   // Handle the form submission
//   onSubmit(): void {
//     if (this.loginForm.valid) {
//       const credentials = this.loginForm.value;
      
//       // Call the login method from ExpressService
//       this.expressService.loginUser(credentials).then(
//         (response) => {
//           alert('Login successful!');
//           this.router.navigate(['/incident']); // Navigate to a dashboard or homepage after successful login
//         }
//       ).catch((error) => {
//         console.error('Login error:', error);
//         alert('Login failed. Please try again.');
//       });
//     } else {
//       alert('Please fill in all required fields.');
//     }
//   }
// }
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
          localStorage.setItem('displayName', response.displayName);
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
