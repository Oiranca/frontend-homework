import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  state: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.state=true;
  }


}
