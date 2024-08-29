// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Incident } from '../incident';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-incident',
//   standalone: true,
//   imports: [CommonModule, RouterModule],
//   template: `
//     <tr class="d-flex">
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
//     </tr>
//   `,
//   styleUrls: ['./incident.component.css']
// })
// export class IncidentComponent {
//   @Input() incident!: Incident;
// }
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Incident } from '../incident';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-incident',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <tr class="d-flex">
  <td class="text-center col-3">{{ incident.incident }}</td>
  <td class="text-center col-2">{{ incident.description }}</td>
  <td class="text-center col-3">{{ incident.date }}</td>                                         
 <td class="text-center col-2">
     <a [routerLink]="['/data/edit', incident._id]" class="btn btn-primary btn-sm">
     <i class="fas fa-pencil-alt"></i> Edit</a>
 </td>
 <td class="text-center col-2">
     <a href="/data/delete/{{ incident._id }}" class="btn btn-danger btn-sm">                              
     <i class="fas fa-trash-alt"></i> Delete</a>
 </td>
</tr>
  `,
  styleUrl: './incident.component.css'
})
export class IncidentComponent {
  @Input() incident!: Incident;
}