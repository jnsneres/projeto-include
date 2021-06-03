import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Despesa } from './model/despesa';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {
  private baseURL: string = `http://localhost:3000/despesa`;
  private colecaoDespesaAtualizada = new Subject<Despesa[]>();
  constructor(private httpClient: HttpClient) { }


 getColecaoDespesaAtualizada (){
    return this.colecaoDespesaAtualizada.asObservable();
  }

  public listDespesa(){
    this.httpClient.get<{despesas: Despesa[]}>(this.baseURL).subscribe(resultadoDespesa => {
      this.colecaoDespesaAtualizada.next(resultadoDespesa.despesas)
    });
    }

  public addDespesa(despesa: Despesa){
    this.httpClient.post<{despesas: Despesa[]}>(this.baseURL, despesa).subscribe(resultadoDespesa => {
      this.colecaoDespesaAtualizada.next(resultadoDespesa.despesas)
    });
  }

public updateDespesa(despesa: Despesa){
  this.httpClient.put<{despesas: Despesa[]}>(this.baseURL, despesa).subscribe(resultadoDespesa => {
  this.colecaoDespesaAtualizada.next(resultadoDespesa.despesas)
  });
}
}
