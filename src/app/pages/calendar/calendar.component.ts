import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendar: any;

  constructor(private worksService: WorksService) {}

  ngOnInit(): void {
    this.calendar = this.worksService.calendar;
  }
}
