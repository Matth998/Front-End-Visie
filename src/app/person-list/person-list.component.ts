import { Pessoas } from './../model/pessoas';
import { PersonService } from './../service/person.service';
import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs/operators';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  Pessoas: Pessoas = new Pessoas();
  listPerson: Pessoas[];

  constructor(

    private personService: PersonService

  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    this.findAllPerson();

  }

  findAllPerson() {

    this.personService.getAllPerson().subscribe({

      next: pessoas => {

        this.listPerson = pessoas;

      },

      error: err => { console.log('Error: ', err) }

    });

  }
}
