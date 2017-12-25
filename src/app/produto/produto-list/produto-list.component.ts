import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[];

  constructor(private service: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.service.getProdutos()
        .subscribe((produtos) => this.produtos = produtos);
  }

}
