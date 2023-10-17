import { Component, OnInit } from '@angular/core';
import { VeiculosService } from './services/veiculos.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Veiculos } from './models/veiculos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ws-prova';
  veiculos!: Veiculos[];

  constructor(public veiculoService: VeiculosService) {
    this.veiculoService.veiculos$.subscribe((res: any) => {
      this.veiculos = res;
    });
  }

  ngOnInit() {
    this.veiculoService.getVeiculos().subscribe(
      (v: Veiculos[]) => {
        this.veiculoService.veiculos_subject.next(v);
        this.veiculoService.veiculosOriginal = v;
      },
      (error) => {
        console.error('Erro na solicitação:', error);
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Mensagem de erro:', error.error);
        }
      }
    );
  }
}
