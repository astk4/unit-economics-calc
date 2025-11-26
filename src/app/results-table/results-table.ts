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
  public results: number[] = [];

  @Input()
  set explString(value: string) {
      this.explanations = value? value.split(',') : [];
  }


  public get roundedNumbers() : string[] {
    return this.results.map(num => (Number.isInteger(num)? num : num.toFixed(3)).toString());
  }
}
