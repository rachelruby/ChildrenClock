import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  @ViewChild('hrHand', {static: false}) hrHand: ElementRef;
  // @ViewChild('hrValue', {static: false}) hrValue: ElementRef;
  @ViewChild('minHand', {static: false}) minHand: ElementRef;
  @ViewChild('minValue', {static: false}) minValue: ElementRef;
  @ViewChild('secHand', {static: false}) secHand: ElementRef;

  private date = new Date()

  public hour: any;
  public minute: string;
  public second: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateClock(date);
    }, 1000);
  }
  updateClock(date) {
    this.secHand.nativeElement.style.transform = 'rotate(' + date.getSeconds() * 6 + 'deg)';
    this.minHand.nativeElement.style.transform = 'rotate(' + date.getMinutes() * 6 + 'deg)';
    this.minValue.nativeElement.style.transform = 'rotate(-' + date.getMinutes() * 6 + 'deg)';
    this.hrHand.nativeElement.style.transform = 'rotate(' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
    // this.hrValue.nativeElement.style.transform = 'rotate(-' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';

    const hours = date.getHours();
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString()
  }
}
