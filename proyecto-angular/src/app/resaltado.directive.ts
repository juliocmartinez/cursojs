import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnInit{
  
  constructor(public el:ElementRef) {
  
  }
  /**
   * The ngOnInit() function is a lifecycle hook that is called after Angular has initialized all
   * data-bound properties of a directive
   */
  ngOnInit(){
    let element = this.el.nativeElement;
    element.style.backgroundColor="lightblue"
    element.style.color="white"
    element.style.padding="20px"
    element.style.marginTop="15px"
    element.style.fontSize="30px"
    element.innerText = element.innerText.replace("contacto","about us")
    

  }
  

}
