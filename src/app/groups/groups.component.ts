import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clicked(){
    alert('hi');
    this.router.navigate(['/mygroup']);
  }
}
