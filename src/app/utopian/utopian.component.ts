import { Component, HostListener, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-utopian',
  templateUrl: './utopian.component.html',
  styleUrls: ['./utopian.component.scss'],
})
export class UtopianComponent implements OnInit {

  panelOpenState = false;
  position: any;
  open = false;
  constructor() {}
  public list1 = false;

  ngOnInit() {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      $('.svg').css({
        width: 80 + scroll / 5 + '%',
      });
    });
  } 

  close() {
    this.open = false; 
  }

  panel1() {
    $('.map--2').css('visibility', 'hidden');
    $('.map--1').css('visibility', 'visible');
  }
  panel2() {
    $('.map--1').css('visibility', 'hidden');
    $('.map--2').css('visibility', 'visible');
  }
  panel3() {
    $('.map--1').css('visibility', 'visible');
    $('.map--2').css('visibility', 'visible');
  }
  click() {
    $('.room1').css('fill', 'tomato');
    $('.emp').css('color', 'black');
    $('.ent').css('color', 'white');
    this.open = true;
    this.panelOpenState = true; 
  }

  click1() {
    $('.room5').css('fill', 'rebeccapurple');
    $('.room1').css('fill', 'none');
    $('.ent').css('color', 'black');
    $('.emp').css('color', 'white');
    this.open = true;
    this.panelOpenState = true;
  }

  click2() {
    $('.emp').css('color', 'black');
    $('.ent').css('color', 'white');
    this.open = true;
    this.panelOpenState = true;
  }

  click3() {
    $('.ent').css('color', 'black');
    $('.emp').css('color', 'white');
    this.open = true;
    this.panelOpenState = true;
  }
}


