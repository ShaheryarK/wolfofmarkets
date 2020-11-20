import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  constructor() { }

  ngOnInit(): void {
    // this.carousel.pause();
  }

   // Move to previous slide
   getToPrev() {
    this.carousel.prev();
  }

  // Move to next slide
  goToNext() {
    this.carousel.next();
  }
}
