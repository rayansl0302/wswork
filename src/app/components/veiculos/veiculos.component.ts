import { VeiculosService } from './../../services/veiculos.service';
import { Injectable, Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Veiculos } from 'src/app/models/veiculos.model';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss'],
})
export class VeiculosComponent implements OnInit {
  public url: string = 'http://localhost:3000/cars';
  public errorMessage!: string;
  public carsByBrand!: any[];

  @Input() veiculos!: Veiculos;

  constructor(public veiculosService: VeiculosService) {}

  ngOnInit() {
    this.veiculosService.getVeiculos().subscribe((res) => {});
  }
}
