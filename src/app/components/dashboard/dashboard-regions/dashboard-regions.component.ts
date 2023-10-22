import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from 'src/app/Models/pays';
import { Region } from 'src/app/Models/region';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { PaysService } from 'src/app/_services/pays/pays.service';
import { RegionService } from 'src/app/_services/regions/region.service';
import Swal from 'sweetalert2';

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
  accessToken:any;
  user: any;

  constructor(
    private regionService: RegionService,
    private paysService: PaysService,
    private router: Router,
    private tokenStorage: TokenStorageService
    ){}
  
  ngOnInit(): void {
        //==========Recuperation de user conecter=========
        this.user = this.tokenStorage.getUser().id;
        console.log("id user "+this.user);
    
        this.accessToken = this.tokenStorage.getUser().accessToken;
        console.log("token du user "+this.accessToken)

        
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

    onCreate() {
      this.regionService.Creer(this.image,this.codeRegion,this.nomRegion,this.descriptionRegion,this.domaineActiviteRegion,this.superficie,this.langueMajoritaire,this.idPays,this.accessToken).subscribe(
        data => {
          console.log(data);
          this.popUp();
        },
        err => {
          // this.toastr.error(err.error.mensaje, 'Fail', {
          //   timeOut: 3000,  positionClass: 'toast-top-center',
          // });
          // this.router.navigate(['/list']);
        }
      );
    }

      // METHODE DE POP UP INSCRIPTION
  popUp() {
    Swal.fire({
      position:'center',
      // title: 'Géo-clinique',
      text: 'Region créer avec success!',
      icon:'success',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#0857b5',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    }).then((result) => {
      if (result.isConfirmed) {
          this.router.navigate(['/dashboard/region']);
          window.location.reload();
      }
    })

  }


}
