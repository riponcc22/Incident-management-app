
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressService } from '../express.service';

import { Incident } from '../incident';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.css'
})

export class IncidentListComponent implements OnInit {
 
  title: 'Incident Survey List' = "Incident Survey List";


  incidentList: Incident[] = [];


  constructor(private expressService: ExpressService) { }


  ngOnInit(): void {
    this.loadIncidents();
  }


  loadIncidents(): void {
    this.expressService.getAllIncident().then((data) => {
      this.incidentList = data;
    }).catch((error) => {
      console.error('Error loading incidents:', error);
    });
  }
// Method to check if the user is logged in
isLoggedIn(): boolean {
  // Check if the user is logged in based on token presence
  return !!localStorage.getItem('token');
}

  deleteIncident(id: string): void {
    if (confirm('Are you sure you want to delete this incident?')) {
      this.expressService.deleteIncident(id)
        .then(() => {
          this.loadIncidents(); // Refresh the list after deletion
        })
        .catch(error => {
          console.error('Error deleting incident:', error);
          alert('Failed to delete incident. Please try again.');
        });
    }
  }
}
