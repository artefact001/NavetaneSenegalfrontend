import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Zone } from '../Models/Tout.Model'
import { apiUrl } from './apiUrl'
@Injectable({
  providedIn: 'root'
})
export class ZoneService {
  private readonly apiUrl = `${apiUrl}/zone/api`

  private readonly http = inject(HttpClient)

  // Obtenir toutes les zones
  getZones (): Observable<Zone[]> {
    return this.http.get<Zone[]>(this.apiUrl)
  }

  // Obtenir une zone par son ID
  getZoneById (id: number): Observable<Zone> {
    return this.http.get<Zone>(`${this.apiUrl}/${id}`)
  }

  // Ajouter une nouvelle zone
  addZone (zone: Zone): Observable<Zone> {
    return this.http.post<Zone>(this.apiUrl, zone)
  }

  // Mettre à jour une zone existante
  updateZone (id: number, zone: Zone): Observable<Zone> {
    return this.http.put<Zone>(`${this.apiUrl}/${id}`, zone)
  }

  // Supprimer une zone
  deleteZone (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
