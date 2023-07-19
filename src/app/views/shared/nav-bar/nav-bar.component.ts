import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DataSharingService } from 'src/app/services/data-sharing.service';

import { LocalStorageService } from '../../../services/local-storage.service';
import { SharedService } from 'src/app/services/shared.service';
import { cargaMenus } from 'src/assets/carga';

type MenuType = {
  url: string;
  name: string;
  active: boolean;
};

@Component({
  selector: 'fbank-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  imports: [CommonModule, MatTooltipModule],
  standalone: true,
})
export class NavBarComponent implements OnInit {
  public menus!: Array<MenuType>;

  constructor(
    private dataSharingService: DataSharingService,
    private localStorageService: LocalStorageService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.menus = cargaMenus;
  }

  activeMenuOurChangeLayout(
    data: MenuType,
    activeOurChange: 'active' | 'change'
  ) {
    if (activeOurChange === 'change') {
      this.dataSharingService.updateBooleanData(true);

      this.localStorageService.setDataOnStorage();
      return;
    }

    this.menus.map((menu) => {
      if (menu.name === data.name) {
        menu.active = true;
        this.sharedService.updatemenunData(menu.name);
        return;
      } else {
        menu.active = false;
      }
    });
  }
}
