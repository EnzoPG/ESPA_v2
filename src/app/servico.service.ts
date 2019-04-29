import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable()
export class ServicoService {
  public lista:Veiculo[] = [];

  constructor() { }

  add(veiculo: Veiculo): void {
    let aux: Veiculo = {
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      valor: veiculo.valor,
      tipo: veiculo.tipo,
      ipva: veiculo.ipva
    };
    if(veiculo.tipo == 'Carro') veiculo.ipva = veiculo.valor * (0.04);
    if(veiculo.tipo == 'Caminhão') veiculo.ipva = veiculo.valor * (0.015);
    this.lista.push(veiculo);
    console.log(veiculo);
  }
}