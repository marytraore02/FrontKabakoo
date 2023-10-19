import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pays } from 'src/app/Models/pays';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  env=environment;

  constructor(private http:HttpClient) { }

  //Recuperer les pays
  listePays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(`${this.env.api}` + `/pays/read`);
  }

}
