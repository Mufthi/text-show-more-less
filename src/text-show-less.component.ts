import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crystal-text-show-less',
  templateUrl: './text-show-less.component.html',
  styleUrls: ['./text-show-less.component.scss']
})
export class TextShowLessComponent implements OnInit {
  @Input() maxLength;
  // @Input() textData;
  @Input() data = '';
 //data = 'Mufthi Mohammed Ali'
  tempLength = 0;
  readMore=false;
  showMoreText = '+ Read More';
  showLessText = '- Read Less';
  maxLengthCloned:any;
  constructor() { }

  ngOnInit() {
    this.tempLength = this.data.length;
    this.maxLengthCloned = this.maxLength;
    this.data = this.data || '';
  }

  swap(data){
    // console.log('read more..readless fired'+ this.data.length);
    // console.log('tempLength ' + this.tempLength);
    // console.log('maxLengthCloned ' + this.maxLengthCloned);
    // console.log('maxLength' + this.maxLength);
    // this.tempLength =  this.data.length + this.maxLengthCloned;
    // this.maxLengthCloned =  this.data.length - this.maxLengthCloned;
    // this.tempLength =  this.data.length - this.maxLengthCloned;
    if (this.maxLengthCloned === this.maxLength){
      this.maxLengthCloned = this.data.length;
    }else{
      this.maxLengthCloned = this.maxLength;
    }
    // console.log('tempLength ' + this.tempLength);
    // console.log('maxLengthCloned ' + this.maxLengthCloned);
    // console.log('maxLength' + this.maxLength);
   // this.readMore = data;

  }
}
