import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroDeAlunoComponent } from './cadastro-de-aluno/cadastro-de-aluno.component';

export const routes: Routes = [
     { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'alunos', component: AlunosComponent },
    { path: 'cadastro-de-aluno', component: CadastroDeAlunoComponent },
    { path: 'disciplinas', component: DisciplinasComponent }
];
