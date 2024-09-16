// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [CommonModule,RouterModule],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent {



// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// //import { User } from '../models/user.model'; // Assuming the User model is in the `models` folder
// import { User } from '../../Model/user.model';
// import { AuthService } from '../../auth.service'; // Assuming AuthService handles authentication
// import { FormsModule, NgModel } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { ExpressService } from '../../express.service';

// @Component({
//   selector: 'app-register',
//   standalone:true,
//   imports:[CommonModule,FormsModule],
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   user: User = {
//     username: '',
//     password: '',
//     email: '',
//     displayName: ''
//   };

//   constructor(private expressService: ExpressService, private router: Router) {}

//   onSubmit(): void {
//     this.expressService.register(this.user).subscribe(
//       (response) => {
//         alert('Registration successful!');
//         this.router.navigate(['/login']); // Redirect to login page after successful registration
//       },
//       (error) => {
//         console.error('Registration error:', error);
//         alert('Failed to register. Please try again.');
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../Model/user.model';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ExpressService } from '../../express.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
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


