import { inject, Injectable } from '@angular/core'
import { apiUrl } from './apiUrl'
import { Notification } from '../Models/Tout.Model'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private  readonly apiUrl = `${apiUrl}/notification/api`

  private readonly http=inject(HttpClient)

  // Obtenir toutes les notifications
  getNotifications (): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.apiUrl)
  }

  // Obtenir les notifications d'un utilisateur spécifique
  getNotificationsByUserId (userId: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl}/user/${userId}`)
  }

  // Marquer une notification comme lue
  markAsRead (id: number): Observable<Notification> {
    return this.http.patch<Notification>(`${this.apiUrl}/${id}/read`, {})
  }

  // Ajouter une nouvelle notification
  addNotification (notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.apiUrl, notification)
  }

  // Supprimer une notification
  deleteNotification (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}
