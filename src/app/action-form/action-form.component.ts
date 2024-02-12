import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
  // showComponent = false;

  constructor() { }

  ngOnInit(): void {
  }
  // toggleComponent(): void {
  //   this.showComponent = true;
  // }

  isContainerHidden: boolean = false;

  hideContainer(): void {
    this.isContainerHidden = true;
  }
}
