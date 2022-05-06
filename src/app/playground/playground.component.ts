import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
  }
}
