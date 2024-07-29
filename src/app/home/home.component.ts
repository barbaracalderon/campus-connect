import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { DisciplinasService } from '../services/disciplinas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  proximasAtividades: string[] = [
    'Entrega de trabalho da disciplina X até 30/08',
    'Avaliação da disciplina Y em 01/09',
    'Chat com o mentor até 05/09'
  ];
  minhasDisciplinas: { nome: string, semestre: number }[] = [];
  cursosExtras: { nome: string }[] = [];

  constructor(
    private cursosService: CursosService,
    private disciplinasService: DisciplinasService
  ) {}

  ngOnInit() {
    this.carregarDisciplinas();
    this.carregarCursosExtras();
  }

  carregarDisciplinas() {
    const alunoCurso = 'Curso 1'
    const semestre = 1;
    this.minhasDisciplinas = this.disciplinasService.getDisciplinasCursoSemestre(alunoCurso, semestre);
  }

  carregarCursosExtras() {
    this.cursosExtras = this.cursosService.getCursos().filter(curso => curso.id > 3); 
  }
}
