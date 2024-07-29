import { Injectable } from '@angular/core';
import { USUARIOS } from '../mocks/mock-usuarios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: string, senha: string): boolean {
    const usuario = USUARIOS.find((user: { email: string; senha: string; }) => user.email === email && user.senha === senha);
    if (usuario) {
      sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      return true;
    } else {
      return false;
    }
  }

  deslogar() {
    sessionStorage.removeItem('usuarioLogado');
  }

  getUsuarioLogado() {
    const usuario = sessionStorage.getItem('usuarioLogado');
    return usuario ? JSON.parse(usuario) : null;
  }
}
