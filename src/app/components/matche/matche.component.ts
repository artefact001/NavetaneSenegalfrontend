import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { Equipe, Matche } from '../../Models/Tout.Model'
import { MatcheService } from '../../services/matche.service'
import { EquipeService } from '../../services/equipe.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-matche',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './matche.component.html',
  styleUrls: ['./matche.component.css']
})
export class MatcheComponent implements OnInit {
  matches: Matche[] = []
  equipes: Equipe[] = []
  matcheForm!: FormGroup
  isEditing = false

  constructor (
    private readonly fb: FormBuilder,
    private readonly matcheService: MatcheService,
    private readonly equipeService: EquipeService
  ) {}

  ngOnInit (): void {
    this.initForm()
    this.loadMatches()
    this.loadEquipes()
  }

  private initForm (): void {
    this.matcheForm = this.fb.group({
      equipe_local: ['', Validators.required],
      equipe_visiteur: ['', Validators.required],
      date: ['', Validators.required],
      lieu: ['', Validators.required]
    })
  }

  loadMatches (): void {
    this.matcheService.getMatches().subscribe((matches: Matche[]) => {
      this.matches = matches
      console.log('matches:', this.matches)
    })
  }

  loadEquipes (): void {
    this.equipeService.getEquipes().subscribe((equipes: Equipe[]) => {
      this.equipes = equipes
      console.log('equipes:', this.equipes)
    })
  }

  onSubmit (): void {
    if (this.matcheForm.invalid) {
      this.matcheForm.markAllAsTouched() // Ensure all fields are marked as touched to display validation errors
      return
    }

    if (this.isEditing) {
      this.matcheService.updateMatche(this.matcheForm.value).subscribe(() => {
        this.loadMatches()
        this.resetForm()
        Swal.fire(
          'Updated!',
          'The match has been updated successfully.',
          'success'
        )
      })
    } else {
      this.matcheService.addMatche(this.matcheForm.value).subscribe(() => {
        this.loadMatches()
        this.resetForm()
        Swal.fire('Added!', 'The match has been added successfully.', 'success')
      })
    }
  }

  editMatche (matche: Matche): void {
    this.isEditing = true
    this.matcheForm.patchValue(matche)
  }

  deleteMatche (matche: Matche): void {
    // Show confirmation alert before deleting
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        this.matcheService.deleteMatche(matche).subscribe(() => {
          this.loadMatches()
          Swal.fire('Deleted!', 'The match has been deleted.', 'success')
        })
      }
    })
  }

  private resetForm (): void {
    this.isEditing = false
    this.matcheForm.reset()
    this.matcheForm.markAsPristine() // Reset form to pristine state
    this.matcheForm.markAsUntouched() // Reset touched state
  }
}
