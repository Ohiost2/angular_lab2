import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent implements OnInit {

// Declare and initalise the string
clickMessage: string = "";

  constructor() { }

// This method handles the button click
onClickme() {
  // set the message
  this.clickMessage = "You clicked the button";
}

ngOnInit() {
}
}
