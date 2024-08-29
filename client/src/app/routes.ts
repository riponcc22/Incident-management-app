// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { IncidentListComponent } from './incident-list/incident-list.component';
// import { IncidentAddComponent } from './incident-add/incident-add.component';
// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';

// const routeConfig: Routes = [
//     {
//         path: '',
//         component: HomeComponent,
//         title: 'Home page'
//     },
//     {
//         path: 'about',
//         component: AboutComponent,
//         title: 'About Us'
//     },
//     {
//         path: 'incident',
//         component: IncidentListComponent,
//         title: 'Incident List'
//     },

//     {
//         path: 'incident/add',
//         component: IncidentAddComponent,
//         title: 'Add Incident'
//     },
//     {path: 'login',
//     component: LoginComponent,
//     title: 'Login'},

//     {path: 'register',
//     component: RegisterComponent,
//     title: 'Register'}

// ];

// export default routeConfig;

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { IncidentAddComponent } from './incident-add/incident-add.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IncidentEditComponent } from './incident-edit/incident-edit.component';


const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Us'
    },
    {
        path: 'incident',
        component: IncidentListComponent,
        title: 'Incident List'
    },


    {
        path: 'incident/add',
        component: IncidentAddComponent,
        title: 'Add Incident'
    },
    {
      path: 'incident/edit/:id',
      component: IncidentEditComponent,
      title: 'Edit Incident'
  },
    {path: 'login',
    component: LoginComponent,
    title: 'Login'},


    {path: 'register',
    component: RegisterComponent,
    title: 'Register'}


];


export default routeConfig;
