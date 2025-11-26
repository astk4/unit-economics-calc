import { Component, Input } from '@angular/core';
import { BaseTable } from '../base-table/base-table';

@Component({
  selector: 'app-results-table',
  imports: [],
  templateUrl: './results-table.component.html',
  styleUrls: ['../table-component.css']
})
export class ResultsTable extends BaseTable {
  public explanations: string[] = [];

  @Input()
  set explString(value: string) {
      this.explanations = value? value.split(',') : [];
  }
}
