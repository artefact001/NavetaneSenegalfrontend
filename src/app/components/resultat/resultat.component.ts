import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'
import { Resultat } from '../../Models/Tout.Model'
import { ResultatService } from '../../services/resulat.service'

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-resultats',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatsComponent implements OnInit {
  resultats$!: Observable<Resultat[]> // Utilisation de l'interface Resultat
  selectedResultat: Resultat | null = null

  constructor (private readonly resultatService: ResultatService) {}

  ngOnInit (): void {
    this.getResultats()
  }

  getResultats(): void {
    this.resultats$ = this.resultatService.getResultats();
  }

  createResultat (): void {
    const newResultat: Resultat = {
      id: 0, // ID initial, remplacé par le serveur
      match_id: 1, // Remplacez par les données réelles
      carton_jaune: 0,
      carton_rouge: 0,
      detail_but: {},
      score_local: 0,
      score_visiteur: 0,
      // showDetails: false // Optionnel
    }

    this.resultatService.addResultat(newResultat).subscribe(() => {
      this.getResultats() // Rafraîchir la liste
    })
  }

  // toggleDetails (resultat: Resultat): void {
  //   resultat.showDetails = !resultat.showDetails // Basculez la visibilité des détails
  // }

  clearSelection (): void {
    this.selectedResultat = null
  }
}
