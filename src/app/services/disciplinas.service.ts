import { Injectable } from '@angular/core';

interface Disciplina {
  nome: string;
  semestre: number;
}

interface CursoDisciplinas {
  [key: string]: {
    [semestre: number]: Disciplina[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private disciplinas: CursoDisciplinas = {
    'Curso 1': {
      1: [
        { nome: 'Disciplina A1', semestre: 1 },
        { nome: 'Disciplina A2', semestre: 1 },
      ],
      2: [
        { nome: 'Disciplina B1', semestre: 2 },
        { nome: 'Disciplina B2', semestre: 2 },
      ],
    },
    'Curso 2': {
      1: [
        { nome: 'Disciplina C1', semestre: 1 },
        { nome: 'Disciplina C2', semestre: 1 },
      ],
      2: [
        { nome: 'Disciplina D1', semestre: 2 },
        { nome: 'Disciplina D2', semestre: 2 },
      ],
    },
    'Curso 3': {
      1: [
        { nome: 'Disciplina E1', semestre: 1 },
        { nome: 'Disciplina E2', semestre: 1 },
      ],
      2: [
        { nome: 'Disciplina F1', semestre: 2 },
        { nome: 'Disciplina F2', semestre: 2 },
      ],
    },
  };

  getDisciplinasCurso(curso: string): Disciplina[] {
    const cursoDisciplinas = this.disciplinas[curso];
    if (!cursoDisciplinas) {
      return [];
    }

    return Object.values(cursoDisciplinas).flat();
  }

  getDisciplinasCursoSemestre(curso: string, semestre: number): Disciplina[] {
    return this.disciplinas[curso]?.[semestre] || [];
  }
}
