import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {

  images = [
    {src: './assets/metalslug.jpg', alt: 'Image 01 - Metal Slug GBA'},
    {src: './assets/metroid.jpg', alt: 'Image 02 - Metroid GBA'},
    {src: './assets/hollowknight.jpg', alt: 'Image 03 - Hollow Knight'},
    {src: './assets/capivara.webp', alt: 'Image 04 - Capivara'},
  ];

  currentIndex = 0;

  previousSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

}
