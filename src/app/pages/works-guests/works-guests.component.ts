import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-works-guests',
  templateUrl: './works-guests.component.html',
  styleUrls: ['./works-guests.component.scss'],
})
export class WorksGuestsComponent implements OnInit {
  collaborations: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.collaborations = this.dataService.collaborations;
    console.log(this.collaborations);
  }
}
