import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Marina';

  // One way binding of data
  person = {
    givenName: 'Marina',
    surname: 'Krommyda',
    age: 26,
    email: 'kmarikro@aueb.gr'
  }

  //Component input
  person0: Person = {
    givenName: "Periklis",
    surName: "Periklopoulos",
    age: 55,
    email: "per@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surName: "Doe",
    age: 32,
    email: "john@aueb.gr",
    address: "New York, USA"
  }

  users: Person[] = [
    {
      "givenName": "Jaye",
      "surName": "Harmston",
      "email": "jharmston0@domainmarket.com",
      "age": 1,
      "address": "PO Box 58062"
    }, {
      "givenName": "Glynnis",
      "surName": "Dufer",
      "email": "gdufer1@indiegogo.com",
      "age": 2,
      "address": "Suite 43"
    }, {
      "givenName": "Berri",
      "surName": "Sphinxe",
      "email": "bsphinxe2@xrea.com",
      "age": 3,
      "address": "Room 1784"
    }, {
      "givenName": "Dorette",
      "surName": "Ullrich",
      "email": "dullrich3@nps.gov",
      "age": 4,
      "address": "PO Box 7871"
    }, {
      "givenName": "Paolo",
      "surName": "Linforth",
      "email": "plinforth4@netscape.com",
      "age": 5,
      "address": "Apt 1446"
    }, {
      "givenName": "Rhea",
      "surName": "Haxby",
      "email": "rhaxby5@gravatar.com",
      "age": 6,
      "address": "Room 1606"
    }, {
      "givenName": "Muffin",
      "surName": "Ivory",
      "email": "mivory6@cam.ac.uk",
      "age": 7,
      "address": "7th Floor"
    }, {
      "givenName": "Care",
      "surName": "Herculson",
      "email": "cherculson7@yahoo.co.jp",
      "age": 8,
      "address": "Apt 1709"
    }, {
      "givenName": "Nathanael",
      "surName": "Grassi",
      "email": "ngrassi8@discuz.net",
      "age": 9,
      "address": "16th Floor"
    }, {
      "givenName": "Lydie",
      "surName": "Ellerman",
      "email": "lellerman9@sphinn.com",
      "age": 10,
      "address": "Room 309"
    }, {
      "givenName": "Aleen",
      "surName": "Longshaw",
      "email": "alongshawa@imageshack.us",
      "age": 11,
      "address": "Suite 95"
    }, {
      "givenName": "Barrie",
      "surName": "Kyberd",
      "email": "bkyberdb@epa.gov",
      "age": 12,
      "address": "Room 1702"
    }, {
      "givenName": "Ilka",
      "surName": "Acreman",
      "email": "iacremanc@nydailynews.com",
      "age": 13,
      "address": "Suite 17"
    }, {
      "givenName": "Gage",
      "surName": "Lerigo",
      "email": "glerigod@infoseek.co.jp",
      "age": 14,
      "address": "Suite 36"
    }, {
      "givenName": "Durand",
      "surName": "Galiford",
      "email": "dgaliforde@ucla.edu",
      "age": 15,
      "address": "PO Box 29098"
    }, {
      "givenName": "Cassaundra",
      "surName": "Kuhnt",
      "email": "ckuhntf@google.it",
      "age": 16,
      "address": "Apt 626"
    }, {
      "givenName": "Kelsy",
      "surName": "Sheerman",
      "email": "ksheermang@mashable.com",
      "age": 17,
      "address": "Apt 880"
    }, {
      "givenName": "Karlotte",
      "surName": "Bragger",
      "email": "kbraggerh@timesonline.co.uk",
      "age": 18,
      "address": "13th Floor"
    }, {
      "givenName": "Erek",
      "surName": "Merrifield",
      "email": "emerrifieldi@devhub.com",
      "age": 19,
      "address": "13th Floor"
    }, {
      "givenName": "Chrysa",
      "surName": "Lawes",
      "email": "clawesj@google.it",
      "age": 20,
      "address": "19th Floor"
    }
  ]
  
}
