import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itens: any[];
  selectedItem: any;
  @Input() brand: string;
  @Input() type: string;
  @Input() bg: string;

  constructor() {
  }

  ngOnInit() {
    this.getItens();
  }

  getItens(): void {
    this.itens = [
      { path: '/produto', description: 'Produto'},
      { path: '/cliente', description: 'Cliente' },
      { path: '/venda', description: 'Venda' }
    ];
  }

}
