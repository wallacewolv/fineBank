import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { cargaExpensesBreakdown } from 'src/assets/carga';

export type CargaExpensesBreakdownType = {
  urlImage: string;
  item: string;
  amount: string;
  percentage: string;
  iconArrowUpOurDown: string;
  iconArrowRight: string;
};

@Component({
  selector: 'ExpensesBreakdown',
  templateUrl: './expenses-breakdown.component.html',
  styleUrls: ['./expenses-breakdown.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ExpensesBreakdownComponent implements OnInit {
  public expensesBreakdown!: Array<CargaExpensesBreakdownType>;
  constructor() {}

  ngOnInit() {
    this.expensesBreakdown = cargaExpensesBreakdown;
  }
}
