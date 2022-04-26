import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoas } from '../model/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(

    private http: HttpClient

  ) { }

  getAllPerson(): Observable<Pessoas[]> {

    return this.http.get<Pessoas[]>(`http://localhost:4000/people`);

  }

}
