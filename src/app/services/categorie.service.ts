import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Categorie } from '../Models/Tout.Model'
import { apiUrl } from './apiUrl'
@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private readonly apiUrl = `${apiUrl}/categorie/api`

  private readonly http = inject(HttpClient)

  // Obtenir toutes les catégories
  getCategories (): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl)
  }

  // Obtenir une catégorie par son ID
  getCategorieById (id: number): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.apiUrl}/${id}`)
  }

  // Ajouter une nouvelle catégorie
  addCategorie (categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiUrl, categorie)
  }

  // Mettre à jour une catégorie existante
  updateCategorie (id: number, categorie: Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(`${this.apiUrl}/${id}`, categorie)
  }

  // Supprimer une catégorie
  deleteCategorie (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
