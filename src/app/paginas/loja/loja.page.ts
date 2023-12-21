import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.page.html',
  styleUrls: ['./loja.page.scss'],
})
export class LojaPage {
  

  buyProduct(product: any) {
    console.log('Produto comprado:', product);
    // Adicione aqui a lógica para comprar o produto
  }
}
