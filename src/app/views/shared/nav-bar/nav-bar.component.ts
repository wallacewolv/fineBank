import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { LocalStorageService } from '../../../services/local-storage.service';

type MenuType = {
  url: string;
  name: string;
  active: boolean;
};

@Component({
  selector: 'fbank-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class NavBarComponent implements OnInit {
  public menus: Array<MenuType> = [
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
    { url: './assets/images/Change.svg', name: 'Change Layout', active: false },
  ];

  constructor(
    private dataSharingService: DataSharingService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  activeMenuOurChangeLayout(
    data: MenuType,
    activeOurChange: 'active' | 'change'
  ) {
    if (activeOurChange === 'change') {
      this.dataSharingService.updateBooleanData(true);

      this.localStorageService.setLayoutOnStorage();
      return;
    }

    this.menus.map((menu) => {
      if (menu.name === data.name) {
        menu.active = true;
        return;
      } else {
        menu.active = false;
      }
    });
  }
}
