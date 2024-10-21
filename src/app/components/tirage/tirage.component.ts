import { Component } from '@angular/core'
import { TirageService } from '../../services/tirage.service'

@Component({
  selector: 'app-tirage',
  standalone: true,
  imports: [],
  templateUrl: './tirage.component.html',
  styleUrl: './tirage.component.css'
})
export class TirageComponent {
  nombrePoules: number = 2 // Par défaut, commence avec 2 poules
  phase: string = ''
  competition_id: number = 1 // Changez selon vos besoins
  poules: any[] = []

  constructor (private tirageService: TirageService) {}

  lancerTirage () {
    if (this.nombrePoules % 2 !== 0) {
      alert('Le nombre de poules doit être pair.')
      return
    }

    const tirageData = {
      phase: this.phase,
      competition_id: this.competition_id,
      nombre_poules: this.nombrePoules
    }

    this.tirageService.lancerTirage(tirageData).subscribe(
      response => {
        this.poules = JSON.parse(response.poules)
      },
      error => {
        console.error('Erreur lors du tirage:', error)
      }
    )
  }
}
