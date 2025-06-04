import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/interfaces/eperson';
import { Person } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  @Input() personInput: Person | EPerson | undefined;
  
  name = 'Lena'
  addressOrdEducation: string = ""

  person = {
    givenName: 'Lena',
    surname: 'Lamiotissa',
    age: '65',
    email: 'lena@aueb.gr'
  }
  isPerson():boolean {
  if (this.personInput && 'address' in this.personInput){
    this.addressOrdEducation = this.personInput.address
    return 'address' in this.personInput;
  }
  return false;
  }

  isEPerson(): boolean {
    if (this.personInput && 'education' in this.personInput) {
      this.addressOrdEducation = this.personInput.education
      return 'education' in this.personInput;
    }
    return false
  }
}
