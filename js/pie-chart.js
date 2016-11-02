/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/
!function (a, b) {
  "function" == typeof define && define.amd ? define([], function () {
    return a.EasyPieChart = b()
  }) : "object" == typeof exports ? module.exports = b() : a.EasyPieChart = b()
}(this, function () {
  var a = function (a, b) {
    var c, d = document.createElement("canvas");
    a.appendChild(d), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(d);
    var e = d.getContext("2d");
    d.width = d.height = b.size;
    var f = 1;
    window.devicePixelRatio > 1 && (f = window.devicePixelRatio, d.style.width = d.style.height = [b.size, "px"].join(""), d.width = d.height = b.size * f, e.scale(f, f)), e.translate(b.size / 2, b.size / 2), e.rotate((-0.5 + b.rotate / 180) * Math.PI);
    var g = (b.size - b.lineWidth) / 2;
    b.scaleColor && b.scaleLength && (g -= b.scaleLength + 2), Date.now = Date.now || function () {
        return +new Date
      };
    var h = function (a, b, c) {
      c = Math.min(Math.max(-1, c || 0), 1);
      var d = 0 >= c ? !0 : !1;
      e.beginPath(), e.arc(0, 0, g, 0, 2 * Math.PI * c, d), e.strokeStyle = a, e.lineWidth = b, e.stroke()
    }, i = function () {
      var a, c;
      e.lineWidth = 1, e.fillStyle = b.scaleColor, e.save();
      for (var d = 24; d > 0; --d)d % 6 === 0 ? (c = b.scaleLength, a = 0) : (c = .6 * b.scaleLength, a = b.scaleLength - c), e.fillRect(-b.size / 2 + a, 0, c, 1), e.rotate(Math.PI / 12);
      e.restore()
    }, j = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a) {
          window.setTimeout(a, 1e3 / 60)
        }
    }(), k = function () {
      b.scaleColor && i(), b.trackColor && h(b.trackColor, b.trackWidth || b.lineWidth, 1)
    };
    this.getCanvas = function () {
      return d
    }, this.getCtx = function () {
      return e
    }, this.clear = function () {
      e.clearRect(b.size / -2, b.size / -2, b.size, b.size)
    }, this.draw = function (a) {
      b.scaleColor || b.trackColor ? e.getImageData && e.putImageData ? c ? e.putImageData(c, 0, 0) : (k(), c = e.getImageData(0, 0, b.size * f, b.size * f)) : (this.clear(), k()) : this.clear(), e.lineCap = b.lineCap;
      var d;
      d = "function" == typeof b.barColor ? b.barColor(a) : b.barColor, h(d, b.lineWidth, a / 100)
    }.bind(this), this.animate = function (a, c) {
      var d = Date.now();
      b.onStart(a, c);
      var e = function () {
        var f = Math.min(Date.now() - d, b.animate.duration), g = b.easing(this, f, a, c - a, b.animate.duration);
        this.draw(g), b.onStep(a, c, g), f >= b.animate.duration ? b.onStop(a, c) : j(e)
      }.bind(this);
      j(e)
    }.bind(this)
  }, b = function (b, c) {
    var d = {
      barColor: "#ef1e25",
      trackColor: "#f9f9f9",
      scaleColor: "#dfe0e0",
      scaleLength: 5,
      lineCap: "round",
      lineWidth: 3,
      trackWidth: void 0,
      size: 110,
      rotate: 0,
      animate: {duration: 1e3, enabled: !0},
      easing: function (a, b, c, d, e) {
        return b /= e / 2, 1 > b ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
      },
      onStart: function (a, b) {
      },
      onStep: function (a, b, c) {
      },
      onStop: function (a, b) {
      }
    };
    if ("undefined" != typeof a)d.renderer = a; else {
      if ("undefined" == typeof SVGRenderer)throw new Error("Please load either the SVG- or the CanvasRenderer");
      d.renderer = SVGRenderer
    }
    var e = {}, f = 0, g = function () {
      this.el = b, this.options = e;
      for (var a in d)d.hasOwnProperty(a) && (e[a] = c && "undefined" != typeof c[a] ? c[a] : d[a], "function" == typeof e[a] && (e[a] = e[a].bind(this)));
      "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? e.easing = jQuery.easing[e.easing] : e.easing = d.easing, "number" == typeof e.animate && (e.animate = {
        duration: e.animate,
        enabled: !0
      }), "boolean" != typeof e.animate || e.animate || (e.animate = {
        duration: 1e3,
        enabled: e.animate
      }), this.renderer = new e.renderer(b, e), this.renderer.draw(f), b.dataset && b.dataset.percent ? this.update(parseFloat(b.dataset.percent)) : b.getAttribute && b.getAttribute("data-percent") && this.update(parseFloat(b.getAttribute("data-percent")))
    }.bind(this);
    this.update = function (a) {
      return a = parseFloat(a), e.animate.enabled ? this.renderer.animate(f, a) : this.renderer.draw(a), f = a, this
    }.bind(this), this.disableAnimation = function () {
      return e.animate.enabled = !1, this
    }, this.enableAnimation = function () {
      return e.animate.enabled = !0, this
    }, g()
  };
  return b
});

var module,Timer=function(a){"use strict";function b(){return"undefined"!=typeof document}function c(){return A}function d(a,b){return(a%b+b)%b}function e(a,b,c){var d,e="";for(d=0;b>d;d+=1)e+=String(c);return(e+a).slice(-e.length)}function f(){this.secondTenths=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0,this.toString=function(a,b,c){a=a||["hours","minutes","seconds"],b=b||":",c=c||2;var d,f,g=[],h="";for(f=0;c>f;f+=1)h+="0";for(f=0;f<a.length;f+=1)void 0!==this[a[f]]&&g.push(e(this[a[f]],c,"0"));return d=g.join(b)}}function g(){function a(){return ka.countdown}function e(a,b){fa[a]+=b,ga[a]+=b}function g(a){e(y,a),U("daysUpdated")}function B(b){e(x,b),fa.hours=d(fa.hours,o),(a()&&fa.hours===o-1||!a()&&0===fa.hours)&&g(b),_===x&&(ga[w]+=a()?-l:l,ga[v]+=a()?-m:m,ga[u]+=a()?-n:n),U("hoursUpdated")}function C(b){e(w,b),fa.minutes=d(fa.minutes,l),(a()&&fa.minutes===l-1||!a()&&0===fa.minutes)&&B(b),_===w&&(ga[v]+=a()?-j:j,ga[u]+=a()?-k:k),U("minutesUpdated")}function D(b){e(v,b),fa.seconds=d(fa.seconds,j),(a()&&fa.seconds===j-1||!a()&&0===fa.seconds)&&C(b),_===v&&(ga[u]+=a()?-i:i),U("secondsUpdated")}function E(b){e(u,b),fa.secondTenths=d(fa.secondTenths,i),(a()&&fa.secondTenths===i-1||!a()&&0===fa.secondTenths)&&D(b),U("secondTenthsUpdated")}function F(){clearInterval($),$=void 0,ia=!1,ja=!1}function G(){var a,b=z[_];switch(_){case y:a=g;break;case x:a=B;break;case w:a=C;break;case u:a=E;break;default:a=D}$=setInterval(function(){a(aa),ba(fa),J()&&(U("targetAchieved"),P())},b),ia=!0,ja=!1}function H(){return fa.hours>ca[s]||fa.hours===ca[s]&&(fa.minutes>ca[r]||fa.minutes===ca[r]&&fa.seconds>=ca[q])}function I(){return fa.hours<ca[s]||fa.hours===ca[s]&&(fa.minutes<ca[r]||fa.minutes===ca[r]&&fa.seconds<=ca[q])}function J(){return ca instanceof Array&&(ka.countdown&&I()||!ka.countdown&&H())}function K(){for(var a in fa)fa.hasOwnProperty(a)&&"number"==typeof fa[a]&&(fa[a]=0);for(var a in ga)ga.hasOwnProperty(a)&&"number"==typeof ga[a]&&(ga[a]=0)}function L(a){_=a&&"string"==typeof a.precision?a.precision:v,ba=a&&"function"==typeof a.callback?a.callback:function(){},aa=a&&a.countdown===!0?-1:1,ea=a&&1==a.countdown,a&&"object"==typeof a.target&&N(a.target),a&&"object"==typeof a.startValues&&O(a.startValues),ca=ca||!ea?ca:[0,0,0,0,0],ka={precision:_,callback:ba,countdown:"object"==typeof a&&1==a.countdown,target:ca,startValues:da}}function M(a){var b,c,d,e,f,g;if("object"==typeof a)if(a instanceof Array){if(5!=a.length)throw new Error("Array size not valid");g=a}else g=[a.secondTenths||0,a.seconds||0,a.minutes||0,a.hours||0,a.days||0];for(var h=0;h<a.length;h+=1)a[h]<0&&(a[h]=0);return b=g[p],c=g[q]+Math.floor(b/i),d=g[r]+Math.floor(c/j),e=g[s]+Math.floor(d/l),f=g[t]+Math.floor(e/o),g[p]=b%i,g[q]=c%j,g[r]=d%l,g[s]=e%o,g[t]=f,g}function N(a){ca=M(a)}function O(a){da=M(a),fa.secondTenths=da[p],fa.seconds=da[q],fa.minutes=da[r],fa.hours=da[s],fa.days=da[t],ga.days=fa.days,ga.hours=ga.days*o+fa.hours,ga.minutes=ga.hours*l+fa.minutes,ga.seconds=ga.minutes*j+fa.seconds,ga.secondTenths=ga.seconds*i+fa.secondTenths}function P(){F(),K(),U("stopped")}function Q(a){if(this.isRunning())throw new Error("Timer already running");this.isPaused()||L(a),J()||(G(),U("started"))}function R(){F(),ja=!0,U("paused")}function S(a,d){b()?ha.addEventListener(a,d):c()&&ha.on(a,d)}function T(a,d){b()?ha.removeEventListener(a,d):c()&&ha.removeListener(a,d)}function U(a){b()?ha.dispatchEvent(new h(a)):c()&&ha.emit(a)}function V(){return ia}function W(){return ja}function X(){return fa}function Y(){return ga}function Z(){return ka}var $,_,aa,ba,ca,da,ea,fa=new f,ga=new f,ha=b()?document.createElement("span"):c()?new A.EventEmitter:void 0,ia=!1,ja=!1,ka={};"undefined"!=typeof this&&(this.start=Q,this.pause=R,this.stop=P,this.isRunning=V,this.isPaused=W,this.getTimeValues=X,this.getTotalTimeValues=Y,this.getConfig=Z,this.addEventListener=S,this.removeEventListener=T)}var h="undefined"!=typeof window?window.CustomEvent:void 0;"undefined"!=typeof window&&"function"!=typeof h&&(h=function(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent("CustomEvent");return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c},h.prototype=window.Event.prototype,window.CustomEvent=h);var i=10,j=60,k=600,l=60,m=3600,n=36e3,o=24,p=0,q=1,r=2,s=3,t=4,u="secondTenths",v="seconds",w="minutes",x="hours",y="days",z={secondTenths:100,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},A=a&&a.exports?require("events"):void 0;return a&&a.exports?a.exports=g:"function"==typeof define&&define.amd&&define([],function(){return g}),g}(module);


var PieChartModule = (function () {
  var pieChartArray = [];
  var addHtml = function () {
    var element = '<div class="c-pie-chart" data-percent="0%">' +
      '<span class="c-pie-chart__percent"></span>' +
      '</div>';

    var parent = document.querySelectorAll('.c-pie-chart__wrapper');
    var i;
    var len;
    for (i = 0, len = parent.length; i < len; i += 1) {
      parent[i].innerHTML = element
    }
    // parent.innerHTML = element;
  };

  var updateData = function (i, element) {
    setTimeout(function() {
      element.update(62);
    }, 500);
  };

  var createPieChart = function (i, counter, element) {
    var chart = new EasyPieChart(element[i], {
      barColor: '#84C073',
      trackColor: '#E7E7E7',
      scaleLength: 0,
      size: 72,
      lineWidth: 14,
      onStep: function (from, to, currentValue) {
        counter[i].innerHTML = Math.floor(currentValue) + '%';
      }
    });

    updateData(i, chart);
  };
  var initPieChart = function () {
    addHtml();
    var counter = document.querySelectorAll('.c-pie-chart__percent');
    var element = document.querySelectorAll('.c-pie-chart');
    var i;
    var len;
    for (i = 0, len = counter.length; i < len; i += 1) {
      createPieChart(i, counter, element);
    }
  };

  return {
    initPieChart: initPieChart
  }
})();

var LinebarModule = (function () {
  var myLineChartArray = [];

  var updateData = function (element) {
    setTimeout(function() {
      element.data.datasets[0].data = [4, 2, 7, 5, 11, 11, 13];
      element.update();
    }, 500);
  };

  var initLineBar = function () {
    var ctx = document.querySelectorAll('.c-chart__canvas');
    var data = {
      labels: ['', '', '', '', '', '', ''],
      datasets: [
        {
          backgroundColor: 'rgba(255, 255, 255, 0)',
          borderColor: '#89B67B',
          pointBackgroundColor: '#ffffff',
          pointBorderColor: '#89B67B',
          borderWidth: 2,
          pointBorderWidth: 2,
          // data: [4, 2, 7, 5, 11, 11, 13],
          data: [0, 0, 0, 0, 0, 0, 0],
          lineTension: 0,
          pointRadius: 5
        }
      ]
    };

    var options = {
      responsive: false,
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            drawBorder: false,
            borderDash: [5],
            color: "rgba(0, 0, 0, 0.2)",
            zeroLineColor: "rgba(0, 0, 0, 0.2)",
            tickMarkLength: 5,
            offsetGridLines: true
          },
          ticks: {
            display: false,
          }

        }],
        yAxes: [{
          display: true,
          gridLines: {
            display: false,
          },
          scaleLabel: {
            display: false,
          },
          ticks: {
            display: false,
            max: 15,
            min: -1
          }
        }]
      },
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      spanGaps: true,
      animation: {
        duration: 2000
      }
    };
    if (myLineChartArray.length > 0) {
      var i;
      var len;
      for (i = 0, len = myLineChartArray.length; i < len; i += 1) {
        myLineChartArray[i].clear();
      }
      $('.c-line-chart__wrapper').empty();
      $('.c-line-chart__wrapper').append('<canvas class="c-chart__canvas"></canvas>');
      myLineChartArray.length = 0;
      ctx = document.querySelectorAll('.c-chart__canvas');
    }

    var i;
    var len;
    for (i = 0, len = ctx.length; i < len; i += 1) {
      var concreteCtx = ctx[i].getContext("2d");
      concreteCtx.canvas.width = 220;
      concreteCtx.canvas.height = 72;
      var myLineChart = new Chart(concreteCtx, {
        type: 'line',
        data: data,
        options: options
      });

      myLineChartArray.push(myLineChart);
      updateData(myLineChart);
    }
  };

  return {
    initLineBar: initLineBar
  }
})();

var RoundChartModule = (function () {
  var timer;
  var startAnimation = function () {
    if (!timer) {
      timer = new Timer();
      timer.start({countdown: true, startValues: {hours: 12, minutes: 2}});
      timer.addEventListener('secondsUpdated', function (e) {
        $('.c-counter__timer').html(timer.getTimeValues().toString());
      });
      timer.addEventListener('targetAchieved', function (e) {
        $('.c-counter__image').removeClass('is-rotated');
      });
      $('.c-counter__image').addClass('is-rotated');
    }
  };

  var initRoundChart = function () {
    startAnimation();
  };

  var stopAnimation = function () {
    timer.stop();
  };

  return {
    stopAnimation: stopAnimation,
    initRoundChart: initRoundChart
  }
})();

var OfferTimerModule = (function () {
  var timer;
  var startTimer = function () {
    if (!timer) {
      timer = new Timer();
      timer.start({countdown: true, startValues: {hours: 23, minutes: 12, seconds: 1}});
      timer.addEventListener('secondsUpdated', function (e) {
        $('.c-offers__value-hours').html(timer.getTimeValues().hours);
        $('.c-offers__value-minutes').html(timer.getTimeValues().minutes);
        $('.c-offers__value-seconds').html(timer.getTimeValues().seconds);
      });
    }
  };

  var initOfferTimer = function () {
    startTimer();
  };

  return {
    initOfferTimer: initOfferTimer
  }
})();

var SigmaSoftware = (function () {

  var initCharts = function () {
    PieChartModule.initPieChart();
    LinebarModule.initLineBar();
  };

  var initRoundChart = function () {
    RoundChartModule.initRoundChart();
  };

  var initOfferTimer = function () {
    OfferTimerModule.initOfferTimer();
  };

  // var stopRoundChartAnimation = function () {
  //   RoundChartModule.stopAnimation();
  //   $('.c-counter__image').removeClass('is-rotated');
  // };
  var events = function () {
    $('.c-menu__profile, .c-menu__history').on('click', initCharts);
    $('.c-menu__offer').on('click', initRoundChart);
    $('.c-menu__promotion-offer').on('click', initOfferTimer);
    // $('.nav-tabs').on('click', 'li', stopRoundChartAnimation);
  };

  var init = function () {
    events();
  };


  return {
    init: init,
    initCharts: initCharts,
    initRoundChart: initRoundChart
  }
})();

SigmaSoftware.init();

