import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared/interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Marina';

  // One way binding of data
  // person = {
  //   givenName: 'Marina',
  //   surname: 'Krommyda',
  //   age: 26,
  //   email: 'kmarikro@aueb.gr'
  // }

  //Component input
  // person0: Person = {
  //   givenName: "Periklis",
  //   surName: "Periklopoulos",
  //   age: 55,
  //   email: "per@aueb.gr",
  //   address: "Athens, Greece"
  // }

  // person1: Person = {
  //   givenName: "John",
  //   surName: "Doe",
  //   age: 32,
  //   email: "john@aueb.gr",
  //   address: "New York, USA"
  // }

 
  
}
