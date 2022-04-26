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

  getByIdPerson(id: number): Observable<Pessoas>{

    return this.http.get<Pessoas>(`http://localhost:4000/people/${id}`);

  }

  post(person: Pessoas): Observable<Pessoas>{

    return this.http.post<Pessoas>(`http://localhost:4000/people`, person);

  }

  put(person: Pessoas, id:number): Observable<Pessoas>{


    return this.http.put<Pessoas>(`http://localhost:4000/people/${id}`, person);

  }

  delete(id:number){

    return this.http.delete(`http://localhost:4000/people/${id}`);

  }

}
