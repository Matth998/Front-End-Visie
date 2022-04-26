import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoas } from 'src/app/model/pessoas';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  pessoas: Pessoas = new Pessoas();

  constructor(

    private pessoasService: PersonService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];
    
    this.findById(id)

  }

  findById(id: number){

    this.pessoasService.getByIdPerson(id).subscribe((resp: Pessoas) =>{

      this.pessoas = resp;

    })

  }

  update(id:number) {


    this.pessoasService.put(this.pessoas, id).subscribe((resp: Pessoas) => {

      this.pessoas = resp;
      alert("Postagem atualizada com sucesso!");
      this.router.navigate(['/person']);

    })

  }

}
