import { NgFor, CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { error } from 'console';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  @ViewChild('myform') authform: NgForm;
  error: string;
  constructor(private authService: AuthService) {}
  onSignUp() {
    console.log(this.authform.value);
    this.authService
      .signUp(this.authform.value.email, this.authform.value.passcode)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          this.error = e.error.error.message;
        },
      });
  }
  onSignIn() {
    console.log(this.authform.value);
    this.authService
      .SignIn(this.authform.value.email, this.authform.value.passcode)
      .subscribe({
        next: (v) => console.log(v),
        error: (e) => {
          this.error = e.error.error.message;
        },
      });
  }
}
