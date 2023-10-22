import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from 'src/app/Models/pays';
import { Region } from 'src/app/Models/region';
import { PaysService } from 'src/app/_services/pays/pays.service';
import { RegionService } from 'src/app/_services/regions/region.service';

@Component({
  selector: 'app-dashboard-regions',
  templateUrl: './dashboard-regions.component.html',
  styleUrls: ['./dashboard-regions.component.scss']
})
export class DashboardRegionsComponent implements OnInit{

  listregions: Region[] = [];
  listepays: Pays[] = [];
  fichier: any;
  image: any;

  codeRegion!: any;
  imageRegion!: any;
  nomRegion!: any;
  domaineActiviteRegion!: any;
  descriptionRegion!: any;
  superficie !: any;
  langueMajoritaire!: any;
  pays : any;
  createur : any;
  idPays!: number;

  constructor(
    private regionService: RegionService,
    private paysService: PaysService,
    private router: Router
    ){}
  
  ngOnInit(): void {
    this.listeRegion();
    this.ListPays();
  }
  
  ListPays(): void {
    this.paysService.listePays().subscribe(
      data => {
        console.log(data);
        this.listepays = data;
      },
      err => {
        console.log(err);
      }
    );
  }

    //Liste de tout les regions
    listeRegion(): void {
      this.regionService.liste().subscribe(
        data => {
          console.log(data);
          this.listregions = data;
        },
        err => {
          console.log(err);
        }
      );
    }



  //Recuperationn de l'image depuis la formulaire
  recuperationImage(event: any) {
    this.image = event.target["files"][0];
    console.log(this.image)
  }
  reg =[{
    "codeRegion": this.codeRegion,
    "nomRegion":this.nomRegion,
    "descriptionRegion": this.descriptionRegion,
    "domaineActiviteRegion":this.domaineActiviteRegion,
    "superficie":this.superficie,
    "langueMajoritaire":this.langueMajoritaire
  }]

    onCreate(idPays: number) {
      console.log(this.idPays)
      // const region = new Region(this.codeRegion, this.imageRegion, this.nomRegion, this.domaineActiviteRegion, this.superficie, this.langueMajoritaire);
      // console.log(region);
      this.regionService.Creer(this.image,this.codeRegion,this.nomRegion,this.descriptionRegion,this.domaineActiviteRegion,this.superficie,this.langueMajoritaire,this.idPays).subscribe(
        data => {
          // this.toastr.success('Region creer', 'OK', {
          //   timeOut: 3000, positionClass: 'toast-top-center'
          // });
          console.log(data);
          this.router.navigate(['/dashboard/region']);
        },
        err => {
          // this.toastr.error(err.error.mensaje, 'Fail', {
          //   timeOut: 3000,  positionClass: 'toast-top-center',
          // });
          // this.router.navigate(['/list']);
        }
      );
    }

}
