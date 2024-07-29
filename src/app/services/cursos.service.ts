import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos = [
    { id: 1, nome: 'Curso 1' },
    { id: 2, nome: 'Curso 2' },
    { id: 3, nome: 'Curso 3' }
  ];

  constructor() { }

  getCursos() {
    return this.cursos;
  }
}
