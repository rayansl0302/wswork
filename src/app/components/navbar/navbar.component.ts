import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { VeiculosService } from '../../services/veiculos.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  filtroFormNav: FormGroup;
  veiculosObjeto: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private veiculosService: VeiculosService
  ) {
    this.filtroFormNav = this.formBuilder.group({
      nome_modelo: [''],
      diesel: [''],
      ano_2015: [''],
      ano_2014: [''],
      ano_1993: [''],
    });
    this.veiculosService.veiculos$.subscribe((res: any) => {
      this.veiculosObjeto = res;
    });

    this.filtroFormNav.controls['nome_modelo'].valueChanges.subscribe(
      (filtrotexto) => {
        let filtro: any;
        if (filtrotexto) {
          filtro = this.veiculosObjeto.filter((res: any) => {
            return res.nome_modelo
              .toLowerCase()
              .includes(filtrotexto.toLowerCase());
          });
          this.veiculosService.veiculos_subject.next(filtro);
        } else {
          this.veiculosService.veiculos_subject.next(
            this.veiculosService.veiculosOriginal
          );
        }
      }
    );
  }

  abrirAdicionarCarroModal() {
    this.modalService.openAdicionarCarroModal();
  }
}
