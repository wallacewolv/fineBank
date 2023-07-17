import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { DashboardComponent } from './dashboard.component';
import { NgFor } from '@angular/common';
import {
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DashboardComponent],
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
