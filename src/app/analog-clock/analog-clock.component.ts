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
  public glowHour: string;

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

    this.woodstockImg = minutes > 13 && minutes < 44 ? "woodstock1" : "woodstock2"
    this.woodstock.nativeElement.className = this.woodstockImg

    // this.bubbleImg = minutes > 14 && minutes < 45 ? "url('../../assets/images/bubbleLeft.png')" : "url('../../assets/images/bubbleRight.png')"
    // this.bubble.nativeElement.style.backgroundImage = this.bubbleImg

    this.snoopyImg = minutes >= 0 && minutes < 8 ? 'snoopy1' : minutes >= 8 && minutes < 15 ? 'snoopy2' : minutes >= 15 && minutes < 20 ? 'snoopy3' : minutes >= 20 && minutes < 30 ? 'snoopy4' : minutes >=30 && minutes < 40 ? 'snoopy5' : minutes >= 40 && minutes < 45 ? 'snoopy6' : minutes >= 45 && minutes < 52 ? 'snoopy7' : minutes >= 52 && minutes <= 59 ? 'snoopy8' : 'snoopy1'
    this.snoopy.nativeElement.className = this.snoopyImg

    this.backgroundImg = hours >= 6 && hours < 18 ? "kids-clock1" : hours >= 18 && hours < 20 ? "kids-clock2" : "kids-clock3"
    this.background.nativeElement.className = this.backgroundImg

    // this.backgroundImgPos = minutes >= 15 && minutes < 45 ? 43 : 40
    // this.snoopy.nativeElement.style.top = this.backgroundImgPos + '%'

    // this.glowHour = "num num" + this.hour.toString()
    // this.`${glowHour}`.nativeElement.style
  }
  playAudio(){
    // let audio = new Audio();
    // audio.src = "../../../assets/sounds/snoopyDance.mp3";
    // audio.load();
    // audio.play();
    // add snoopy play button since audio does not play automatically
  }
}
