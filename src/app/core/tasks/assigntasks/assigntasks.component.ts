import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigntasks',
  templateUrl: './assigntasks.component.html',
  styleUrls: ['./assigntasks.component.css'],
  styles: [`
    select.custom-select {
      margin: 0.5rem 0.5rem 0 0;
      width: auto;
    }
  `]
})
export class AssigntasksComponent implements OnInit {
  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';

  constructor() {
  }

  ngOnInit(): void {
  }

}
