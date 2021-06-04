import { Component, OnInit } from '@angular/core';
import{Receita}from './model/receita';
import{Despesa}from './model/despesa';
import{ DespesaService } from './despesa.service';
import{ ReceitaService } from './receita.service';

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
  
  constructor(private despesaService: DespesaService, private receitaService: ReceitaService){
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




ngOnInit(){
  this.despesaService.getColecaoDespesaAtualizada().subscribe(despesas => {
    this.despesas = despesas;
    this.atualizarGrafico();

  });
  this.receitaService.getColecaoReceitaAtualizada().subscribe(receitas => {
    this.receitas = receitas;
    this.atualizarGrafico();
  });
  this.despesaService.listDespesa();
  this.receitaService.listReceita();
}

atualizar (despesa: Despesa){
  this.despesaService.updateDespesa(despesa);
}

situacao: any;
opcoes = [
  {rotulo: "Em aberto", valor: false},
  {rotulo: "Pago", valor: true}
  ]


atualizarGrafico(){
const pagas = this.despesas.filter(d => d.situacao).length;
const emAberto = this.despesas.length - pagas;
this.situacao = {
  labels: ["Pago", "Em aberto"],
  datasets: [
    {
      data:[pagas, emAberto], 
      backgroundColor: [
      '#2196F3', 
      '#F44336', 
      ]
    }
  ]
}
}

entrar(receitaForm){
   const r: Receita={
     valor_receita: receitaForm.value.receita
   }
   this.receitaService.addReceita(r);
   receitaForm.resetForm();
 }

sair(despesaForm){
    const d: Despesa={
      valor_despesa: despesaForm.value.despesa,
      motivo: despesaForm.value.motivo.nameDespesa,
      situacao: false
    }
    this.despesaService.addDespesa(d);
   despesaForm.resetForm();
 }

}
