import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cm-requestpay',
  templateUrl: './requestpay.component.html',
  styleUrls: ['./requestpay.component.css']
})
export class RequestpayComponent implements OnInit {
  words2 = [{value: 'name'}];
  
  constructor() { }

  ngOnInit() {
  }
 
  add() {
    this.words2.push({value: 'Enter Email'});
  }

}
