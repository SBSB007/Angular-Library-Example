import { Component, OnInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'nk-magic-string',
  template: `
  <input type="text" (input)="onSearchChange($event.target.value)">
    <div #content [hidden]="true">
      <ng-content></ng-content>
    </div>
    <div [innerHtml]="changedComponent"></div>
  `,
  styles: [
  ]
})

export class MagicStringComponent implements OnInit  {

  @ViewChild('content', {static: true}) _content:ElementRef;

  originalComponent:string;
  changedComponent:string;
  constructor() { }

  ngOnInit(): void {  
     this.changedComponent=this.originalComponent = this._content.nativeElement.textContent 
  }

  ngAfterViewInit(){
    
  }
  onSearchChange(searchValue: string): void {  
    console.log(searchValue);
  }
}
