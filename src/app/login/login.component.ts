import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) { //special check for browser platform PLATFORM_ID is a special Angular injection token that give token to tell is  wheter on server or on browser.
      if (localStorage.getItem('loggedIn') === 'true') {
        this.router.navigate(['/dashboard']);
      }
    }
  }

  login() {
    if (this.username === 'sean' && this.password === 'sean1234') {
      localStorage.setItem('loggedIn', 'true');
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
