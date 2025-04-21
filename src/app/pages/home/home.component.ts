import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imageSrc = 'assets/pictures/home_page_2022_photo-andrejlamut_WEB-9.jpg';

  constructor() {}

  ngOnInit(): void {
    this.updateImageSrc();
  }

  openCV = () => {
    window.open('/assets/pdfs/bence_mezei_cv_25.pdf', '_blank');
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateImageSrc();
  }

  private updateImageSrc(): void {
    if (window.innerWidth <= 768) {
      this.imageSrc = 'assets/pictures/bio.jpg';
    } else {
      this.imageSrc = 'assets/pictures/bio.jpg';
    }
  }
}
