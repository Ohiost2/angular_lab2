import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-me',
  templateUrl: './convert-me.component.html',
  styleUrls: ['./convert-me.component.css']
})
export class ConvertMeComponent implements OnInit

{
  
  miles : number;
  kilometers : number;
 constructor() {}

// This method handles the button convert
onConvertmeM(miles: number)
// This method handles the button convert
{
  // do the convert
   
  this.kilometers = miles/0.62137;
  // This method handles the button convert
}

// This method handles the button convert
onConvertmeK(kilometers: number)
// This method handles the button convert

{
  // do the convert
 this.miles = kilometers * 0.62137;
// This method handles the button convert
   
 

}
  
  ngOnInit() {
  }

}
