import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="jumbotron">
  <h1 class="display-4">Welcome to the {{ title }} page</h1>
</div>
<!-- Add this CSS block within the <style> tag in your HTML or in an external CSS file -->
        <div class="home-welcome">
            <h1>INCIDENT SURVEY MANAGEMENT</h1>
        </div>
        <h2><span lang="en-ca">Mission Statement</span></h2>
        <p><b>Our mission is to collect comprehensive and accurate data about incidents, including the time and place they occur. </b></p>
        <h2><span lang="en-ca">GROUP 3 INCIDENT MANAGEMENT SURVEY</span></h2>
        <p><b>The Incident Management Survey is designed to gather crucial information about an incident, including its time and place. This survey aims to collect detailed data related to the occurrence of incidents to aid in their management and resolution.Additionally,
        participants will be requested to provide the precise location where the incident took place. This can include the address, coordinates, or a detailed description of the site. Knowing the exact location is essential for dispatching emergency personnel,
        tracking patterns of incidents, and analyzing their impact on specific areas.</b></p>
        <a class="btn btn-primary home-about-btn" href="/about" role="button">MORE INFO ON OUR PROJECT HERE!</a>
        <br><br>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'home';
}
