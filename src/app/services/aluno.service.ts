import { Injectable } from '@angular/core';

interface Aluno {
  nomeCompleto: string;
  cpf: string;
  email: string;
  celular: string;
  curso: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private localStorageKey = 'alunos';

  getAlunos(): Aluno[] {
    return JSON.parse(localStorage.getItem(this.localStorageKey) || '[]');
  }

  getAluno(email: string): Aluno | undefined {
    return this.getAlunos().find(aluno => aluno.email === email);
  }

  cadastrarAluno(aluno: Aluno): void {
    const alunos = this.getAlunos();
    const alunoExistente = alunos.find(a => a.email === aluno.email);

    if (alunoExistente) {
      Object.assign(alunoExistente, aluno);
    } else {
      alunos.push(aluno);
    }

    localStorage.setItem(this.localStorageKey, JSON.stringify(alunos));
  }

  excluirAluno(email: string): void {
    const alunos = this.getAlunos().filter(aluno => aluno.email !== email);
    localStorage.setItem(this.localStorageKey, JSON.stringify(alunos));
  }
}
