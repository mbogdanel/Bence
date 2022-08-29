import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-work-personal',
  templateUrl: './work-personal.component.html',
  styleUrls: ['./work-personal.component.scss'],
})
export class WorkPersonalComponent implements OnInit {
  id: any;
  work: any;
  works: any;

  constructor(
    private route: ActivatedRoute,
    private worksService: WorksService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.works = this.worksService.works;
    console.log(this.works);

    this.work = this.works.filter((work: any) => {
      return work.id === +this.id;
    })[0];
    console.log(this.work);
  }
}
