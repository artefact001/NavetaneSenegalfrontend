// user.model.ts
export interface User {
    id: number;
    nom: string;
    email: string;
    password?: string;
    remember_token?: string;
    created_at?: Date;
    updated_at?: Date;
}

// equipe.model.ts
export interface Equipe {
    id: number;
    nom: string;
    logo?: string;
    date_creer: Date;
    zone_id: number;
    user_id?: number;
    created_at?: Date;
    updated_at?: Date;
}

// joueur.model.ts
export interface Joueur {
    id: number;
    nom: string;
    age: number;
    licence: string;
    equipe_id: number;
    categorie_id: number;
    created_at?: Date;
    updated_at?: Date;
}

// categorie.model.ts
export interface Categorie {
    id: number;
    nom: string;
    created_at?: Date;
    updated_at?: Date;
}

// zone.model.ts
export interface Zone {
    id: number;
    nom: string;
    localite: string;
    user_id?: number;
    created_at?: Date;
    updated_at?: Date;
}

// competition.model.ts
export interface Competition {
    id: number;
    nom: string;
    date_debut: Date;
    date_fin: Date;
    created_at?: Date;
    updated_at?: Date;
}

// competition-equipe.model.ts
export interface CompetitionEquipe {
    id: number;
    equipe_id: number;
    competition_id: number;
    date_inclusion?: Date;
    created_at?: Date;
    updated_at?: Date;
}

// matche.model.ts
export interface Matche {
    id: number;
    equipe_local: number;
    equipe_visiteur: number;
    date: Date;
    lieu: string;
    created_at?: Date;
    updated_at?: Date;
}

// resultat.model.ts
export interface Resultat {
    id: number;
    match_id: number;
    carton_jaune: number;
    carton_rouge: number;
    detail_but: any; // JSON
    score_local: number;
    score_visiteur: number;
    created_at?: Date;
    updated_at?: Date;
}

// tirage.model.ts
export interface Tirage {
    id: number;
    competition_id: number;
    phase: any; // JSON
    poul: any; // JSON
    created_at?: Date;
    updated_at?: Date;
}

// historique-joueur-equipe.model.ts
export interface HistoriqueJoueurEquipe {
    id: number;
    joueur_id: number;
    equipe_id: number;
    date_debut: Date;
    date_fin?: Date;
    created_at?: Date;
    updated_at?: Date;
}

// notification.model.ts
export interface Notification {
    id: number;
    user_id: number;
    type: string;
    data: string;
    read_at?: Date;
    created_at?: Date;
    updated_at?: Date;
}

// reclamation.model.ts
export interface Reclamation {
    id: number;
    equipe_id: number;
    description: string;
    statut: 'en_attente' | 'traitee' | 'rejete';
    created_at?: Date;
    updated_at?: Date;
}

// statistique.model.ts
export interface Statistique {
    id: number;
    joueur_id: number;
    equipe_id: number;
    zone_id: number;
    buts: number;
    passeurs: number;
    cartons_jaunes: number;
    cartons_rouges: number;
    created_at?: Date;
    updated_at?: Date;
}

// classement.model.ts
export interface Classement {
    id: number;
    zone_id: number;
    equipe_id: number;
    matches_joues: number;
    gagne: number;
    nul: number;
    perdu: number;
    buts_marques: number;
    buts_encaisses: number;
    diff_buts: number;
    points: number;
    created_at?: Date;
    updated_at?: Date;
}