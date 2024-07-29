import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisciplinasService } from '../services/disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent {
  cursos: string[] = ['Curso 1', 'Curso 2', 'Curso 3'];
  selectedCurso: string = '';
  selectedSemestre: number | null = null;
  disciplinas: string[] = [];

  constructor(private disciplinasService: DisciplinasService) {}

  onCursoChange() {
    if (this.selectedCurso) {
      this.disciplinas = this.disciplinasService.getDisciplinasCurso(this.selectedCurso);
      this.selectedSemestre = null;
    } else {
      this.disciplinas = [];
    }
  }

  onSemestreChange() {
    if (this.selectedCurso && this.selectedSemestre !== null) {
      this.disciplinas = this.disciplinasService.getDisciplinasCursoSemestre(this.selectedCurso, this.selectedSemestre);
    } else {
      this.disciplinas = [];
    }
  }
}
