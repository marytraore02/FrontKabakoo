import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  role = false;
  showAdminBoard = false;
  showUserBoard = false;
  username?: string;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        // On recupère le token de la personne connecter
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        // On recupère le role de la personne connecter
        this.role = this.tokenStorageService.getUser().roles;
        this.username = this.tokenStorageService.getUser().username;
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showUserBoard = this.roles.includes('ROLE_USER');
        this.navigateAdmin();
      },
      error: (err) => {
        this.toastr.error(err.error.message);
        // this.errorMessage = err.error.message;
        // this.isLoginFailed = true;
      },
    });
  }

  // Redirection
  navigateAdmin() {
    this.router.navigateByUrl('/accueil');
    this.showSuccess();
  }

  // Redirection
  navigateHome() {
    this.router.navigateByUrl('/');
  }

  reloadPage(): void {
    // window.location.reload();
    this.navigateAdmin();
  }

  showSuccess() {
    this.toastr.success('Bienvenue '+ this.username);
  }


}
