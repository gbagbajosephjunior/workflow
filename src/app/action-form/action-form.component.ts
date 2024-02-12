import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
  isContainerHidden = false;
  showForm = false;
  StatClick = false
  FormClick = true;

  constructor() { }

  ngOnInit(): void {
  }
  
 

  hideContainer() {
    this.isContainerHidden = true;
  }

  showFormOnClick() {
    this.isContainerHidden = true; // Hide container
    this.showForm = true; // Show form
    this.FormClick = true;
  }

 
  showFormClick(){
    this.FormClick = true;
  }
  onStatistics() {
    this.StatClick = true; // Set StatClick to true when statistics button is clicked
  }
}
