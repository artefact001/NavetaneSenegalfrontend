import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../Models/Tout.Model';
import { apiUrl } from './apiUrl';
@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private readonly apiUrl = `${apiUrl}/equipe/api`;

  // Injection du HttpClient dans le service
  private readonly http = inject(HttpClient)

  // Méthode pour obtenir toutes les équipes
  getEquipes(): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.apiUrl);
  }

  // Méthode pour obtenir une équipe par son ID
  getEquipeById(id: number): Observable<Equipe> {
    return this.http.get<Equipe>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour ajouter une nouvelle équipe
  addEquipe(equipe: Equipe): Observable<Equipe> {
    return this.http.post<Equipe>(this.apiUrl, equipe);
  }

  // Méthode pour mettre à jour une équipe existante
  // updateEquipe(id: number): Observable<Equipe> {
  //   return this.http.put<Equipe>(`${this.apiUrl}/${id}`);
  // }

  // Méthode pour supprimer une équipe
  // deleteEquipe(id: number): Observable<void> {
  //   return this.http.delete<void>(`${this.apiUrl}/${id}`);
  // }
}