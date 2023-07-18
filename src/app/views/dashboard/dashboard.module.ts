import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SharedComponentModule } from '../shared/shared-component.module';
import { ExpensesBreakdownComponent } from './components/expenses-breakdown/expenses-breakdown.component';
import { GoalsComponent } from './components/goals/goals.component';
import { RecentTransactionComponent } from './components/recent-transaction/recent-transaction.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { TotalBalanceComponent } from './components/total-balance/total-balance.component';
import { UpcommingBillsComponent } from './components/upcomming-bills/upcomming-bills.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,

    ExpensesBreakdownComponent,
    GoalsComponent,
    RecentTransactionComponent,
    StatisticComponent,
    TotalBalanceComponent,
    UpcommingBillsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedComponentModule,
    FormsModule,
    MatSlideToggleModule,
    CdkDropList,
    NgFor,
    CdkDrag,
  ],
})
export class DashboardModule {}
