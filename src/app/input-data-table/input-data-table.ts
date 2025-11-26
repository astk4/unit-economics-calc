import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { BaseTable } from '../base-table/base-table';

@Component({
  selector: 'app-input-data-table',
  imports: [ ],
  templateUrl: './input-data-table.component.html',
  styleUrls: ['../table-component.css']
})

export class InputDataTable extends BaseTable {
  
  @ViewChildren("unit") private units!: QueryList<ElementRef>;

  getNumberInputs() {
    return this.units.map((er) => {
      let flt = parseFloat(er.nativeElement.value);
      return isNaN(flt)? 0 : flt;
    }) 
  }
}
