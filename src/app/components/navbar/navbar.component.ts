import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '[class.contact-page]': 'isContactPage',
  },
})
export class NavbarComponent implements OnInit {
  active = 1;
  isContactPage = false;

  constructor(private dataService: DataService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isContactPage = event.url === '/contact';
      }
    });
  }

  ngOnInit(): void {}

  setView(view: string) {
    this.dataService.view.next(view);
  }
}
