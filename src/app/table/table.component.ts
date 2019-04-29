import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private servico: ServicoService) { }

  ngOnInit() {
  }

}