import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { User } from '../Models/Tout.Model'; // Remplacez 'models' par 'Models'
import { apiUrl } from './apiUrl'; // Importez l'URL de base de votre API

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl = `${apiUrl}/user/api`;

  constructor(private http: HttpClient) {}

  // Obtenir tous les utilisateurs
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }

  // Ajouter un nouvel utilisateur
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user)
  }
}
