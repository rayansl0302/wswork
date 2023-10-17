import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarCarroComponent } from '../components/adicionar-carro/adicionar-carro.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openAdicionarCarroModal() {
    this.dialog.open(AdicionarCarroComponent, {
      width: '400px',
    });
  }
}
