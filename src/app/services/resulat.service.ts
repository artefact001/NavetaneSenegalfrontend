import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Resultat } from '../Models/Tout.Model'
import { apiUrl } from './apiUrl' // Importez l'URL de base de votre API

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private readonly apiUrl = `${apiUrl}/resultat/api`

  private readonly http = inject(HttpClient)

  // Obtenir tous les résultats
  getResultats (): Observable<Resultat[]> {
    return this.http.get<Resultat[]>(this.apiUrl)
  }

  // Obtenir un résultat par son ID
  getResultatById (id: number): Observable<Resultat> {
    return this.http.get<Resultat>(`${this.apiUrl}/${id}`)
  }

  // Ajouter un nouveau résultat
  addResultat (resultat: Resultat): Observable<Resultat> {
    return this.http.post<Resultat>(this.apiUrl, resultat)
  }

  // Mettre à jour un résultat existant
  // updateResultat (id: number): Observable<Resultat> {
  //   return this.http.put<Resultat>(`${this.apiUrl}/${id}`)
  // }

  // // Supprimer un résultat
  // deleteResultat (id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`)
  // }
}
