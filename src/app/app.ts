import {Component, ViewChild} from '@angular/core';
import { InputDataTable } from './input-data-table/input-data-table';
import { ResultsTable } from './results-table/results-table';

@Component({
  selector: 'app-root',
  imports: [InputDataTable, ResultsTable],
  templateUrl: './app.component.html',
  styleUrls: ['./app.css'],
})
export class App {
  title = 'pr3';
  conclusion: string = "";

  @ViewChild(InputDataTable) inputChild!: InputDataTable;
  @ViewChild(ResultsTable) outputChild!: ResultsTable;

  calculateUnitEconomy(market: number, newCount: number, revenue: number, 
                      avgRetTime: number, activeCount: number, costPrice: number) {
    
    let cac = market/activeCount;
    let arpu = revenue/newCount;
    let gm = 1-costPrice/revenue;

    let ltv = arpu*gm*avgRetTime;
    let unitProfit = ltv - cac;
    let pp = cac/(arpu*gm);

    return [cac, ltv, arpu, gm, pp, unitProfit]; 
  }

  onCalcRequested(event: Event) {
    let unitNums: number[] = this.inputChild.getNumberInputs();

    if(unitNums.some(n => n <= 0)) {
      
      var errorMsg: string = "Cannot proceed because such fields are empty:";

      for(let i = 0; i<unitNums.length; i++)
      {
        if(unitNums[i]<=0) 
        {
          var crtTitle = this.inputChild.colTitles[i].replace("<br/>", '')
          if (crtTitle[0]!='\n') 
          {
            crtTitle = `\n${crtTitle}`
          }
          errorMsg = errorMsg.concat(crtTitle)          
        }
      }
      alert(errorMsg)
      return
    }

    let resultsArr = this.calculateUnitEconomy(unitNums[0], unitNums[1], unitNums[2], 
                                              unitNums[3], unitNums[4], unitNums[5])
    this.outputChild.results = resultsArr;
    
    let profit: boolean = resultsArr[1] > resultsArr[0];
    this.conclusion = "Conclusion: " + (profit? "profit!" : "model is unprofitable :(")

  }
}
