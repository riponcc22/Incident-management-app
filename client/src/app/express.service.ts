// import { Injectable } from '@angular/core';
// import { Incident } from './incident';

// @Injectable({
//   providedIn: 'root'
// })
// export class ExpressService {

//   url: string = "http://localhost:3500"

//   constructor() { }

//   async getAllIncident(): Promise<Incident[]> {
//     try {
//       const response = await fetch(this.url + "/data/all");

//       if (!response.ok) {
//         throw new Error(`Failed to fetch data. Status: ${response.status}`);
//       }

//       const data = await response.json();
//       return data ?? [];
//     } catch (error) {
//       console.error('Error during fetch:', error);
//       return []; // You may want to handle the error in a more appropriate way
//     }
//   }
// }
import { Injectable } from '@angular/core';
import { Incident } from './incident';


@Injectable({
  providedIn: 'root'
})
export class ExpressService {
  url: string = "http://localhost:3500/data";


  constructor() { }


  async getAllIncident(): Promise<Incident[]> {
    try {
      const response = await fetch(`${this.url}/all`);
      if (!response.ok) {
        throw new Error(`Failed to fetch incidents. Status: ${response.status}`);
      }
      return await response.json() ?? [];
    } catch (error) {
      console.error('Error fetching incidents:', error);
      return [];
    }
  }


  async addIncident(incident: Incident): Promise<Incident> {
    try {
      const response = await fetch(`${this.url}/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(incident)
      });


      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to add incident. Status: ${response.status}, Details: ${errorDetails}`);
      }


      return await response.json();
    } catch (error) {
      console.error('Error adding incident:', error);
      throw error; // Re-throw the error to be caught in the component
    }
  }


  async deleteIncident(id: string): Promise<void> {
    try {
        const response = await fetch(`${this.url}/delete/${id}`, {
            method: 'DELETE'
        });


        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`Failed to delete incident. Status: ${response.status}, Details: ${errorDetails}`);
        }


        alert('Incident deleted successfully');
    } catch (error) {
        console.error('Error deleting incident:', error);
        throw error; // Re-throw the error to be caught in the component
    }
}


async getIncidentById(id: string): Promise<Incident> {
  try {
      const response = await fetch(`${this.url}/edit/${id}`);
      if (!response.ok) {
          throw new Error(`Failed to fetch incident. Status: ${response.status}`);
      }
      return await response.json(); // Ensure this parses JSON correctly
  } catch (error) {
      console.error('Error fetching incident:', error);
      throw error;
  }
}


async updateIncident(id: string, incident: Incident): Promise<Incident> {
  try {
      const response = await fetch(`${this.url}/edit/${id}`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(incident)
      });


      if (!response.ok) {
          const errorDetails = await response.text();
          throw new Error(`Failed to update incident. Status: ${response.status}, Details: ${errorDetails}`);
      }


      return await response.json();
  } catch (error) {
      console.error('Error updating incident:', error);
      throw error;
  }
}




}
