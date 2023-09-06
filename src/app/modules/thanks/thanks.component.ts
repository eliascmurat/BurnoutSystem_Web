import {Component, OnInit} from '@angular/core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
    this.redirectWithFragment();
  }

  redirectWithFragment(): void {
    const fragment = 'email-sent';
    window.location.href = '/thanks#' + fragment;
  }

}


