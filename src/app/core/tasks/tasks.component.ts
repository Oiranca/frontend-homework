import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 state:string[]=['','/newtasks'];

  constructor() { }

  ngOnInit(): void {
  }

}
