import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-de-aluno',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro-de-aluno.component.html',
  styleUrls: ['./cadastro-de-aluno.component.css']
})
export class CadastroDeAlunoComponent {
  alunoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alunoForm = this.fb.group({
      nomeCompleto: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', Validators.required],
      curso: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.alunoForm.valid) {
      console.log(this.alunoForm.value);
      alert('Usuário salvo com sucesso');
    }
  }

  onCancel() {
    this.alunoForm.reset();
  }
}
