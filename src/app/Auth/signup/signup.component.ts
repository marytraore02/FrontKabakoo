import { Component, HostListener, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: any = {
    username: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(
    private authService: AuthService,
    private _toast: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.showSuccess();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      },
    });
    this.navigateAdmin();
  }

  public showSuccess(): void {
    this._toast.success('Compte créer avec success');
  }

    // Redirection
    navigateAdmin() {
      this.router.navigateByUrl('/login');
    }


}
