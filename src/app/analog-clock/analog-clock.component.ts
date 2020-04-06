import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss']
})
export class AnalogClockComponent implements OnInit {

  @ViewChild('hrHand', {static: false}) hrHand: ElementRef;
  @ViewChild('minHand', {static: false}) minHand: ElementRef;
  @ViewChild('minValue', {static: false}) minValue: ElementRef;
  @ViewChild('secHand', {static: false}) secHand: ElementRef;
  @ViewChild('woodstock', {static: false}) woodstock: ElementRef;
  // @ViewChild('bubble', {static: false}) bubble: ElementRef;

  private daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  private date = new Date()

  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public day: string;
  public backgound: string;
  public woodstockImg: string;
  public snoopyImg: string;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateClock(date);
    }, 1000);
    this.playAudio();
  }
  updateClock(date) {
    this.secHand.nativeElement.style.transform = 'rotate(' + date.getSeconds() * 6 + 'deg)';
    this.minHand.nativeElement.style.transform = 'rotate(' + date.getMinutes() * 6 + 'deg)';
    this.minValue.nativeElement.style.transform = 'rotate(-' + date.getMinutes() * 6 + 'deg)';
    this.hrHand.nativeElement.style.transform = 'rotate(' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';

    const hours = date.getHours();
    this.ampm = hours >= 12 ? 'PM' : 'AM'
    this.backgound = hours > 6 && hours < 18 ? "url('../../assets/images/daytime.jpg')" : "url('../../assets/images/nighttime.jpg')"

    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString()
    // this.woodstockImg = minutes > 14 && minutes < 45 ? "url('../../assets/images/woodstockbubbleLeft.png')" : "url('../../assets/images/woodstockbubbleRight.png')"
    // this.woodstock.nativeElement.style.backgroundImage = this.woodstockImg
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "../../../assets/sounds/snoopyDance.mp3";
    audio.load();
    audio.play();
  }
}
