import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receita } from './model/receita';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {
  private baseURL: string = `http://localhost:3000/receita`;
  constructor(private httpClient: HttpClient) { }

  private colecaoReceitaAtualizada = new Subject<Receita[]>();

  getColecaoReceitaAtualizada(){
    return this.colecaoReceitaAtualizada.asObservable();
  }

  public listReceita(){
    this.httpClient.get<{receitas: Receita[]}>(this.baseURL).subscribe(resultadoReceita => {
      this.colecaoReceitaAtualizada.next(resultadoReceita.receitas);
    });
  }

  public addReceita(receita : Receita){
    this.httpClient.post<{receitas: Receita[]}>(this.baseURL, receita).subscribe(resultadoReceita => {
      this.colecaoReceitaAtualizada.next(resultadoReceita.receitas);
    });
  }
}
