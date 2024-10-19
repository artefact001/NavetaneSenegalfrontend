import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { HistoriqueJoueurEquipe } from '../Models/Tout.Model'
import { apiUrl } from './apiUrl'
@Injectable({
  providedIn: 'root'
})
export class HistoriqueJoueurEquipeService {
  private readonly apiUrl = `${apiUrl}/historique-joueur-equipe/api`

  private readonly http = inject(HttpClient)

  // Obtenir tout l'historique
  getHistorique (): Observable<HistoriqueJoueurEquipe[]> {
    return this.http.get<HistoriqueJoueurEquipe[]>(this.apiUrl)
  }

  // Obtenir l'historique d'un joueur spécifique
  getHistoriqueByJoueurId (
    joueurId: number
  ): Observable<HistoriqueJoueurEquipe[]> {
    return this.http.get<HistoriqueJoueurEquipe[]>(
      `${this.apiUrl}/joueur/${joueurId}`
    )
  }

  // Obtenir l'historique d'une équipe spécifique
  getHistoriqueByEquipeId (
    equipeId: number
  ): Observable<HistoriqueJoueurEquipe[]> {
    return this.http.get<HistoriqueJoueurEquipe[]>(
      `${this.apiUrl}/equipe/${equipeId}`
    )
  }

  // Ajouter un nouvel enregistrement d'historique
  addHistorique (
    historique: HistoriqueJoueurEquipe
  ): Observable<HistoriqueJoueurEquipe> {
    return this.http.post<HistoriqueJoueurEquipe>(this.apiUrl, historique)
  }

  // // Mettre à jour un enregistrement d'historique
  // updateHistorique (
  //   id: number,
  //   historique: HistoriqueJoueurEquipe
  // ): Observable<HistoriqueJoueurEquipe> {
  //   return this.http.put<HistoriqueJoueurEquipe>(
  //     `${this.apiUrl}/${id}`,
  //     historique
  //   )
  // }

  // // Supprimer un enregistrement d'historique
  // deleteHistorique (id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`)
  // }
}
