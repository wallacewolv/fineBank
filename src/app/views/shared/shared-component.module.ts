import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { ExpensesBreakdownComponent } from '../dashboard/components/shared/expenses-breakdown/expenses-breakdown.component';
import { GoalsComponent } from '../dashboard/components/shared/goals/goals.component';
import { RecentTransactionComponent } from '../dashboard/components/shared/recent-transaction/recent-transaction.component';
import { StatisticComponent } from '../dashboard/components/shared/statistic/statistic.component';
import { TotalBalanceComponent } from '../dashboard/components/shared/total-balance/total-balance.component';
import { UpcommingBillsComponent } from '../dashboard/components/shared/upcomming-bills/upcomming-bills.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    NavBarComponent,
    ExpensesBreakdownComponent,
    GoalsComponent,
    RecentTransactionComponent,
    StatisticComponent,
    TotalBalanceComponent,
    UpcommingBillsComponent,
  ],
  exports: [
    HeaderComponent,
    NavBarComponent,
    ExpensesBreakdownComponent,
    GoalsComponent,
    RecentTransactionComponent,
    StatisticComponent,
    TotalBalanceComponent,
    UpcommingBillsComponent,
  ],
})
export class SharedComponentModule {}
