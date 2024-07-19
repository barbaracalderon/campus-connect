import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos: any[] = [];
  searchQuery: string = '';
  filteredAlunos: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadAlunos();
  }

  loadAlunos() {
    const storedAlunos = localStorage.getItem('alunos');
    if (storedAlunos) {
      this.alunos = JSON.parse(storedAlunos);
      this.filteredAlunos = [...this.alunos];
    }
  }

  search() {
    if (this.searchQuery.trim()) {
      this.filteredAlunos = this.alunos.filter(aluno =>
        aluno.nomeCompleto.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        aluno.email.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredAlunos = [...this.alunos];
    }
  }

  editAluno(aluno: any) {
    this.router.navigate(['/cadastro-aluno'], { state: { aluno } });
  }

  deleteAluno(aluno: any) {
    if (confirm('Quer mesmo excluir este usuário?')) {
      this.alunos = this.alunos.filter(a => a.email !== aluno.email);
      this.filteredAlunos = [...this.alunos];
      localStorage.setItem('alunos', JSON.stringify(this.alunos));
    }
  }
}
