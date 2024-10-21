import { inject, Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Competition } from '../Models/Tout.Model'
import { apiUrl } from './apiUrl'
@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private readonly apiUrl = `${apiUrl}/competitions`

  // Injection du HttpClient dans le service
  private readonly http = inject(HttpClient)

  // Méthode pour obtenir toutes les compétitions
getCompetitions (): Observable<Competition[]> {
  const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Competition[]>(this.apiUrl,  { headers })
  }

  // Méthode pour obtenir une compétition par son ID
  getCompetitionById (id: number): Observable<Competition> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Competition>(`${this.apiUrl}/${id}`,  { headers })
  }

  // Méthode pour ajouter une nouvelle compétition
  addCompetition (competition: Competition): Observable<Competition> {
    const token = localStorage.getItem('access_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Competition>(this.apiUrl, competition , { headers })
  }

  // Méthode pour mettre à jour une compétition existante
  // updateCompetition (
  //   id: number competition: Competition
  // ): Observable<Competition> {
    // const token = localStorage.getItem('access_token');
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // });
  //   return this.http.put<Competition>(`${this.apiUrl}/${id}`,  { headers })
  // }

  // Méthode pour supprimer une compétition
  // deleteCompetition (id: number): Observable<void> {
    // const token = localStorage.getItem('access_token');
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${token}`
    // });
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`,  { headers })
  // }
}
