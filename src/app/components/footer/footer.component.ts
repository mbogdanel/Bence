import { Component, OnInit } from '@angular/core';
import {
  faTwitter,
  faFacebookF,
  faInstagramSquare,
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

  constructor() {}

  ngOnInit(): void {}
}
