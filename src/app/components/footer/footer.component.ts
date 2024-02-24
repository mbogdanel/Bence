import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import {
  faTwitter,
  faFacebookF,
  faInstagramSquare,
  faVimeo,
} from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebookF;
  faInstagram = faInstagramSquare;
  faTwitter = faTwitter;
  faHeart = faHeart;
  faVimeo = faVimeo;

  currentRoute: string;
  home = false;

  constructor(router: Router) {
    router.events.subscribe((url: any) => {
      if (url.url) {
        this.currentRoute = url.url;
        if (this.currentRoute === '/home') {
          this.home = true;
        } else this.home = false;
      }

      // console.log(this.currentRoute);
    });
  }

  ngOnInit(): void {}
}
