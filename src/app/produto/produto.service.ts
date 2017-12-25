import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import  {Produto} from './produto'

@Injectable()
export class ProdutoService {

  private baseUrl = 'http://localhost:8080/produtos';  // URL to web api

  constructor(private http: HttpClient) { 
  }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  save(produto: Produto): Observable<any> {
    return  this.http.post(this.baseUrl, produto);
  }

}
