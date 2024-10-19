import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { StatistiqueService } from '../../services/statistique.service'
import { JoueurService } from '../../services/joueur.service'
import { EquipeService } from '../../services/equipe.service'
import { Equipe, Joueur, Statistique } from '../../Models/Tout.Model'

@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'] // Corrected `styleUrl` to `styleUrls`
})
export class StatistiqueComponent implements OnInit {
  private readonly fb = inject(FormBuilder)
  private readonly statistiqueService = inject(StatistiqueService)
  private readonly joueurService = inject(JoueurService)
  private readonly equipeService = inject(EquipeService)

  statistiques: Statistique[] = []
  joueurs: Joueur[] = []
  equipes: Equipe[] = []
  statistiqueForm!: FormGroup
  isEditing = false

  ngOnInit (): void {
    this.initForm()
    this.loadAll()
  }

  private initForm (): void {
    this.statistiqueForm = this.fb.group({
      joueur_id: ['', Validators.required],
      equipe_id: ['', Validators.required],
      zone_id: ['', Validators.required],
      buts: [0, Validators.min(0)],
      passeurs: [0, Validators.min(0)],
      cartons_jaunes: [0, Validators.min(0)],
      cartons_rouges: [0, Validators.min(0)]
    })
  }

  private loadAll (): void {
    this.loadStatistiques()
    this.loadJoueurs()
    this.loadEquipes()
  }

  private loadStatistiques (): void {
    this.statistiqueService
      .getStatistiques()
      .subscribe(stats => (this.statistiques = stats))
  }

  private loadJoueurs (): void {
    this.joueurService
      .getJoueurs()
      .subscribe(joueurs => (this.joueurs = joueurs))
  }

  private loadEquipes (): void {
    this.equipeService
      .getEquipes()
      .subscribe(equipes => (this.equipes = equipes))
  }

  onSubmit (): void {
    if (this.statistiqueForm.valid) {
      this.statistiqueService
        .addStatistique(this.statistiqueForm.value)
        .subscribe(() => {
          this.loadStatistiques()
          this.resetForm()
        })
    }
  }

  private resetForm (): void {
    this.isEditing = false
    this.statistiqueForm.reset()
  }
}
