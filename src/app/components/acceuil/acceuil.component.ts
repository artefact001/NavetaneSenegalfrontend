import { Component, OnInit } from '@angular/core'
import { Matche } from '../../Models/Tout.Model';
import { CommonModule } from '@angular/common';
import { MatcheService } from '../../services/matche.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import { NavbarComponent } from '../navbar/navbar.component'
// import { RouterModule } from '@angular/router'


@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent implements OnInit {
  matches: Matche[] = [];
  matcheForm: FormGroup; // Added this line

  constructor (
    private readonly matcheService: MatcheService, // Marked as readonly
    private fb: FormBuilder ) {// Marked as readonly
    this.matcheForm = this.fb.group({
      equipe_local: ['', Validators.required],
      equipe_visiteur: ['', Validators.required],
      date: ['', Validators.required],
      lieu: ['', Validators.required]
    });
  }

  ngOnInit (): void {
    this.loadMatches()
  }


  loadMatches(): void {
    this.matcheService.getUpcomingMatches().subscribe((matches: Matche[]) => {
      this.matches = matches;
      console.log('matches:', this.matches);
    });
  }

  onSubmit() {

    if (this.matcheForm.valid) {
      const formData = this.matcheForm.value;
      this.matcheService.addMatche(formData).subscribe(
        (response) => {
          console.log('Match created successfully:', response);
          this.matcheForm.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('Error creating match:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
    
  }

  // add Matche
  



}
