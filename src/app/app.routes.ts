import { Routes } from '@angular/router'
import { Component } from '@angular/core'
import { ResultatsComponent } from './components/resultat/resultat.component'
import { UserComponent } from './components/user/user.component'
import { AcceuilComponent } from './components/acceuil/acceuil.component'
import { CompetitionComponent } from './components/competition/competition.component'
import { LoginComponent } from './login/login.component'
import { MatcheComponent } from './components/matche/matche.component'
import { EquipeComponent } from './components/equipe/equipe.component'
import { TirageComponent } from './components/tirage/tirage.component'
export const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' }, // Redirection par défaut vers l'accueil
  { path: 'acceuil', component: AcceuilComponent },

  // Routes pour les résultats
  { path: 'resultats', component: ResultatsComponent }, // Récupérer tous les résultats
  { path: 'resultats/nouveau', component: ResultatsComponent }, // Créer un nouveau résultat
  { path: 'resultats/:id', component: ResultatsComponent }, // Voir un résultat spécifique
  // { path: 'resultats/modifier/:id', component: ResultatsComponent }, // Modifier un résultat existant

  // Routes pour les utilisateurs
  { path: 'users', component: UserComponent }, // Lister tous les utilisateurs
  { path: 'users/create', component: UserComponent }, // Créer un nouvel utilisateur
  { path: 'users/:id', component: UserComponent }, // Voir le détail d'un utilisateur
  { path: 'users/:id/edit', component: UserComponent }, // Modifier un utilisateur existant

  // Route pour les compétitions
  { path: 'competition', component: CompetitionComponent }, // Gérer les compétitions

  { path: 'matches', component: MatcheComponent }, // Gérer les compétitions

  { path: 'tirages', component: TirageComponent }, // Gérer les compétitions


  { path: 'equipes', component: EquipeComponent }, // Gérer les compétitions

  // Route pour la connexion
  { path: 'login', component: LoginComponent } // Gérer la connexion
]
