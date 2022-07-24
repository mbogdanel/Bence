import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksGuestsComponent } from './pages/works-guests/works-guests.component';
import { WorksPersonalComponent } from './pages/works-personal/works-personal.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'works-personal', component: WorksPersonalComponent },
  { path: 'works-guests', component: WorksGuestsComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
