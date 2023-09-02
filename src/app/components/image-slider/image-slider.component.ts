import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    './assets/images/banner1.jpg',
    './assets/images/banner2.png',
    './assets/images/banner3.png'
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // Cambiar de imagen cada 3 segundos (ajusta el intervalo según sea necesario)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
