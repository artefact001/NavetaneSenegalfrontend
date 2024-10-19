import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Equipe, Zone } from '../../Models/Tout.Model';
import { EquipeService } from '../../services/equipe.service';
import { ZoneService } from '../../services/zone.service';
@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent implements OnInit {
  private fb = inject(FormBuilder);
  private equipeService = inject(EquipeService);
  private zoneService = inject(ZoneService);

  equipes: Equipe[] = [];
  zones: Zone[] = [];
  equipeForm: FormGroup;
  isEditing = false;

  ngOnInit(): void {
    this.initForm();
    this.loadEquipes();
    this.loadZones();
  }

  private initForm(): void {
    this.equipeForm = this.fb.group({
      nom: ['', Validators.required],
      logo: [''],
      date_creer: ['', Validators.required],
      zone_id: ['', Validators.required],
      user_id: ['']
    });
  }

  private loadEquipes(): void {
    this.equipeService.getEquipes().subscribe(
      equipes => this.equipes = equipes
    );
  }

  private loadZones(): void {
    this.zoneService.getZones().subscribe(
      zones => this.zones = zones
    );
  }

  onSubmit(): void {
    if (this.equipeForm.valid) {
      if (this.isEditing) {
        this.equipeService.updateEquipe(this.equipeForm.value).subscribe(() => {
          this.loadEquipes();
          this.resetForm();
        });
      } else {
        this.equipeService.addEquipe(this.equipeForm.value).subscribe(() => {
          this.loadEquipes();
          this.resetForm();
        });
      }
    }
  }

  editEquipe(equipe: Equipe): void {
    this.isEditing = true;
    this.equipeForm.patchValue(equipe);
  }

  deleteEquipe(id: number): void {
    this.equipeService.deleteEquipe(id).subscribe(() => {
      this.loadEquipes();
    });
  }

  private resetForm(): void {
    this.isEditing = false;
    this.equipeForm.reset();
  }
}