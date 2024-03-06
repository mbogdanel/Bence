import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  id: any;
  work: any;
  works: any;
  safeURL: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    // console.log(this.works);

    this.dataService.view.subscribe((view: string) => {
      view == 'personal'
        ? (this.works = this.dataService.works)
        : (this.works = this.dataService.collaborations);
    });

    this.work = this.works.filter((work: any) => {
      return work.id === +this.id;
    })[0];

    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.work.video
    );

    // console.log(this.work);
  }
}
