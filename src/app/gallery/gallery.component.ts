import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  name = 'Plants';
  type = 'vegetables';

  getType() {
    return this.type;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
