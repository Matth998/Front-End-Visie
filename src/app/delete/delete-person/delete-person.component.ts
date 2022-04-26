import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoas } from 'src/app/model/pessoas';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.scss']
})
export class DeletePersonComponent implements OnInit {

  pessoas: Pessoas = new Pessoas();
  id: number

  constructor(

    private pessoasService: PersonService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(){

    this.id = this.route.snapshot.params['id'];
    this.findById(this.id)

  }

  findById(id: number){

    this.pessoasService.getByIdPerson(id).subscribe((resp: Pessoas) =>{

      this.pessoas = resp;

    })

  }

  delete(){

    this.pessoasService.delete(this.id).subscribe(()=>{

      alert("Registro apagado com sucesso!");
      this.router.navigate(['/person']);

    })

  }

}
