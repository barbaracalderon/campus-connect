import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  constructor(private router: Router) {}

  ngOnInit() {
    this.email = localStorage.getItem('email');
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
