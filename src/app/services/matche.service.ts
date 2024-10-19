import { inject, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Matche } from '../Models/Tout.Model'
import { apiUrl } from './apiUrl'

@Injectable({
  providedIn: 'root'
})
export class MatcheService {
  private readonly apiUrl = `${apiUrl}/matches`

  private readonly http = inject(HttpClient)

  // Obtenir tous les matchs
  getMatches (): Observable<Matche[]> {
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.get<Matche[]>(this.apiUrl, { headers })
  }

  // Obtenir les matche a venirs
  getUpcomingMatches (): Observable<Matche[]> {
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.get<Matche[]>(`${this.apiUrl}/venirs`, { headers })
  }

  // Obtenir un match par son ID
  getMatchById (id: number): Observable<Matche> {
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.get<Matche>(`${this.apiUrl}/${id}`, { headers })
  }

  // Ajouter un nouveau match
  addMatche (matche: Matche): Observable<Matche> {
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.post<Matche>(this.apiUrl, matche, { headers })
  }

  // Mettre à jour un match existant
  updateMatche (matche: Matche): Observable<Matche> {
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.put<Matche>(`${this.apiUrl}/${matche.id}`, matche, {
      headers
    })
  }

  // Supprimer un match
  deleteMatche (matche: Matche) {
    const token = localStorage.getItem('access_token')
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    })
    return this.http.delete<void>(`${this.apiUrl}/${matche.id}`, { headers })
  }
}
