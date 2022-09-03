import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-works-personal',
  templateUrl: './works-personal.component.html',
  styleUrls: ['./works-personal.component.scss'],
})
export class WorksPersonalComponent implements OnInit {
  works: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.works = this.dataService.works;
    console.log(this.works);
  }
}
