// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ExpressService } from '../express.service';
// import { IncidentComponent } from '../incident/incident.component';
// import { Incident } from '../incident';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-incident-list',
//   standalone: true,
//   imports: [CommonModule, IncidentComponent, RouterModule],
//   template: `
//   <div class="row">
//   <div class="offset-md-offset-3 col-md-12">
//   <h1>{{title}}</h1>
//     <style>
//       body {
//         background-image: url('assets/images/incident2.png');
//         background-size: cover;
//       }
//     </style>
//     <br />
//     <div class="text-center">
//       <a [routerLink]="['/incident/add']" class="btn btn-primary" role="button">
//         <i class="fas fa-plus-circle"></i> Add Survey
//       </a>
//     </div>
//     <br />
//     <table class="table table-bordered table-striped table-hover">
//       <!-- Header Row -->
//       <tr class="d-flex">
//         <th class="text-center col-3">Incident</th>
//         <th class="text-center col-2">Description</th>
//         <th class="text-center col-3">Date</th>
//         <th class="text-center col-2"></th>
//         <th class="text-center col-2"></th>
//       </tr>

//       <!-- Repeatable Template Row -->
//       <tr class="d-flex" *ngFor="let incident of incidentList">
//       <td class="text-center col-3">{{ incident.incident }}</td>
//       <td class="text-center col-2">{{ incident.description }}</td>
//       <td class="text-center col-3">{{ incident.date }}</td>
//       <td class="text-center col-2">
//         <a [routerLink]="['/data/edit', incident._id]" class="btn btn-primary btn-sm">
//           <i class="fas fa-pencil-alt"></i> Edit
//         </a>
//       </td>
//       <td class="text-center col-2">
//         <a [routerLink]="['/data/delete', incident._id]" class="btn btn-danger btn-sm">
//           <i class="fas fa-trash-alt"></i> Delete
//         </a>
//       </td>
       
//       </tr>
//     </table>
//   </div>
// </div>
//   `,
//   styleUrl: './incident-list.component.css'
// })
// export class IncidentListComponent {
//   title: 'Incident Survey List' = "Incident Survey List";
  
//   incidentList: Incident[] = [];
//   expressService: ExpressService = inject(ExpressService);

//   constructor() {
//     this.expressService.getAllIncident().then(incidentList => {
//       this.incidentList = incidentList;
//       console.log(this.incidentList);
//     });
//   }
// }
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressService } from '../express.service';
//import { IncidentComponent } from '../incident/incident.component';
import { Incident } from '../incident';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './incident-list.component.html',
  styleUrl: './incident-list.component.css'
})
// export class IncidentListComponent {
//   title: 'Incident Survey List' = "Incident Survey List";


//   incidentList: Incident[] = [];
//   expressService: ExpressService = inject(ExpressService);


//   constructor() {
//     this.expressService.getAllIncident().then(incidentList => {
//       this.incidentList = incidentList;
//       console.log(this.incidentList);
//     });
//   }
// }
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
