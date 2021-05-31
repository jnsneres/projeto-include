import { Component, OnInit } from '@angular/core';
import{Receita}from './model/receita';
import{Despesa}from './model/despesa';
import{ DespesaService } from './despesa.service';

interface MotivoDespesa {
  nameDespesa: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  valorReceita: number;
  valorDespesa: number;
  
  selectedDespesa: MotivoDespesa;
  descDespesas: MotivoDespesa[];
  
  constructor(private despesaService: DespesaService){
    this.descDespesas = [
      {nameDespesa: 'Comida'},
      {nameDespesa: 'Roupa'},
      {nameDespesa: 'Gastos mensais'},
      {nameDespesa: 'Entretenimento'},
      {nameDespesa: 'Transporte'}
    ];
  }
  

receitas: Receita[] = [];
despesas: Despesa[] = [];

dados: any;


ngOnInit(){
  this.despesaService.getColecaoDespesaAtualizada().subscribe(despesas => {
    this.despesas = despesas;
    this.atualizarGrafico();
  });

  this.despesaService.list();
}

atualizarGrafico(){
  
  this.dados={
    labels:['Comida', 'Roupa', 'Gastos Mensais', 'Entretenimento', 'Transporte'],
    datasets:[
      {
        data:[1,3,4,5,6],
        backgroundColor:[
          'red',
          'green',
          'blue',
          'yellow',
          'orange',
        ]
      }
    ]
  }
}

entrar(receitaForm){
   const r: Receita={
     valor_receita: receitaForm.value.receita
   }
   this.receitas.push(r);
   receitaForm.resetForm();
 }

sair(despesaForm){
    const d: Despesa={
      valor_despesa: despesaForm.value.despesa,
      motivo: despesaForm.value.motivo.nameDespesa
    }
    this.despesas.push(d);
   despesaForm.resetForm();
 }

}
