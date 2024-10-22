// import { Component } from '@angular/core'
// import { TirageService } from '../../services/tirage.service'
// import { FormsModule } from '@angular/forms'
// import { CommonModule } from '@angular/common'
// import { Tirage } from '../../Models/Tout.Model' // Assurez-vous que le modèle Tirage est importé correctement

// @Component({
//   selector: 'app-tirage',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './tirage.component.html',
//   styleUrls: ['./tirage.component.css']
// })
// export class TirageComponent {
//   nombrePoules: number = 2 // Par défaut, commence avec 2 poules
//   phase: string = ''
//   competition_id: number = 1 // Changez selon vos besoins
//   poules: any[] = []

//   // Variables pour gérer la mise à jour d'un tirage
//   selectedTirageId: number | null = null
//   updatedPhase: string = ''
//   updatedCompetitionId: number = 0
//   updatedNombrePoules: number = 0

//   constructor (private tirageService: TirageService) {}

//   lancerTirage () {
//     if (this.nombrePoules % 2 !== 0) {
//       alert('Le nombre de poules doit être pair.')
//       return
//     }

//     const tirageData = {
//       phase: this.phase,
//       competition_id: this.competition_id,
//       nombre_poules: this.nombrePoules
//     }

//     this.tirageService.lancerTirage(tirageData).subscribe(
//       response => {
//         this.poules = JSON.parse(response.poules)
//       },
//       error => {
//         console.error('Erreur lors du tirage:', error)
//       }
//     )
//   }

//   // Méthode pour mettre à jour un tirage existant
//   updateTirage () {
//     if (this.selectedTirageId === null) {
//       alert('Aucun tirage sélectionné pour mise à jour.')
//       return
//     }

//     let tirageToUpdate: Tirage = {
//       id: this.selectedTirageId,
//       competition_id: this.updatedCompetitionId,
//       phase: this.updatedPhase,
//       poul: []
//     }

//     this.tirageService
//       .updateTirage(tirageToUpdate.id, tirageToUpdate)
//       .subscribe(
//         updatedTirage => {
//           console.log('Tirage mis à jour :', updatedTirage)
//         },
//         error => {
//           console.error('Erreur lors de la mise à jour :', error)
//         }
//       )
//   }
// }




import { Component } from '@angular/core'
import { TirageService } from '../../services/tirage.service'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { Tirage } from '../../Models/Tout.Model' // Assurez-vous que le modèle Tirage est importé correctement

@Component({
  selector: 'app-tirage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent {
  nombrePoules: number = 2 // Par défaut, commence avec 2 poules
  phase: string = ''
  competition_id: number = 1 // Changez selon vos besoins
  poules: any[] = []

  // Variables pour gérer la mise à jour d'un tirage
  selectedTirageId: number | null = null
  updatedPhase: string = ''
  updatedCompetitionId: number = 0
  updatedNombrePoules: number = 0

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
        this.resetForm()
      },
      error => {
        console.error('Erreur lors du tirage:', error)
      }
    )
  }

  // Méthode pour réinitialiser le formulaire
  resetForm () {
    this.phase = ''
    this.competition_id = 1
    this.nombrePoules = 2
  }

  // Méthode pour mettre à jour un tirage existant
  updateTirage () {
    if (this.selectedTirageId === null) {
      alert('Aucun tirage sélectionné pour mise à jour.')
      return
    }

    const tirageToUpdate: Tirage = {
      id: this.selectedTirageId,
      competition_id: this.updatedCompetitionId,
      phase: this.updatedPhase,
      poules: [] // Ajoutez ici les poules si nécessaire
    }

    this.tirageService
      .updateTirage(tirageToUpdate.id, tirageToUpdate)
      .subscribe(
        updatedTirage => {
          console.log('Tirage mis à jour :', updatedTirage)
          this.resetUpdateForm()
        },
        error => {
          console.error('Erreur lors de la mise à jour :', error)
        }
      )
  }

  // Méthode pour réinitialiser le formulaire de mise à jour
  resetUpdateForm () {
    this.selectedTirageId = null
    this.updatedPhase = ''
    this.updatedCompetitionId = 0
    this.updatedNombrePoules = 0
  }
}
