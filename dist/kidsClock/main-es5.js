function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/analog-clock/analog-clock.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/analog-clock/analog-clock.component.ts ***!
    \********************************************************/

  /*! exports provided: AnalogClockComponent */

  /***/
  function srcAppAnalogClockAnalogClockComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalogClockComponent", function () {
      return AnalogClockComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["hrHand"];
    var _c1 = ["minHand"];
    var _c2 = ["minValue"];
    var _c3 = ["secHand"];
    var _c4 = ["woodstock"];
    var _c5 = ["bubble"];
    var _c6 = ["snoopy"];
    var _c7 = ["background"];

    var AnalogClockComponent = /*#__PURE__*/function () {
      function AnalogClockComponent() {
        _classCallCheck(this, AnalogClockComponent);

        this.daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.date = new Date();
      }

      _createClass(AnalogClockComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setInterval(function () {
            var date = new Date();

            _this.updateClock(date);
          }, 1000);
          this.playAudio();
        }
      }, {
        key: "updateClock",
        value: function updateClock(date) {
          this.secHand.nativeElement.style.transform = 'rotate(' + date.getSeconds() * 6 + 'deg)';
          this.minHand.nativeElement.style.transform = 'rotate(' + date.getMinutes() * 6 + 'deg)';
          this.minValue.nativeElement.style.transform = 'rotate(-' + date.getMinutes() * 6 + 'deg)';
          this.hrHand.nativeElement.style.transform = 'rotate(' + (date.getHours() * 30 + date.getMinutes() * 0.5) + 'deg)';
          this.day = this.daysOfWeek[this.date.getDay()];
          var hours = date.getHours();
          this.ampm = hours >= 12 ? 'PM' : 'AM';
          this.hour = hours % 12;
          this.hour = this.hour ? this.hour : 12; //add feature for glowing hour number

          var minutes = date.getMinutes();
          this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
          this.woodstockImg = minutes > 13 && minutes < 44 ? "url('../../assets/images/woodstockbubbleLeft.png')" : "url('../../assets/images/woodstockbubbleRight.png')";
          this.woodstock.nativeElement.style.backgroundImage = this.woodstockImg;
          this.bubbleImg = minutes > 14 && minutes < 45 ? "url('../../assets/images/bubbleLeft.png')" : "url('../../assets/images/bubbleRight.png')";
          this.bubble.nativeElement.style.backgroundImage = this.bubbleImg;
          this.snoopyImg = minutes >= 0 && minutes < 8 ? "url('../../assets/images/upright.png')" : minutes >= 8 && minutes < 15 ? "url('../../assets/images/rightsit.png')" : minutes >= 15 && minutes < 20 ? "url('../../assets/images/right.png')" : minutes >= 20 && minutes < 30 ? "url('../../assets/images/downright.png')" : minutes >= 30 && minutes < 40 ? "url('../../assets/images/downleft.png')" : minutes >= 40 && minutes < 45 ? "url('../../assets/images/left.png')" : minutes >= 45 && minutes < 52 ? "url('../../assets/images/leftsit.png')" : minutes >= 52 && minutes <= 59 ? "url('../../assets/images/upleft.png')" : "url('../../assets/images/upright.png')";
          this.snoopy.nativeElement.style.backgroundImage = this.snoopyImg;
          this.backgroundImg = hours >= 6 && hours < 18 ? "url('../../assets/images/daytime.jpg')" : hours >= 18 && hours < 20 ? "url('../../assets/images/sunset.jpg')" : "url('../../assets/images/nighttime.jpg')";
          this.background.nativeElement.style.backgroundImage = this.backgroundImg;
          this.backgroundImgPos = minutes >= 15 && minutes < 45 ? 43 : 40;
          this.snoopy.nativeElement.style.top = this.backgroundImgPos + '%'; // this.glowHour = "num num" + this.hour.toString()
          // this.`${glowHour}`.nativeElement.style
        }
      }, {
        key: "playAudio",
        value: function playAudio() {// let audio = new Audio();
          // audio.src = "../../../assets/sounds/snoopyDance.mp3";
          // audio.load();
          // audio.play();
          // add snoopy play button since audio does not play automatically
        }
      }]);

      return AnalogClockComponent;
    }();

    AnalogClockComponent.ɵfac = function AnalogClockComponent_Factory(t) {
      return new (t || AnalogClockComponent)();
    };

    AnalogClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnalogClockComponent,
      selectors: [["app-analog-clock"]],
      viewQuery: function AnalogClockComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hrHand = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minHand = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minValue = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secHand = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.woodstock = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bubble = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.snoopy = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.background = _t.first);
        }
      },
      decls: 63,
      vars: 3,
      consts: [[1, "header"], [1, "rainbow"], [1, "kids-clock"], ["background", ""], [1, "clock"], [1, "num", "num1"], [1, "num", "num2"], [1, "num", "num3"], [1, "num", "num4"], [1, "num", "num5"], [1, "num", "num6"], [1, "num", "num7"], [1, "num", "num8"], [1, "num", "num9"], [1, "num", "num10"], [1, "num", "num11"], [1, "num", "num12"], [1, "day"], [1, "ampm"], [1, "snoopy"], ["snoopy", ""], [1, "hr-hand"], ["hrHand", ""], [1, "min-hand"], ["minHand", ""], ["src", "../../assets/images/linesR.png", "id", "lines"], [1, "min-value"], ["minValue", ""], [1, "woodstock"], ["woodstock", ""], [1, "minutes"], ["bubble", ""], [1, "sec-hand"], ["secHand", ""]],
      template: function AnalogClockComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to Snoopy's Clock!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.day);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ampm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.minute);
        }
      },
      styles: ["@import url(//db.onlinewebfonts.com/c/2858f88cb71b6ac1122a944e220d9940?family=DK+Cool+Crayon);\n.header[_ngcontent-%COMP%] {\n  width: 99.5vw;\n  display: flex;\n  justify-content: center;\n  background-image: url('snoopy_banner.png');\n  background-position: center;\n  background-size: contain;\n  border: solid;\n  border-color: black;\n}\nh1[_ngcontent-%COMP%] {\n  color: white;\n  text-shadow: 4px 4px 5px black;\n  font-weight: bold;\n  font-size: 40px;\n}\n.rainbow[_ngcontent-%COMP%] {\n  font-size: 3.5em;\n  font-family: \"DK Cool Crayon\";\n  text-shadow: 3px 3px 4px black;\n  text-align: center;\n}\nh2[_ngcontent-%COMP%] {\n  color: black;\n  text-shadow: 4px 4px 5px red;\n  font-weight: bold;\n  font-size: 30px;\n}\n.kids-clock[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  background-image: url('daytime.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.ampm[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  position: absolute;\n  top: 13%;\n  font-family: \"DK Cool Crayon\";\n  color: #FFCC33;\n}\n.day[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 2em;\n  position: center;\n  top: 55%;\n  font-family: \"DK Cool Crayon\";\n  color: #FFCC33;\n}\n.clock[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  border: 20px solid black;\n  margin: 40px;\n  font-size: 25px;\n  box-shadow: inset 20px 20px 30px rgba(0, 0, 0, 0.1), 0 20px 20px rgba(0, 0, 0, 0.2), 0 0 0 4px white;\n  background-image: url('snoopyhouse.png');\n  background-size: 55% 55%;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  top: 10%;\n}\n.snoopy[_ngcontent-%COMP%] {\n  width: 4.5em;\n  height: 4.5em;\n  background-image: url('rightsit.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  position: absolute;\n  top: 43%;\n  z-index: 11;\n}\n.clock[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  background: #848484;\n  border: 2px solid #fff;\n  z-index: 10;\n  border-radius: 50%;\n}\n.sec-hand[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 50%;\n  background: #ff44ff;\n  transform-origin: 50% 80%;\n  position: absolute;\n  top: 10%;\n  left: 50%;\n  border-radius: 100% 100% 0 0;\n}\n.min-hand[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 43%;\n  background: #c732a7;\n  position: absolute;\n  top: 15.5%;\n  transform-origin: 50% 80%;\n  left: calc(50% - 1px);\n  border-radius: 100% 100% 0 0;\n}\n.min-value[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  top: 5%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.minutes[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  font-size: 0.7em;\n  font-family: \"DK Cool Crayon\";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-image: url('bubbleLeft.png');\n  background-size: contain;\n  background-position: top;\n  background-repeat: no-repeat;\n  z-index: 6;\n}\n#lines[_ngcontent-%COMP%] {\n  width: 3em;\n  height: 7em;\n  position: absolute;\n  transform: rotate(-4deg);\n  transform-origin: 50% 100%;\n  top: 10%;\n}\n.woodstock[_ngcontent-%COMP%] {\n  width: 3em;\n  height: 3em;\n  position: absolute;\n  transform: rotate(6deg);\n  transform-origin: 10% 15%;\n  background-image: url('woodstockbubbleLeft.png');\n  background-size: contain;\n  background-position: top;\n  background-repeat: no-repeat;\n}\n.hr-hand[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 32%;\n  background: #100761;\n  position: absolute;\n  transform-origin: 50% 80%;\n  top: 24.5%;\n  border-radius: 100% 100% 0 0;\n}\n.hr-value[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  width: 120px;\n  height: 120px;\n  position: absolute;\n  bottom: 2%;\n  align-self: center;\n  transform: rotate(-80deg);\n  transform-origin: 50% 100%;\n  text-align: center;\n  left: -80%;\n}\n.day[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  top: 90%;\n}\n.hours[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 50%;\n}\n#pursearm[_ngcontent-%COMP%] {\n  width: 2em;\n  height: 4.5em;\n  transform-origin: 0.75cm;\n  position: absolute;\n  bottom: 3%;\n  transform: rotate(5deg);\n}\n.num[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  left: calc(50% - 0.5em);\n  font-size: 1.5em;\n}\n.num[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 1em;\n  line-height: 2em;\n  color: white;\n  text-align: center;\n  vertical-align: middle;\n  font-family: \"DK Cool Crayon\";\n  text-shadow: 3px 3px 4px #ff002b;\n}\n.num1[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n}\n.num1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-30deg);\n}\n.num2[_ngcontent-%COMP%] {\n  transform: rotate(60deg);\n}\n.num2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-60deg);\n}\n.num3[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.num3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.num4[_ngcontent-%COMP%] {\n  transform: rotate(120deg);\n}\n.num4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-120deg);\n}\n.num5[_ngcontent-%COMP%] {\n  transform: rotate(150deg);\n}\n.num5[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-150deg);\n}\n.num6[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.num6[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n}\n.num7[_ngcontent-%COMP%] {\n  transform: rotate(210deg);\n}\n.num7[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-210deg);\n}\n.num8[_ngcontent-%COMP%] {\n  transform: rotate(240deg);\n}\n.num8[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-240deg);\n}\n.num9[_ngcontent-%COMP%] {\n  transform: rotate(270deg);\n}\n.num9[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-270deg);\n}\n.num10[_ngcontent-%COMP%] {\n  transform: rotate(300deg);\n}\n.num10[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-300deg);\n}\n.num11[_ngcontent-%COMP%] {\n  transform: rotate(330deg);\n}\n.num11[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(-330deg);\n}\n.num12[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.num12[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n@font-face {\n  font-family: \"DK Cool Crayon\";\n  src: url(\"//db.onlinewebfonts.com/t/2858f88cb71b6ac1122a944e220d9940.eot\");\n  src: url(\"//db.onlinewebfonts.com/t/2858f88cb71b6ac1122a944e220d9940.eot?#iefix\") format(\"embedded-opentype\"), url(\"//db.onlinewebfonts.com/t/2858f88cb71b6ac1122a944e220d9940.woff2\") format(\"woff2\"), url(\"//db.onlinewebfonts.com/t/2858f88cb71b6ac1122a944e220d9940.woff\") format(\"woff\"), url(\"//db.onlinewebfonts.com/t/2858f88cb71b6ac1122a944e220d9940.ttf\") format(\"truetype\"), url(\"//db.onlinewebfonts.com/t/2858f88cb71b6ac1122a944e220d9940.svg#DK Cool Crayon\") format(\"svg\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3JhY2hlbC9TdGFja2F0aG9uL0NoaWxkcmVuQ2xvY2svc3JjL2FwcC9hbmFsb2ctY2xvY2svYW5hbG9nLWNsb2NrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbmFsb2ctY2xvY2svYW5hbG9nLWNsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1XUSw2RkFBQTtBQW5XUjtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNFRjtBRENBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUY7QURBQTtFQUVFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDRUY7QURDQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0VGO0FEQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFRjtBRENBO0VBR0UsVUFBQTtFQUNBLFdBQUE7RUFLQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNKRjtBRE9BO0VBR0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNORjtBRFNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0dBQUE7RUFHQSx3Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLFFBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtF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QTtFQUNFLHVCQUFBO0FDbkJGO0FEc0JBO0VBQ0UsdUJBQUE7QUNuQkY7QUQyQkE7RUFBWSw2QkFBQTtFQUErQiwwRUFBQTtFQUE0RSwyZEFBQTtBQ3JCdkgiLCJmaWxlIjoic3JjL2FwcC9hbmFsb2ctY2xvY2svYW5hbG9nLWNsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIHdpZHRoOiA5OS41dnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc25vb3B5X2Jhbm5lci5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJvcmRlcjogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG59XG5cbmgxIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA1cHggYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG59XG4ucmFpbmJvdyB7XG4gIC8vIHRleHQtYWxpZ246IGJvdHRvbTtcbiAgZm9udC1zaXplOiAzLjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiREsgQ29vbCBDcmF5b25cIjtcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggNHB4IGJsYWNrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmgyIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LXNoYWRvdzogNHB4IDRweCA1cHggcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ua2lkcy1jbG9jayB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGF5dGltZS5qcGcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYW1wbSB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzLzQucG5nJyk7XG4gIC8vIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgLy8gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLy8gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMlO1xuICBmb250LWZhbWlseTogXCJESyBDb29sIENyYXlvblwiO1xuICBjb2xvcjogI0ZGQ0MzMztcbn1cblxuLmRheSB7XG4gIC8vIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgdG9wOiA1NSU7XG4gIGZvbnQtZmFtaWx5OiBcIkRLIENvb2wgQ3JheW9uXCI7XG4gIGNvbG9yOiAjRkZDQzMzO1xufVxuXG4uY2xvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAyMHB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbiAgbWFyZ2luOiA0MHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDIwcHggMjBweCAzMHB4IHJnYmEoMCwwLDAsMC4xKSxcbiAgICAgICAgICAgICAgICAgICAgMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuICAgICAgICAgICAgICAgICAgICAwIDAgMCA0cHggcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL3Nub29weWhvdXNlLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDU1JSA1NSU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIHRvcDogMTAlO1xufVxuXG4uc25vb3B5IHtcbiAgd2lkdGg6IDQuNWVtO1xuICBoZWlnaHQ6IDQuNWVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmlnaHRzaXQucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQzJTtcbiAgei1pbmRleDogMTE7XG59XG5cbi5jbG9jazo6YmVmb3JlXG57XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM4NDg0ODQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIHotaW5kZXg6IDEwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zZWMtaGFuZCB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogNTAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA2OCwgMjU1KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlIDEwMCUgMCAwIDtcbiAgLy8gei1pbmRleDogNjtcbn1cblxuLm1pbi1oYW5kIHtcbiAgd2lkdGg6IDRweDtcbiAgaGVpZ2h0OiA0MyU7XG4gIGJhY2tncm91bmQ6IHJnYigxOTksIDUwLCAxNjcpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUuNSU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA4MCU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMXB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAxMDAlIDAgMCA7XG4gIC8vbWF5YmUgc2hhZG93P1xufVxuLm1pbi12YWx1ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5taW51dGVzIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuN2VtO1xuICBmb250LWZhbWlseTogXCJESyBDb29sIENyYXlvblwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2J1YmJsZUxlZnQucG5nJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiA2O1xufVxuXG4jbGluZXMge1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDdlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvLyB6LWluZGV4OiA0O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0b3A6IDEwJTtcbn1cblxuLndvb2RzdG9jayB7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgMTUlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvd29vZHN0b2NrYnViYmxlTGVmdC5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC8vIHJpZ2h0OiAwJTtcbiAgLy8gbGVmdDogNDAlO1xufVxuXG4uaHItaGFuZCB7XG5cbiAgd2lkdGg6IDlweDtcbiAgaGVpZ2h0OiAzMiU7XG4gIGJhY2tncm91bmQ6ICMxMDA3NjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDgwJTtcbiAgdG9wOiAyNC41JTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAxMDAlIDAgMCA7XG59XG5cbi5oci12YWx1ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMiU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTgwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogLTgwJTtcbn1cblxuLmRheSB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgdG9wOiA5MCU7XG4gIC8vIHotaW5kZXg6IDM7XG4gIC8vIHRyYW5zZm9ybTogcm90YXRlKC04MGRlZyk7XG4gIC8vIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbn1cblxuLmhvdXJzIHtcbiAgLy8gei1pbmRleDogODtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuI3B1cnNlYXJtIHtcbiAgd2lkdGg6IDJlbTtcbiAgaGVpZ2h0OiA0LjVlbTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogLjc1Y207XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG59XG5cbi5udW0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAwLjVlbSk7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5udW0gZGl2IHtcbiAgd2lkdGg6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtZmFtaWx5OiBcIkRLIENvb2wgQ3JheW9uXCI7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCByZ2IoMjU1LCAwLCA0Myk7XG59XG5cbi5udW0xIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xufVxuXG4ubnVtMSBkaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpO1xufVxuXG4ubnVtMiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbn1cblxuLm51bTIgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcbn1cblxuLm51bTMge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5udW0zIGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5udW00IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbn1cblxuLm51bTQgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEyMGRlZyk7XG59XG5cbi5udW01IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcbn1cblxuLm51bTUgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE1MGRlZyk7XG59XG5cbi5udW02IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLm51bTYgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG5cbi5udW03IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbn1cblxuLm51bTcgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTIxMGRlZyk7XG59XG5cbi5udW04IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcbn1cblxuLm51bTggZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI0MGRlZyk7XG59XG5cbi5udW05IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLm51bTkgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTI3MGRlZyk7XG59XG5cbi5udW0xMCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG59XG5cbi5udW0xMCBkaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzAwZGVnKTtcbn1cblxuLm51bTExIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbn1cblxuLm51bTExIGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0zMzBkZWcpO1xufVxuXG4ubnVtMTIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuLm51bTEyIGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0wZGVnKTtcbn1cblxuLm1hcCB7XG5cbn1cblxuQGltcG9ydCB1cmwoLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vYy8yODU4Zjg4Y2I3MWI2YWMxMTIyYTk0NGUyMjBkOTk0MD9mYW1pbHk9REsrQ29vbCtDcmF5b24pO1xuQGZvbnQtZmFjZSB7Zm9udC1mYW1pbHk6IFwiREsgQ29vbCBDcmF5b25cIjsgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzI4NThmODhjYjcxYjZhYzExMjJhOTQ0ZTIyMGQ5OTQwLmVvdFwiKTsgc3JjOiB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzI4NThmODhjYjcxYjZhYzExMjJhOTQ0ZTIyMGQ5OTQwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMjg1OGY4OGNiNzFiNmFjMTEyMmE5NDRlMjIwZDk5NDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMjg1OGY4OGNiNzFiNmFjMTEyMmE5NDRlMjIwZDk5NDAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzI4NThmODhjYjcxYjZhYzExMjJhOTQ0ZTIyMGQ5OTQwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8yODU4Zjg4Y2I3MWI2YWMxMTIyYTk0NGUyMjBkOTk0MC5zdmcjREsgQ29vbCBDcmF5b25cIikgZm9ybWF0KFwic3ZnXCIpOyB9XG4iLCJAaW1wb3J0IHVybCgvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS9jLzI4NThmODhjYjcxYjZhYzExMjJhOTQ0ZTIyMGQ5OTQwP2ZhbWlseT1ESytDb29sK0NyYXlvbik7XG4uaGVhZGVyIHtcbiAgd2lkdGg6IDk5LjV2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvc25vb3B5X2Jhbm5lci5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBib3JkZXI6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xufVxuXG5oMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNXB4IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucmFpbmJvdyB7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIkRLIENvb2wgQ3JheW9uXCI7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oMiB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNXB4IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmtpZHMtY2xvY2sge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kYXl0aW1lLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYW1wbSB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTMlO1xuICBmb250LWZhbWlseTogXCJESyBDb29sIENyYXlvblwiO1xuICBjb2xvcjogI0ZGQ0MzMztcbn1cblxuLmRheSB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogMmVtO1xuICBwb3NpdGlvbjogY2VudGVyO1xuICB0b3A6IDU1JTtcbiAgZm9udC1mYW1pbHk6IFwiREsgQ29vbCBDcmF5b25cIjtcbiAgY29sb3I6ICNGRkNDMzM7XG59XG5cbi5jbG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDIwcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbjogNDBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3gtc2hhZG93OiBpbnNldCAyMHB4IDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDAgNHB4IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3Nub29weWhvdXNlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA1NSUgNTUlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICB0b3A6IDEwJTtcbn1cblxuLnNub29weSB7XG4gIHdpZHRoOiA0LjVlbTtcbiAgaGVpZ2h0OiA0LjVlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9yaWdodHNpdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQzJTtcbiAgei1pbmRleDogMTE7XG59XG5cbi5jbG9jazo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjODQ4NDg0O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICB6LWluZGV4OiAxMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2VjLWhhbmQge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmNDRmZjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbiAgbGVmdDogNTAlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlIDEwMCUgMCAwO1xufVxuXG4ubWluLWhhbmQge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDQzJTtcbiAgYmFja2dyb3VuZDogI2M3MzJhNztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1LjUlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgODAlO1xuICBsZWZ0OiBjYWxjKDUwJSAtIDFweCk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCUgMTAwJSAwIDA7XG59XG5cbi5taW4tdmFsdWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgdG9wOiA1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWludXRlcyB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjdlbTtcbiAgZm9udC1mYW1pbHk6IFwiREsgQ29vbCBDcmF5b25cIjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYnViYmxlTGVmdC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB6LWluZGV4OiA2O1xufVxuXG4jbGluZXMge1xuICB3aWR0aDogM2VtO1xuICBoZWlnaHQ6IDdlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0b3A6IDEwJTtcbn1cblxuLndvb2RzdG9jayB7XG4gIHdpZHRoOiAzZW07XG4gIGhlaWdodDogM2VtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgMTUlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3dvb2RzdG9ja2J1YmJsZUxlZnQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmhyLWhhbmQge1xuICB3aWR0aDogOXB4O1xuICBoZWlnaHQ6IDMyJTtcbiAgYmFja2dyb3VuZDogIzEwMDc2MTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgODAlO1xuICB0b3A6IDI0LjUlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlIDEwMCUgMCAwO1xufVxuXG4uaHItdmFsdWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogcm90YXRlKC04MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxlZnQ6IC04MCU7XG59XG5cbi5kYXkge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIHRvcDogOTAlO1xufVxuXG4uaG91cnMge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jcHVyc2Vhcm0ge1xuICB3aWR0aDogMmVtO1xuICBoZWlnaHQ6IDQuNWVtO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwLjc1Y207XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAzJTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XG59XG5cbi5udW0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAwLjVlbSk7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi5udW0gZGl2IHtcbiAgd2lkdGg6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtZmFtaWx5OiBcIkRLIENvb2wgQ3JheW9uXCI7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDRweCAjZmYwMDJiO1xufVxuXG4ubnVtMSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbn1cblxuLm51bTEgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTtcbn1cblxuLm51bTIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG59XG5cbi5udW0yIGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC02MGRlZyk7XG59XG5cbi5udW0zIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ubnVtMyBkaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xufVxuXG4ubnVtNCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG59XG5cbi5udW00IGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMjBkZWcpO1xufVxuXG4ubnVtNSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG59XG5cbi5udW01IGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xNTBkZWcpO1xufVxuXG4ubnVtNiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5udW02IGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuXG4ubnVtNyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG59XG5cbi5udW03IGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yMTBkZWcpO1xufVxuXG4ubnVtOCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG59XG5cbi5udW04IGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yNDBkZWcpO1xufVxuXG4ubnVtOSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi5udW05IGRpdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0yNzBkZWcpO1xufVxuXG4ubnVtMTAge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xufVxuXG4ubnVtMTAgZGl2IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTMwMGRlZyk7XG59XG5cbi5udW0xMSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG59XG5cbi5udW0xMSBkaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzMwZGVnKTtcbn1cblxuLm51bTEyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG5cbi5udW0xMiBkaXYge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkRLIENvb2wgQ3JheW9uXCI7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8yODU4Zjg4Y2I3MWI2YWMxMTIyYTk0NGUyMjBkOTk0MC5lb3RcIik7XG4gIHNyYzogdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8yODU4Zjg4Y2I3MWI2YWMxMTIyYTk0NGUyMjBkOTk0MC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzI4NThmODhjYjcxYjZhYzExMjJhOTQ0ZTIyMGQ5OTQwLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvL2RiLm9ubGluZXdlYmZvbnRzLmNvbS90LzI4NThmODhjYjcxYjZhYzExMjJhOTQ0ZTIyMGQ5OTQwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLy9kYi5vbmxpbmV3ZWJmb250cy5jb20vdC8yODU4Zjg4Y2I3MWI2YWMxMTIyYTk0NGUyMjBkOTk0MC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi8vZGIub25saW5ld2ViZm9udHMuY29tL3QvMjg1OGY4OGNiNzFiNmFjMTEyMmE5NDRlMjIwZDk5NDAuc3ZnI0RLIENvb2wgQ3JheW9uXCIpIGZvcm1hdChcInN2Z1wiKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalogClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-analog-clock',
          templateUrl: './analog-clock.component.html',
          styleUrls: ['./analog-clock.component.scss']
        }]
      }], function () {
        return [];
      }, {
        hrHand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['hrHand', {
            "static": false
          }]
        }],
        minHand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['minHand', {
            "static": false
          }]
        }],
        minValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['minValue', {
            "static": false
          }]
        }],
        secHand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['secHand', {
            "static": false
          }]
        }],
        woodstock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['woodstock', {
            "static": false
          }]
        }],
        bubble: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['bubble', {
            "static": false
          }]
        }],
        snoopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['snoopy', {
            "static": false
          }]
        }],
        background: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['background', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./analog-clock/analog-clock.component */
    "./src/app/analog-clock/analog-clock.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'kidsClock';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-analog-clock");
        }
      },
      directives: [_analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_1__["AnalogClockComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./analog-clock/analog-clock.component */
    "./src/app/analog-clock/analog-clock.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_4__["AnalogClockComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _analog_clock_analog_clock_component__WEBPACK_IMPORTED_MODULE_4__["AnalogClockComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/rachel/Stackathon/ChildrenClock/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map