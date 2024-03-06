import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  works: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.view.subscribe((view: string) => {
      view == 'personal'
        ? (this.works = this.dataService.works)
        : (this.works = this.dataService.collaborations);
    });
    // console.log(this.works);
  }
}
