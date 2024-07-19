import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.login();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  forgotPassword() {
    alert('Processo de recuperação de senha enviado para o e-mail cadastrado.');
  }

  login() {
    localStorage.setItem('email', this.email);
    this.router.navigate(['/home']);
  }
}
