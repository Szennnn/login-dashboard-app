import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout() {
    // Perform logout logic here
    console.log('User logged out');
    localStorage.removeItem('loggedIn');
    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
