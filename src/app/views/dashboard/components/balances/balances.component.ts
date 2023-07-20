import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbank-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.scss'],
})
export class BalancesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]> | any) {
    // console.log('Começou a mover: ', event.event.target.id);
    // console.log('offsetTop: ', event.event.target.offsetTop);
    // console.log('offsetLeft: ', event.event.target.offsetLeft);
  }

  dropEnd(event: CdkDragDrop<string[]> | any) {
    console.log(event);

    // Obter a posição do elemento
    const posicaoX: number = event.event.x;
    const posicaoY: number = event.event.y;

    // Exibir a posição
    console.log('Posição X: ' + posicaoX);
    console.log('Posição Y: ' + posicaoY);

    const larguraTotal: number = event.source.element.nativeElement.offsetWidth;
    const alturaTotal: number = event.source.element.nativeElement.offsetHeight;

    // Exibir o tamanho total
    console.log('Largura Total: ' + larguraTotal + 'px');
    console.log('Altura Total: ' + alturaTotal + 'px');

    const posicaoFinal = event.source.getFreeDragPosition();
    console.log('Posição final:', posicaoFinal);
  }
}
