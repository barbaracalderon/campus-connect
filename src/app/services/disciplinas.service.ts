import { Injectable } from '@angular/core';

interface CursoDisciplinas {
  [key: string]: {
    [semestre: number]: string[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private disciplinas: CursoDisciplinas = {
    'Curso 1': {
      1: ['Disciplina A1', 'Disciplina A2'],
      2: ['Disciplina B1', 'Disciplina B2'],
    },
    'Curso 2': {
      1: ['Disciplina C1', 'Disciplina C2'],
      2: ['Disciplina D1', 'Disciplina D2'],
    },
    'Curso 3': {
      1: ['Disciplina E1', 'Disciplina E2'],
      2: ['Disciplina F1', 'Disciplina F2'],
    },
  };

  getDisciplinasCurso(curso: string): string[] {
    const cursoDisciplinas = this.disciplinas[curso];
    if (!cursoDisciplinas) {
      return [];
    }

    return Object.values(cursoDisciplinas).flat();
  }

  getDisciplinasCursoSemestre(curso: string, semestre: number): string[] {
    return this.disciplinas[curso]?.[semestre] || [];
  }
}
