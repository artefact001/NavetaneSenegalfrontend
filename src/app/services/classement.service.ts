import { Injectable } from '@angular/core';                   import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Classement } from '../models/ClassementModel';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ClassementService {
  private apiUrl = `${apiUrl}/classement/api`;

  constructor(private http: HttpClient) {}

  // Obtenir tous les classements
  getClassements(): Observable<Classement[]> {
    return this.http.get<Classement[]>(this.apiUrl);
  }

  // Obtenir le classement d'une zone spécifique
  getClassementByZoneId(zoneId: number): Observable<Classement[]> {
    return this.http.get<Classement[]>(`${this.apiUrl}/zone/${zoneId}`);
  }

  // Obtenir le classement d'une équipe spécifique
  getClassementByEquipeId(equipeId: number): Observable<Classement> {
    return this.http.get<Classement>(`${this.apiUrl}/equipe/${equipeId}`);
  }

  // Mettre à jour le classement d'une équipe
  updateClassement(id: number, classement: Classement): Observable<Classement> {
    return this.http.put<Classement>(`${this.apiUrl}/${id}`, classement);
  }

  // Recalculer le classement pour une zone spécifique
  recalculerClassement(zoneId: number): Observable<Classement[]> {
    return this.http.post<Classement[]>(`${this.apiUrl}/recalculer/${zoneId}`, {});
  }
}