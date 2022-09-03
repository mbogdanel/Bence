import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  paragraphs: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.paragraphs = this.dataService.aboutPage.paragraphs;
    console.log(this.paragraphs);
  }
}
