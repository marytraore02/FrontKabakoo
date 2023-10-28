import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(
    private tokenStorageService: TokenStorageService, 
    private toastr: ToastrService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserBoard = this.roles.includes('ROLE_USER');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  Redirect(){
    this.router.navigateByUrl('/accueil');
    window.location.reload();
  }

  Deconnexion(){
    Swal.fire({
      title: 'Avertissement!',
      text: "Êtes-vous sûr de vouloir vous déconnecter ?",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonColor: '#3085d6',   
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tokenStorageService.signOut();
        this.Redirect();
        this.showSuccess();
      }
    })
  }
  showSuccess() {
    this.toastr.success(this.username + ' Déconnecter ');
  }

}
