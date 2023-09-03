import { Component } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent {

  images = [
    {src: 'https://img.r7.com/images/capivara-albina-rara-e-flagrada-e-faz-sucesso-na-web-01062023104808755?dimensions=442x241&&&resize=442x241&crop=875x477+295+369', alt: 'Image 2'},
    {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4A9EhcbXw49oXfE86vVbaZROF122y2e2qQ&usqp=CAU', alt: 'Image 3'},
  ];

  currentIndex = 0;

  previousSlide() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }

}
