import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  paragraphs: any;

  constructor(private worksService: WorksService) {}

  ngOnInit(): void {
    this.paragraphs = this.worksService.aboutPage.paragraphs;
    console.log(this.paragraphs);
  }
}
