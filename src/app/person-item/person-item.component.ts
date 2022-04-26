import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoas } from '../model/pessoas';
import { PersonService } from '../service/person.service';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent implements OnInit {

  pessoas: Pessoas = new Pessoas();

  constructor(

    private pessoasService: PersonService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    this.findById(id);

  }

  findById(id: number) {

    this.pessoasService.getByIdPerson(id).subscribe((resp: Pessoas) => {

      this.pessoas = resp;

    })

  }

}
