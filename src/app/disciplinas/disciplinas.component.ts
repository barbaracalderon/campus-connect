import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  aluno: any;
  disciplinas: any = null;
  semestres: string[] = [];
  
  cursos: any = {
    curso1: {
      nome: 'Curso 1',
      semestres: {
        primeiro: ['Disciplina A', 'Disciplina B'],
        segundo: ['Disciplina C', 'Disciplina D']
      }
    },
    curso2: {
      nome: 'Curso 2',
      semestres: {
        primeiro: ['Disciplina E', 'Disciplina F'],
        segundo: ['Disciplina G', 'Disciplina H']
      }
    }
  };

  ngOnInit() {
    const email = localStorage.getItem('email');
    console.log('Email from localStorage:', email); // Adicione isso para depuração

    const alunos = JSON.parse(localStorage.getItem('alunos') || '[]');
    console.log('Alunos from localStorage:', alunos); // Adicione isso para depuração

    this.aluno = alunos.find((aluno: any) => aluno.email === email);
    console.log('Aluno encontrado:', this.aluno); // Adicione isso para depuração

    if (this.aluno) {
      this.disciplinas = this.cursos[this.aluno.curso]?.semestres || null;
      this.semestres = this.disciplinas ? Object.keys(this.disciplinas) : [];
      console.log('Disciplinas encontradas:', this.disciplinas); // Adicione isso para depuração
    } else {
      console.error('Aluno not found');
    }
  }
}
