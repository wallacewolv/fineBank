import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableComponent } from './draggable.component';
import { DraggableRoutingModule } from './draggable-routing.module';
import { SharedComponentModule } from '../shared/shared-component.module';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule,
    DraggableRoutingModule,
    SharedComponentModule,
    CdkDropList,
    CdkDrag,
  ],
  declarations: [DraggableComponent]
})
export class DraggableModule { }
