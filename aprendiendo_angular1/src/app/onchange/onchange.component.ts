import { Component, OnChanges, Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.css']
})
export class OnchangeComponent implements OnChanges {
  @Input() prop: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(``);
    
  }

}
