import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-table',
  imports: [],
  template: `
    <p>
      base-table works!
    </p>
  `,
  styles: ``
})
export class BaseTable {
  public colTitles: string[] = [];
  
  constructor() { }

  @Input()
  set titlesString(value: string) {
      this.colTitles = value? value.split(',') : [];
  }

  getColumsRange() {
    return Array(this.colTitles.length).fill(0);
  }
}
