import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/Models/region';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { PaysService } from 'src/app/_services/pays/pays.service';
import { RegionService } from 'src/app/_services/regions/region.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  listepays: any;
  listregions: Region[] = [];
  lengthPays: any;
  lengthRegions: any;

  constructor(
    private paysService: PaysService,
    private regionService:RegionService
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
        this.lengthPays = this.listepays.length
        console.log(this.lengthPays);
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
          this.lengthRegions = this.listregions.length
          console.log(this.lengthPays);
        },
        err => {
          console.log(err);
        }
      );
    }

}
