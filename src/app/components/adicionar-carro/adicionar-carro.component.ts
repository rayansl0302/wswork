import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-carro',
  templateUrl: './adicionar-carro.component.html',
  styleUrls: ['./adicionar-carro.component.scss'],
})
export class AdicionarCarroComponent {
  carroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AdicionarCarroComponent>
  ) {
    this.carroForm = this.fb.group({
      nomeModelo: ['', Validators.required],
      cor: ['', Validators.required],
      ano: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      combustivel: [''],
    });
  }

  adicionarCarro() {
    if (this.carroForm.valid) {
      console.log(this.carroForm.value);
      this.dialogRef.close();
    }
  }

  fecharFormulario(): void {
    this.dialogRef.close();
  }
}
