
import { Injectable } from '@angular/core';
import { Incident } from './incident';
import { User } from './Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class ExpressService {
  register(user: User) {
    throw new Error('Method not implemented.');
  }
  url: string = "http://localhost:3500"; // Base URL for the backend

  constructor() { }

  // Existing methods for incidents...

  // Method to register a new user
  async registerUser(user: User): Promise<any> {
    try {
      const response = await fetch(`${this.url}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to register user. Status: ${response.status}, Details: ${errorDetails}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error registering user:', error);
      throw error; // Re-throw the error to be caught in the component
    }
  }

  // Method for user login
  async loginUser(credentials: { username: string, password: string }): Promise<any> {
    try {
      const response = await fetch(`${this.url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Failed to log in. Status: ${response.status}, Details: ${errorDetails}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  // Existing incident-related methods...

  async getAllIncident(): Promise<Incident[]> {
    try {
      const response = await fetch(`${this.url}/data/all`);
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
      const response = await fetch(`${this.url}/data/add`, {
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
      const response = await fetch(`${this.url}/data/delete/${id}`, {
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
      const response = await fetch(`${this.url}/data/edit/${id}`);
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
      const response = await fetch(`${this.url}/data/edit/${id}`, {
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
