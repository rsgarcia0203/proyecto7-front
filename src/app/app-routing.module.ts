import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ReportComponent } from './pages/report/report.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent /* canActivate: [AuthGuard] */},
  { path: 'about', component: AboutComponent },
  { path: 'report', component: ReportComponent },
  { path: 'contact', component: ContactComponent},
  { path: '**', component: PageNotFoundComponent },
  //{ path: 'account/login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
