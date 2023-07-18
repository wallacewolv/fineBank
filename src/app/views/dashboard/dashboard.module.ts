import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { DashboardComponent } from './dashboard.component';
import { NgFor } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { TotalBalanceComponent } from './components/total-balance/total-balance.component';
import { UpcommingBillsComponent } from './components/upcomming-bills/upcomming-bills.component';
import { GoalsComponent } from './components/goals/goals.component';
import { ExpensesBreakdownComponent } from './components/expenses-breakdown/expenses-breakdown.component';
import { RecentTransactionComponent } from './components/recent-transaction/recent-transaction.component';
import { StatisticComponent } from './components/statistic/statistic.component';

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
    CdkDropList,
    NgFor,
    CdkDrag,
  ],
})
export class DashboardModule {}
