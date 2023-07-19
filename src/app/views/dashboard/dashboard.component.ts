import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'fbank-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public selectedMenu = '';

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.menunData$.subscribe((menu) => {
      console.log(menu);
      this.selectedMenu = menu;
    });
  }
}
