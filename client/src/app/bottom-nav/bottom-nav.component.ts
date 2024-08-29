import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
  <nav class="navbar fixed-bottom navbar-dark bg-dark">
  <h6 class="display-8 navbar-text">&copy; Copyright 2023. All Rights reserved.</h6>
</nav>
  `,
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent {

}
