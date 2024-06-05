import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo3',
    },
    {
      conteudo: 'comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo2',
    },
    {
      conteudo: 'comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
