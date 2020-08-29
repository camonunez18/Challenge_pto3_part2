import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../Modelo/Person';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/SpringAPI/api/person";

  getPeople(){
    return this.http.get<Person[]>(this.Url);
  }

  createMovie(person:Person){
    return this.http.post<Person>(this.Url, person);
  }

  deletePerson(personDelete:Person){
    console.log("Mensaje en Service: " + JSON.stringify(personDelete));
    return this.http.delete<Person>(this.Url+"?id="+personDelete.id);
  } 
}
