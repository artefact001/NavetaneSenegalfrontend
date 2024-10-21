import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { CompetitionService } from '../../services/competition.service'
import { Competition } from '../../Models/Tout.Model'

@Component({
  selector: 'app-competition-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
  competitionForm: FormGroup
  competitions: Competition[] = []

  constructor (
    private fb: FormBuilder,
    private competitionService: CompetitionService
  ) {
    this.competitionForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      date_debut: ['', Validators.required],
      date_fin: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadCompetitions();
  }

  // Function to handle form submission
  onSubmit() {
    if (this.competitionForm.valid) {
      const formData = this.competitionForm.value;

      // Submit the form data to the backend using the service
      this.competitionService.addCompetition(formData).subscribe(
        (response) => {
          console.log('Competition created successfully:', response);
          this.competitionForm.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error('Error creating competition:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  // get competitions
  loadCompetitions(): void {
    this.competitionService.getCompetitions().subscribe((competitions: Competition[]) => {
      this.competitions = competitions;
      console.log('Competitions:', this.competitions);
    });
  }
}
