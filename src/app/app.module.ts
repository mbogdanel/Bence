import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { AboutComponent } from './pages/about/about.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WorksPersonalComponent } from './pages/works-personal/works-personal.component';
import { WorksGuestsComponent } from './pages/works-guests/works-guests.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkPersonalComponent } from './pages/work-personal/work-personal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollaborationComponent } from './pages/collaboration/collaboration.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,
    AboutComponent,
    CalendarComponent,
    ContactComponent,
    WorksPersonalComponent,
    WorksGuestsComponent,
    FooterComponent,
    HomeComponent,
    WorkPersonalComponent,
    CollaborationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
