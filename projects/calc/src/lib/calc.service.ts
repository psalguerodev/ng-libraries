import { Injectable } from '@angular/core';

export enum OperationType {
  SUM = '+',
  REST = '-',
  MULT = '*',
  DIV = '/'
}

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  public operation(numberOne: number, numberTwo: number, operator: OperationType): number {
    return numberOne + numberTwo;
  }


}
