import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { apiUrl } from './apiUrl'
import { Tirage } from "../Models/Tout.Model"

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  private readonly apiUrl = `${apiUrl}/tirage/api`

  private readonly http = inject(HttpClient)

  // Obtenir tous les tirages
  getTirages (): Observable<Tirage[]> {
    return this.http.get<Tirage[]>(this.apiUrl)
  }

  // Obtenir un tirage par son ID
  getTirageById (id: number): Observable<Tirage> {
    return this.http.get<Tirage>(`${this.apiUrl}/${id}`)
  }

  // Obtenir les tirages d'une compétition spécifique
  getTiragesByCompetitionId (competitionId: number): Observable<Tirage[]> {
    return this.http.get<Tirage[]>(
      `${this.apiUrl}/competition/${competitionId}`
    )
  }

  // // Ajouter un nouveau tirage
  // addTirage (tirage: Tirage): Observable<Tirage> {
  //   return this.http.post<Tirage>(this.apiUrl, tirage)
  // }
  
   lancerTirage(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/lancer`, data);
  }

  // Mettre à jour un tirage existant
  updateTirage (id: number): Observable<Tirage> {
    return this.http.put<Tirage>(`${this.apiUrl}/${id}`)
  }

  // Supprimer un tirage
  deleteTirage (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}

