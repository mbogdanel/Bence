import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works-personal',
  templateUrl: './works-personal.component.html',
  styleUrls: ['./works-personal.component.scss'],
})
export class WorksPersonalComponent implements OnInit {
  works: any;

  constructor(private worksService: WorksService) {}

  ngOnInit(): void {
    this.works = this.worksService.works;
    console.log(this.works);
  }
}
