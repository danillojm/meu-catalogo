import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ImagePath } from '../product/product.model';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrls: ['./carousel-holder.component.css']
})
export class CarouselHolderComponent implements OnInit {

  @Input()
  imgPatch: ImagePath[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };

  constructor() { }

  ngOnInit(): void {

  }

}
