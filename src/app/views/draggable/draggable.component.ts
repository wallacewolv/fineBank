import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbank-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss']
})
export class DraggableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dragEnabled: boolean = false;

  onDragStart(event: DragEvent) {
    // Lógica a ser executada quando o arraste começa (opcional)
    console.log('Arraste iniciado.');
  }

  toggleDragAndDrop() {
    this.dragEnabled = !this.dragEnabled;
  }

}
