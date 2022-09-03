import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendar: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.calendar = this.dataService.calendar;
  }
}
