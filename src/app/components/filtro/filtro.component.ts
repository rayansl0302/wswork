import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VeiculosService } from './../../services/veiculos.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent {
  filtroform: FormGroup;
  veiculosObjeto: any;
  constructor(
    private formBuilder: FormBuilder,
    public veiculosService: VeiculosService
  ) {
    this.filtroform = this.formBuilder.group({
      flex: [''],
      diesel: [''],
      ano_2015: [''],
      ano_2014: [''],
      ano_1993: [''],
    });

    this.veiculosService.veiculos$.subscribe((res: any) => {
      this.veiculosObjeto = res;
    });

    this.filtroform.controls['flex'].valueChanges.subscribe((res) => {
      let filtro: any;
      if (res) {
        filtro = this.veiculosObjeto.filter((res: any) => {
          return res.combustivel == 'FLEX';
        });
        this.veiculosService.veiculos_subject.next(filtro);
      } else {
        this.veiculosService.veiculos_subject.next(
          this.veiculosService.veiculosOriginal
        );
      }
    });

    this.filtroform.controls['diesel'].valueChanges.subscribe((res) => {
      let filtro: any;
      if (res) {
        filtro = this.veiculosObjeto.filter((res: any) => {
          return res.combustivel == 'DIESEL';
        });
        this.veiculosService.veiculos_subject.next(filtro);
      } else {
        this.veiculosService.veiculos_subject.next(
          this.veiculosService.veiculosOriginal
        );
      }
    });

    this.filtroform.controls['ano_2015'].valueChanges.subscribe((res) => {
      let filtro: any;
      if (res) {
        filtro = this.veiculosObjeto.filter((res: any) => {
          return res.ano == 2015;
        });
        this.veiculosService.veiculos_subject.next(filtro);
      } else {
        this.veiculosService.veiculos_subject.next(
          this.veiculosService.veiculosOriginal
        );
      }
    });

    this.filtroform.controls['ano_2014'].valueChanges.subscribe((res) => {
      let filtro: any;
      if (res) {
        filtro = this.veiculosObjeto.filter((res: any) => {
          return res.ano == 2014;
        });
        this.veiculosService.veiculos_subject.next(filtro);
      } else {
        this.veiculosService.veiculos_subject.next(
          this.veiculosService.veiculosOriginal
        );
      }
    });

    this.filtroform.controls['ano_1993'].valueChanges.subscribe((res) => {
      let filtro: any;
      if (res) {
        filtro = this.veiculosObjeto.filter((res: any) => {
          return res.ano == 1993;
        });
        this.veiculosService.veiculos_subject.next(filtro);
      } else {
        this.veiculosService.veiculos_subject.next(
          this.veiculosService.veiculosOriginal
        );
      }
    });
  }
  filtrarveiculos() {}
}
