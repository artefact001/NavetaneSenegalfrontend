import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private fb: FormBuilder) {
    // Initialisation du formulaire
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Validation email
      password: ['', [Validators.required]], // Validation mot de passe
    });
  }

  ngOnInit(): void {}

  // Méthode de connexion
  login(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      
      // Logique de connexion
      console.log('Email:', email);
      console.log('Mot de passe:', password);
      
      // Simulez une erreur de connexion pour démonstration
      this.loginError = true; // Changez ceci selon votre logique d'authentification
    }
  }
}
