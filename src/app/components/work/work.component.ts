import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  @Input() work: any;
  safeURL: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    console.log(this.work);
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.work.video
    );
  }
}
