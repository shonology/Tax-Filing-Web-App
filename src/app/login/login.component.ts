import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/citizenship']);
    }, 3000); // Simulate a 3-second loading time
  }
}
