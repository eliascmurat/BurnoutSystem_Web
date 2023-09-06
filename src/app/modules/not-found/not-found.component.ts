import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.redirectWithFragment();
  }

  redirectWithFragment(): void {
    const fragment = 'ops';
    window.location.href = '/not-found#' + fragment;
  }

}
