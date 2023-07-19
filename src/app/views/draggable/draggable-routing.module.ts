import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraggableComponent } from './draggable.component';

const routes: Routes = [
  {
    path: '',
    component: DraggableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DraggableRoutingModule {}
