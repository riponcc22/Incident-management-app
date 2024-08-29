// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-incident-edit',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './incident-edit.component.html',
//   styleUrl: './incident-edit.component.css'
// })
// export class IncidentEditComponent {

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpressService } from '../express.service';
import { Incident } from '../incident';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Import RouterModule


@Component({
    selector: 'app-incident-edit',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule], // Add RouterModule here
    templateUrl: './incident-edit.component.html',
    styleUrls: ['./incident-edit.component.css']
})
export class IncidentEditComponent implements OnInit {
    incident: Incident = { incident: '', description: '', date: '', _id: '' };
    id: string;


    constructor(private route: ActivatedRoute, private expressService: ExpressService, private router: Router) {
        this.id = this.route.snapshot.paramMap.get('id') || '';
    }


    ngOnInit(): void {
        this.expressService.getIncidentById(this.id).then(incident => {
            this.incident = incident;
        }).catch(error => {
            console.error('Error loading incident:', error);
        });
    }


    onSubmit(): void {
        this.expressService.updateIncident(this.id, this.incident).then(() => {
            alert('Incident updated successfully');
            this.router.navigate(['/incident']);
        }).catch(error => {
            console.error('Error updating incident:', error);
            alert('Failed to update incident. Please try again.');
        });
    }
}
