import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
errorMessage: any;
  authService: any;

  constructor(private router: Router, private loginService: LoginService) {}

  onSubmit() {
    if (this.email && this.password) {
      if (this.authService.login(this.email, this.password)) {
        this.router.navigate(['/home']);
      } else {
        alert('Login falhou. Verifique suas credenciais.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  forgotPassword() {
    alert('Processo de recuperação de senha enviado para o e-mail cadastrado.');
  }

  login() {
    const success = this.loginService.logar(this.email, this.password);
    if (success) {
      this.router.navigate(['/home']);
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }
}