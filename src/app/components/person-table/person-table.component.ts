import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = 'Lena'

  person = {
    givenName: 'Lena',
    surname: 'Lamiotissa',
    age: '65',
    email: 'lena@aueb.gr'
  }
}
