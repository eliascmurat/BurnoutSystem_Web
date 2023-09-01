import { Component } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faBars = faBars;
  faXmark = faXmark;

  isMenuOpen: boolean = false;

  toggleNavbarMobile() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeNavbarMobile() {
    this.isMenuOpen = false;
  }

}
