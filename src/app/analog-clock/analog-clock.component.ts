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
  @ViewChild('bubble', {static: false}) bubble: ElementRef;
  @ViewChild('snoopy', {static: false}) snoopy: ElementRef;
  @ViewChild('background', {static: false}) background: ElementRef;



  private daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  private date = new Date()

  public hour: any;
  public minute: string;
  public second: string;
  public ampm: string;
  public day: string;
  public backgroundImg: string;
  public woodstockImg: string;
  public snoopyImg: string;
  public bubbleImg: string;
  public backgroundImgPos: number;

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

    this.day = this.daysOfWeek[this.date.getDay()]

    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM'


    this.hour = hours % 12;

    this.hour = this.hour ? this.hour : 12;
    //add feature for glowing hour number
    const minutes = date.getMinutes();

    this.minute = minutes < 10 ? '0' + minutes : minutes.toString()

    this.woodstockImg = minutes > 14 && minutes < 45 ? "url('../../assets/images/woodstockbubbleLeft.png')" : "url('../../assets/images/woodstockbubbleRight.png')"
    this.woodstock.nativeElement.style.backgroundImage = this.woodstockImg

    this.bubbleImg = minutes > 14 && minutes < 45 ? "url('../../assets/images/bubbleLeft.png')" : "url('../../assets/images/bubbleRight.png')"
    this.bubble.nativeElement.style.backgroundImage = this.bubbleImg

    this.snoopyImg = minutes >= 0 && minutes < 8 ? "url('../../assets/images/upright.png')" : minutes >= 8 && minutes < 15 ? "url('../../assets/images/rightsit.png')" : minutes >= 15 && minutes < 20 ? "url('../../assets/images/right.png')" : minutes >= 20 && minutes < 30 ? "url('../../assets/images/downright.png')" : minutes >=30 && minutes < 40 ? "url('../../assets/images/downleft.png')" : minutes >= 40 && minutes < 45 ? "url('../../assets/images/left.png')" : minutes >= 45 && minutes < 52 ? "url('../../assets/images/leftsit.png')" : minutes >= 52 && minutes <= 59 ? "url('../../assets/images/upleft.png')" : "url('../../assets/images/upright.png')"
    this.snoopy.nativeElement.style.backgroundImage = this.snoopyImg

    this.backgroundImg = hours >= 6 && hours < 18 ? "url('../../assets/images/daytime.jpg')" : hours >= 18 && hours < 20 ? "url('../../assets/images/sunset.jpg')" : "url('../../assets/images/nighttime.jpg')"
    this.background.nativeElement.style.backgroundImage = this.backgroundImg

    this.backgroundImgPos = minutes >= 15 && minutes < 45 ? 43 : 40
    this.snoopy.nativeElement.style.top = this.backgroundImgPos + '%'
  }
  playAudio(){
    // let audio = new Audio();
    // audio.src = "../../../assets/sounds/snoopyDance.mp3";
    // audio.load();
    // audio.play();
    // add snoopy play button since audio does not play automatically
  }
}
