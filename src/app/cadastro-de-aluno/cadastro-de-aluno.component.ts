import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CursosService } from '../services/cursos.service';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-cadastro-de-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-de-aluno.component.html',
  styleUrls: ['./cadastro-de-aluno.component.css']
})
export class CadastroDeAlunoComponent {
  alunoForm: FormGroup;
  alunoToEdit: any;
  cursos: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cursosService: CursosService,
    private alunoService: AlunoService
  ) {
    this.alunoForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      curso: ['', Validators.required]
    });

    this.cursos = this.cursosService.getCursos();

    this.alunoToEdit = this.router.getCurrentNavigation()?.extras.state?.['aluno'];
    if (this.alunoToEdit) {
      this.alunoForm.patchValue(this.alunoToEdit);
    }
  }

  onSubmit() {
    if (this.alunoForm.valid) {
      this.alunoService.cadastrarAluno(this.alunoForm.value);
      alert('Usuário salvo com sucesso');
      this.router.navigate(['/alunos']);
    }
  }

  onCancel() {
    this.alunoForm.reset();
    this.router.navigate(['/alunos']);
  }
}
