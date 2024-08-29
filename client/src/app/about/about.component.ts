import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="jumbotron">
  <h1 class="display-4">Welcome to the {{ title }} page</h1>
</div>
<h2><span lang="en-ca">Group Members</span></h2>
        <p><b>Gian Paulo Desiderio (301296686), currently enrolled in my third semester of the Software Engineering Technician Program at Centennial College.</b></p>

        <p><b>Ugyen Thinley (301133658), currently enrolled in my third semester of the Software Engineering Technician Program at Centennial College</b> </p>

        <p><b>Md Ripon Hossain (301215985), currently enrolled in my third semester of the Software Engineering Technolgy Program at Centennial College and doing coop at OPG</b></p>

        <p><b>wsiu11 (301272297), currently enrolled in my third semester of the Software Engineering Technician Program at Centennial College. </b></p>

        <p><b>Jaspreet kaur (301361099), currently enrolled in my first semester of the Software Engineering Artificial Intelligence Program at Centennial College.</b></p>

        <p><b>Huy Lai (301225382), currently enrolled in my third semester of the Software Engineering Technician Program at Centennial College.</b></p>

        <a href="assets/pdf/contract.pdf" class="btn btn-primary">Download Group 3 Contract Here!(PDF)</a>
        <aside>
            <figure style="text-align: center;">
                <img src="assets/images/incidentmgt.jpg" width="600" height="400" alt="gianphoto" style="display: block; margin: 0 auto;">
                <br>Render link: <a href="https://comp229-group3-project.onrender.com">https://comp229-group3-project.onrender.com</a>
                <br>Github link: <a href="https://github.com/COMP229TEAM3/COMP229-GROUP3.git">https://github.com/COMP229TEAM3/COMP229-GROUP3.git</a>
            </figure>

        </aside>
        
        <footer style="text-align: center;">
            Copyright &copy; 2023
        </footer>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {
  title = 'about';
}
