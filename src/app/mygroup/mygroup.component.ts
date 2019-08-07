import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-mygroup',
  templateUrl: './mygroup.component.html',
  styleUrls: ['./mygroup.component.css']
})
export class MygroupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  split(){
    this.router.navigate(['/requestpay']);
  }
}
