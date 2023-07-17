import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbank-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class NavBarComponent implements OnInit {
  menus = [
    { url: './assets/images/Overview.svg', name: 'Overview', active: true },
    { url: './assets/images/Wallet.svg', name: 'Balances', active: false },
    {
      url: './assets/images/Transaction.svg',
      name: 'Transactions',
      active: false,
    },
    { url: './assets/images/Bill.svg', name: 'Bills', active: false },
    { url: './assets/images/Expencces.svg', name: 'Expenses', active: false },
    { url: './assets/images/Goal.svg', name: 'Goals', active: false },
    { url: './assets/images/Settings.svg', name: 'Settings', active: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
