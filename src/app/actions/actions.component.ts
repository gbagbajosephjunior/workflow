import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  showComponent = false;

 
  constructor() { }

  ngOnInit(): void {
  }

  percentage = 100;

  increment() {
    this.percentage += 10;
    this.updatePercentage();
  }

  decrement() {
    this.percentage -= 10; 
    this.updatePercentage();
  }

  private updatePercentage() {
    this.percentage = Math.max(0, Math.min(100, this.percentage));
  }
  
  showActionForm() {
    this.showComponent = true;
  }

}
