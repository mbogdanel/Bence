import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  active = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  setView(view: string) {
    this.dataService.view.next(view);
  }
}
