import {Component, OnDestroy} from '@angular/core';
import { faComputerMouse } from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnDestroy {

  faComputerMouse = faComputerMouse;

  currentUrl: string = '';
  currentPage: string = '';
  currentSection: string = '';

  private subscription: Subscription;

  constructor(private router: Router) {
    this.subscription = router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = this.router.url;

        const iniPage: number = this.currentUrl.indexOf('/');
        const fimPage: number = this.currentUrl.indexOf('#');
        if (fimPage !== -1) {
          this.currentPage = this.currentUrl.substring(iniPage, fimPage);

          const iniSection: number = this.currentUrl.indexOf('#');
          const fimSection: number = this.currentUrl.length;
          this.currentSection = this.currentUrl.substring(iniSection, fimSection).split(`#`).join('');
        } else {
          this.currentPage = this.currentUrl.substring(iniPage, this.currentUrl.length);

          if (this.currentPage == '/home') {
            this.currentSection = 'about';
          } else if (this.currentPage == '/press-release') {
            this.currentSection = 'announcement';
          } else if (this.currentPage == '/contact') {
            this.currentSection = 'form';
          } else {
            this.currentSection = 'ops';
          }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
