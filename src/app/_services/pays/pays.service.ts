import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  //Creation d'une region
  Create(file:any,nomPays:any,descriptionPays:any,superficiePays:any,token:any):Observable<any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    const dat:FormData=new FormData();
    let reg =[{
      "nomPays": nomPays,
      "descriptionPays":descriptionPays,
      "superficiePays":superficiePays
    }]
    dat.append('file',file);
    console.log("Ce que j'envoi => "+reg)
    dat.append('data', JSON.stringify(reg).slice(1,JSON.stringify(reg).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/pays/create`, dat, { headers });
  }


}
