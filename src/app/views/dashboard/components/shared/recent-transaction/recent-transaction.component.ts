import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { cargaRecentsTransactions } from 'src/assets/carga';

export type CargaRecentsTransactionsType = {
  urlImage: string;
  product: string;
  productDesc: string;
  price: string;
  dateTransaction: string;
};

@Component({
  selector: 'RecentTransaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class RecentTransactionComponent implements OnInit {
  public recentsTransactions!: Array<CargaRecentsTransactionsType>;
  constructor() {}

  ngOnInit() {
    this.recentsTransactions = cargaRecentsTransactions;
  }
}
