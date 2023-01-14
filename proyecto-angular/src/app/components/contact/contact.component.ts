import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number
  public anchuraToSlider:number
  public captions:boolean
  public autoCarrusel:boolean
  public autor:any
  
  @ViewChild('textos',{static:true}) textos;


  constructor(){
    this.captions=true 
    this.autoCarrusel=true 
    
  }
  ngOnInit(){
    // alert(document.querySelector('#texto')?.innerHTML)
    // console.log(this.textos.nativeElement.textContent);

    
  }
 /**
  * It sets the width of the slider to the width of the screen.
  */
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider

  }
  resetSlider(){
    this.anchuraToSlider=0
  }

  getAutor(event){
    // console.log(event)
    this.autor=event
    
    
  }

  

}
