import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cursosDisciplinas, Curso } from '../disciplinas-data';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  curso: Curso | null = null;
  disciplinas: { [key: string]: string[] } | null = null;
  aluno: any = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const emailLogado = this.authService.getLoggedInEmail();
    console.log('Email logado:', emailLogado);
    if (emailLogado) {
      const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
      console.log('Alunos cadastrados:', alunos);
      this.aluno = alunos.find((aluno: any) => aluno.email === emailLogado);
      console.log('Aluno encontrado:', this.aluno);
      if (this.aluno && this.aluno.curso) {
        const cursoData = cursosDisciplinas[this.aluno.curso];
        if (cursoData) {
          this.curso = cursoData;
          this.disciplinas = this.curso.semestres;
          console.log('Curso encontrado:', this.curso);
          console.log('Disciplinas encontradas:', this.disciplinas);
        } else {
          console.log('Curso não encontrado em cursosDisciplinas.');
        }
      } else {
        console.log('Aluno não possui um curso válido.');
      }
    }
  }

  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  getObjectKeys(obj: { [key: string]: any }) {
    return Object.keys(obj);
  }
}
