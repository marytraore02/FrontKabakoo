import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { RegionsComponent } from './components/pages/regions/regions.component';
import { PaysComponent } from './components/pages/pays/pays.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { SitesComponent } from './components/pages/sites/sites.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { DashboardPaysComponent } from './components/dashboard/dashboard-pays/dashboard-pays.component';
import { DashboardRegionsComponent } from './components/dashboard/dashboard-regions/dashboard-regions.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    RegionsComponent,
    PaysComponent,
    ContactComponent,
    GalleryComponent,
    ProfilComponent,
    SitesComponent,
    LoginComponent,
    SignupComponent,
    HomeDashboardComponent,
    HomeComponent,
    DashboardPaysComponent,
    DashboardRegionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
