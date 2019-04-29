import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TableComponent } from './table/table.component';
import { ServicoService } from './servico.service';
import { NumeroDirective } from './numero.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormularioComponent, TableComponent, NumeroDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService]
})
export class AppModule { }
