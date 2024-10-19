import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassementService } from '../../services/classement.service'; // Make sure to import the correct service
import { JoueurService } from '../../services/joueur.service';
import { EquipeService } from '../../services/equipe.service';
import { Equipe, Classement } from '../../Models/Tout.Model';

@Component({
  selector: 'app-classement',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css']
})
export class ClassementComponent implements OnInit {
  private fb = inject(FormBuilder);
  private classementService = inject(ClassementService);
  private equipeService = inject(EquipeService);

  classements: Classement[] = [];
  equipes: Equipe[] = [];
  classementForm!: FormGroup;
  isEditing = false;

  ngOnInit(): void {
    this.initForm();
    this.loadAll();
  }

  private initForm(): void {
    this.classementForm = this.fb.group({
      id: [null], // Include the id field for editing
      zone_id: ['', Validators.required],
      equipe_id: ['', Validators.required],
      matches_joues: [0, Validators.min(0)],
      gagne: [0, Validators.min(0)],
      nul: [0, Validators.min(0)],
      perdu: [0, Validators.min(0)],
      buts_marques: [0, Validators.min(0)],
      buts_encaisses: [0, Validators.min(0)],
      diff_buts: [0],
      points: [0, Validators.min(0)]
    });
  }

  private loadAll(): void {
    this.loadClassements();
    this.loadEquipes();
  }

  private loadClassements(): void {
    this.classementService
      .getClassements()
      .subscribe(classements => (this.classements = classements));
  }

  private loadEquipes(): void {
    this.equipeService
      .getEquipes()
      .subscribe(equipes => (this.equipes = equipes));
  }

  calculateStats(): void {
    const form = this.classementForm.value;
    const diffButs = form.buts_marques - form.buts_encaisses;
    const points = form.gagne * 3 + form.nul;

    this.classementForm.patchValue({
      diff_buts: diffButs,
      points: points
    });
  }

  onSubmit(): void {
    if (this.classementForm.valid) {
      this.calculateStats();
      const classement = this.classementForm.value;
      
      if (this.isEditing) {
        const id = classement.id; // Assuming 'id' is part of your form value
        this.classementService
          .updateClassement(id, classement)
          .subscribe(() => {
            this.loadClassements();
            this.resetForm();
          });
      } else {
        this.classementService
          .createClassement(classement)
          .subscribe(() => {
            this.loadClassements();
            this.resetForm();
          });
      }
    }
  }

  editClassement(classement: Classement): void {
    this.isEditing = true;
    this.classementForm.patchValue(classement);
  }

  deleteClassement(id: number): void {
    this.classementService.deleteClassement(id).subscribe(() => {
      this.loadClassements();
    });
  }

  private resetForm(): void {
    this.isEditing = false;
    this.classementForm.reset();
  }
}
