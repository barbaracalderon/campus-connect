export interface Curso {
    nome: string;
    semestres: {
      [key: string]: string[];
    };
  }
  
  export const cursosDisciplinas: { [key: string]: Curso } = {
    curso1: {
      nome: 'Curso 1',
      semestres: {
        primeiro: ['Disciplina A1', 'Disciplina B1'],
        segundo: ['Disciplina C1', 'Disciplina D1']
      }
    },
    curso2: {
      nome: 'Curso 2',
      semestres: {
        primeiro: ['Disciplina A2', 'Disciplina B2'],
        segundo: ['Disciplina C2', 'Disciplina D2']
      }
    }
  };
  