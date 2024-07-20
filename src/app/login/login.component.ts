import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

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
}
