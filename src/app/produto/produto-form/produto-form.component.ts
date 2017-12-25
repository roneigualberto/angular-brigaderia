import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators}  from '@angular/forms';
import {Location} from '@angular/common';

import { Produto } from '../produto';
import {ProdutoService} from '../produto.service';
import { prepareProfile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  produto: Produto;

  produtoForm: FormGroup;

  constructor(private service: ProdutoService,private location: Location) {

  }

  ngOnInit() {
    this.buildForm();
  }


  buildForm() {
    let controls = {
      'nome': new FormControl('',[Validators.required]),
      'preco': new FormControl('',[Validators.required,Validators.min(1)]),
      'descricao':  new FormControl('',[])
    };
    this.produtoForm = new FormGroup(controls);
  }

  salvar() {
    this.produto = this.preparedProduto();
    this.service.save(this.produto)
        .subscribe((res) => console.log('res', res)); 
  }

  preparedProduto(): Produto {
    const formModel = this.produtoForm.value;

    const newProd:Produto = {
      id: null,
      nome: formModel.nome as string,
      preco: formModel.preco  as number ,
      descricao: ''
    };

    return newProd;
  }

  voltar() {
    this.location.back();
  }

  get nome() { return this.produtoForm.get('nome'); }

  get preco() { return this.produtoForm.get('preco')}; 

}
