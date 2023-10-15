import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';

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
    private tokenStorageService: TokenStorageService
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
        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showUserBoard = this.roles.includes('ROLE_USER');

        // On vérifie, si le role user ou admin pour la redirection
        // if (this.isLoggedIn) {
        //   const user = this.tokenStorageService.getUser();
        //   this.roles = user.roles;
        //   this.role = user.roles;

        //   this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        //   this.showUserBoard = this.roles.includes('ROLE_USER');
        //   this.username = user.username;
        // }
        this.navigateAdmin();

        // if (this.showAdminBoard){
        //   this.navigateAdmin();
        //   this.reloadPage()
        // } else {
        //   this.navigateHome();
        //   this.reloadPage()
        // }

        // this.roles = this.tokenStorage.getUser().roles;
        // this.reloadPage();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      },
    });
  }

  // Redirection
  navigateAdmin() {
    this.router.navigateByUrl('/accueil');
  }

  // Redirection
  navigateHome() {
    this.router.navigateByUrl('/');
  }

  reloadPage(): void {
    // window.location.reload();
    this.navigateAdmin();
  }
}
