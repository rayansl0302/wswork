import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Veiculos } from '../models/veiculos.model';

@Injectable({
  providedIn: 'root',
})
export class VeiculosService {
  public url: string = 'http://localhost:3000/cars';
  veiculosOriginal: any;

  public veiculos_subject: Subject<Veiculos[]> = new Subject<Veiculos[]>();
  get veiculos$(): any {
    return this.veiculos_subject;
  }
  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
