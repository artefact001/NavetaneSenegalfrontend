import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Joueur } from '../Models/Tout.Model'
import { apiUrl } from './apiUrl'

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private readonly apiUrl = `${apiUrl}/joueur/api`

  // Injection du HttpClient dans le service
  private readonly http = inject(HttpClient)

  // Méthode pour obtenir tous les joueurs
  getJoueurs (): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(this.apiUrl)
  }

  // Méthode pour obtenir un joueur par son ID
  getJoueurById (id: number): Observable<Joueur> {
    return this.http.get<Joueur>(`${this.apiUrl}/${id}`)
  }

  // Méthode pour ajouter un nouveau joueur
  addJoueur (joueur: Joueur): Observable<Joueur> {
    return this.http.post<Joueur>(this.apiUrl, joueur)
  }

  // Méthode pour mettre à jour un joueur existant
  updateJoueur (id: number, joueur: Joueur): Observable<Joueur> {
    return this.http.put<Joueur>(`${this.apiUrl}/${id}`, joueur)
  }

  // Méthode pour supprimer un joueur
  deleteJoueur (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
