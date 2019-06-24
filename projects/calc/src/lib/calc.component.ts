import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CalcService, OperationType } from './calc.service';


@Component({
  selector: 'lib-calc',
  template: `
    <p>
      Result Process :::  {{ result }}
    </p>

    <button type="button" (click)="sum()">Sum</button>
  `,
  styles: []
})
export class CalcComponent implements OnInit {

  @Input() numberOne: number;
  @Input() numberTwo: number;

  @Output() evtResult: EventEmitter<number> = new EventEmitter();
  result: number;

  constructor(private readonly calcService: CalcService) { }

  ngOnInit() {
  }

  sum() {
    this.result = this.calcService.operation(this.numberOne, this.numberTwo, OperationType.SUM);
    this.evtResult.emit(this.result);
  }

}
