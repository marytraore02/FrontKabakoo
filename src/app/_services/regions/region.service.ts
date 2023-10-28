import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from 'src/app/Models/region';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  env=environment;

  constructor(private http:HttpClient) { }

  //Liste des region
  liste(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.env.api}` + `/region/read`);
  }

      
  //Creation d'une region
  Creer(file:any,codeRegion:any,nomRegion:any,descriptionRegion:any,domaineActiviteRegion:any,superficie:any,langueMajoritaire:any,idPays:number,token:any):Observable<any>{
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    const dat:FormData=new FormData();
    let reg =[{
      "codeRegion": codeRegion,
      "nomRegion":nomRegion,
      "descriptionRegion":descriptionRegion,
      "domaineActiviteRegion":domaineActiviteRegion,
      "superficie":superficie,
      "langueMajoritaire":langueMajoritaire
    }]
    dat.append('file',file);
    console.log("Ce que j'envoi => "+reg)
    dat.append('data', JSON.stringify(reg).slice(1,JSON.stringify(reg).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/region/create/new/${idPays}`, dat, { headers });
  }


}
