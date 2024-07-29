import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit {
  email: string | null = '';
  dropdownVisible = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    const usuarioLogado = this.loginService.getUsuarioLogado();
    if (usuarioLogado) {
      this.email = usuarioLogado.email;
    }
  }

  logout() {
    this.loginService.deslogar();
    this.router.navigate(['/']);
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
