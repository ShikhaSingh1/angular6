import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-requestpay',
  templateUrl: './requestpay.component.html',
  styleUrls: ['./requestpay.component.css']
})
export class RequestpayComponent implements OnInit {
  words2 = [{value: 'shikha@gmail.com', add: true}];
  isButtonVisible:boolean = true;

  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  add(index : number) {
    this.words2.push({value: '', add:true});
    this.words2[index].add=false;
  }

  split(){
    this.router.navigate(["/gpaystatus"]);
  }
}
