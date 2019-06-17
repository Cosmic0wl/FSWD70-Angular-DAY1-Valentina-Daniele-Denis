import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private heroText: string;
private heroBtnText : string;
private heroBtnUrl: string;
private heroSecondHeading: string;
private accomodationHeading: string;
private accomodationText: string;
private transpHeading: string;
private transpText: string;
private agentHeading: string;
private agentText: string;
private tripHeading: string;
private tripText: string;
  constructor() { 
  	this.heroHeading = "We are the ultimate Winter experience Provider!";
  	this.heroText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  	this.heroBtnText = "Learn More";
  	this.heroBtnUrl = "#";
  	this.heroSecondHeading = "Why We're the Best";
  	this.accomodationHeading = "Accomodation";
  	this.accomodationText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  	this.transpHeading = "Transportation";
  	this.transpText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  	this.agentHeading = "Seasoned Agents";
  	this.agentText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  	this.tripHeading = "Easy planning trip";
  	this.tripText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  }
  ngOnInit() {
  }

}
