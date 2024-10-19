import { inject ,Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { apiUrl } from './apiUrl'
import { Statistique } from '../Models/Tout.Model'

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private readonly apiUrl = `${apiUrl}/statistique/api`


  private readonly http = inject(HttpClient)


  // Obtenir toutes les statistiques
  getStatistiques (): Observable<Statistique[]> {
    return this.http.get<Statistique[]>(this.apiUrl)
  }

  // Obtenir les statistiques d'un joueur par son ID
  getStatistiquesByJoueurId (joueurId: number): Observable<Statistique[]> {
    return this.http.get<Statistique[]>(`${this.apiUrl}/joueur/${joueurId}`)
  }

  // Obtenir les statistiques d'une équipe par son ID
  getStatistiquesByEquipeId (equipeId: number): Observable<Statistique[]> {
    return this.http.get<Statistique[]>(`${this.apiUrl}/equipe/${equipeId}`)
  }

  // Ajouter de nouvelles statistiques
  addStatistique (statistique: Statistique): Observable<Statistique> {
    return this.http.post<Statistique>(this.apiUrl, statistique)
  }

  // // Mettre à jour des statistiques existantes
  // updateStatistique (id: number ): Observable<Statistique> {
  // return this.http.put<Statistique>(`${this.apiUrl}/${id}`)
  // }

  // // Supprimer des statistiques
  // deleteStatistique (id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`)
  // }
}
