import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { User } from '../../Models/Tout.Model'
import { UserService } from '../../services/user.service'

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private readonly fb = inject(FormBuilder) // Marqué en readonly
  private readonly userService = inject(UserService) // Marqué en readonly

  users: User[] = [] // Tableau pour afficher les utilisateurs
  userForm!: FormGroup // Formulaire pour ajouter de nouveaux utilisateurs

  ngOnInit (): void {
    this.initForm()
    this.loadUsers()
  }

  // Initialisation du formulaire pour ajouter un utilisateur
  private initForm (): void {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  // Charger la liste des utilisateurs depuis le backend
  private loadUsers (): void {
    this.userService.getUsers().subscribe(users => (this.users = users))
  }

  // Ajouter un nouvel utilisateur
  onSubmit (): void {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(() => {
        this.loadUsers()
        this.resetForm()
      })
    }
  }

  // Réinitialiser le formulaire après l'ajout
  private resetForm (): void {
    this.userForm.reset()
  }
}
