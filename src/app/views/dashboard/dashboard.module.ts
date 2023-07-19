import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { CommonModule, NgFor } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { SharedComponentModule } from '../shared/shared-component.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { BalancesComponent } from './components/balances/balances.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OverviewComponent,
    BalancesComponent,
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
