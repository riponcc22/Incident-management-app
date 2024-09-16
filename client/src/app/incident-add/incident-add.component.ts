
import { Component } from '@angular/core';
import { Incident } from '../incident';
import { ExpressService } from '../express.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incident-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './incident-add.component.html',
  styleUrls: ['./incident-add.component.css']
})
export class IncidentAddComponent {
  title: string = 'Add Incident';
  incident: Incident = {
    incident: '', description: '', date: '', _id: ''
  };

  constructor(private expressService: ExpressService, private router: Router) {}

  onSubmit(): void {
    console.log('Submitting incident:', this.incident); // Log the incident data
    this.expressService.addIncident(this.incident).then(() => {
      alert('Incident added successfully');
      this.router.navigate(['/incident']); // Redirect to the incident list page
    }).catch(error => {
      console.error('Error adding incident:', error);
      alert('Failed to add incident. Please try again.');
    });
  }
}
