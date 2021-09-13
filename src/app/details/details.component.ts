import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  myParam: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
      this.route.params.subscribe((params: Params) => this.myParam = params);
  }

}
