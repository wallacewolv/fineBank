import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DraggableComponent } from './draggable.component';
import { DraggableRoutingModule } from './draggable-routing.module';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedComponentModule } from '../shared/shared-component.module';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    DraggableRoutingModule,
    SharedComponentModule,
    FormsModule,
    MatSlideToggleModule,
    MatCardModule,
    CdkDropList,
    NgFor,
    CdkDrag,
  ],
  declarations: [DraggableComponent],
})
export class DraggableModule {}
