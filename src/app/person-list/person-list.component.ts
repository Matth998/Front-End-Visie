import { Pessoas } from './../model/pessoas';
import { PersonService } from './../service/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  pessoas: Pessoas = new Pessoas();
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

      error: err => { console.log('Error: ', err); }

    });

  }

  postPerson(){

    this.personService.post(this.pessoas).subscribe((resp: Pessoas) =>{

      this.pessoas = resp;
      alert("Registro feito com sucesso!");
      this.pessoas = new Pessoas();

      this.findAllPerson();

    })

  }


}
