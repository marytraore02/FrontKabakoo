import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pays } from 'src/app/Models/pays';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { PaysService } from 'src/app/_services/pays/pays.service';
import { RegionService } from 'src/app/_services/regions/region.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-pays',
  templateUrl: './dashboard-pays.component.html',
  styleUrls: ['./dashboard-pays.component.scss']
})
export class DashboardPaysComponent implements OnInit{

  listepays: Pays[] = [];
  image: any;
  nomPays!: any;
  descriptionPays!: any;
  superficiePays!: any;
  accessToken:any;
  user:any;


  constructor(
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
  
    //Recuperationn de l'image depuis la formulaire
    recuperationImage(event: any) {
      this.image = event.target["files"][0];
      console.log(this.image)
    }
    reg =[{
      "nomPays": this.nomPays,
      "descriptionPays": this.descriptionPays,
      "superficiePays": this.superficiePays
    }]

    onCreate() {
      this.paysService.Create(this.image,this.nomPays,this.descriptionPays,this.superficiePays,this.accessToken).subscribe(
        data => {
          // this.toastr.success('Region creer', 'OK', {
          //   timeOut: 3000, positionClass: 'toast-top-center'
          // });
          console.log(data);
          this.popUp();
          // this.router.navigate(['/dashboard/pays']);
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
      text: 'Pays créer avec success!',
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
          this.router.navigate(['/dashboard/pays']);
          window.location.reload();
      }
    })

  }


}
