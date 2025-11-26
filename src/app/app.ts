import {Component} from '@angular/core';
import { InputDataTable } from './input-data-table/input-data-table';
import { ResultsTable } from './results-table/results-table';

@Component({
  selector: 'app-root',
  imports: [InputDataTable, ResultsTable],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'default';

  onCalcRequested(event: Event) {
    console.log("button works!")
  }
}
