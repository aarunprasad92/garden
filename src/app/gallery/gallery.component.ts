import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  name = 'Plants';
  type = 'vegetables';
  photoCount = 0;

  getType() {
    return this.type;
  }
  constructor() { }

  ngOnInit(): void {
  }

  onAddPhoto() {
    this.photoCount = this.photoCount + 1;
  }

  allowPhotoAddition() {
    return this.photoCount < 10;
  }

}
