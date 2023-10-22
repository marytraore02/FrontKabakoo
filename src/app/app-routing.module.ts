import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { DashboardPaysComponent } from './components/dashboard/dashboard-pays/dashboard-pays.component';
import { DashboardRegionsComponent } from './components/dashboard/dashboard-regions/dashboard-regions.component';
import { HomeDashboardComponent } from './components/dashboard/home-dashboard/home-dashboard.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { PaysComponent } from './components/pages/pays/pays.component';
import { ProfilComponent } from './components/pages/profil/profil.component';
import { RegionsComponent } from './components/pages/regions/regions.component';
import { SitesComponent } from './components/pages/sites/sites.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'regions', component: RegionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pays', component: PaysComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'profile', component: ProfilComponent },
  { path: 'sites', component: SitesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'dashboard', component: HomeDashboardComponent },

  {
    path: 'dashboard',
    component: HomeDashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'region', component: DashboardRegionsComponent },
      { path: 'pays', component: DashboardPaysComponent },
      // { path: 'transaction', component: DashboardTransactionAcheteurComponent },
      // { path: 'delivery', component: DashboardDeliveryAcheteurComponent },
      // { path: 'invoice', component: DashboardInvoiceAcheteurComponent },

      // { path: 'parrainage', component: DashboardParrainageComponent},
      // { path: 'sponsorship-parrainage', component: DashboardSponsorshipParrainageComponent},
      // { path: 'invoice-parrainage', component: DashboardInvoiceParrainageComponent},
      // { path: 'transaction-parrainage', component: DashboardTransactionParrainageComponent},
      // { path: 'message', component: MessageDashboardAcheteurComponent},
      // { path: 'settings', component: SettingsAcheteurComponent}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
