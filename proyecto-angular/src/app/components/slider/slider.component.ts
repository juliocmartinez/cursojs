import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare const $: any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number
  @Input('etiqueta') captions: boolean
  @Input('auto') autoCarrusel: boolean
  @Output() conseguirAutor = new EventEmitter()
  public autor: any
  constructor() {
    this.autor = {
      nombre: "Julio Martinez",
      web: "julio.martinezweb.es",
      youtube: "juliomartinezweb"
    }
  }
  ngOnInit() {
    $('#logo').click(function (e) {
      e.preventDefault()
      $('header').css('background', 'green')
        .css('height', '100px')

    });

    $('.bxslider').bxSlider({
      mode: 'fade',
      auto: this.autoCarrusel,
      autoControls: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: this.anchura
    });
  }
  lanzar(event) {
    console.log(event);
    this.conseguirAutor.emit(this.autor)
  }
}























