import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user: {
    sub: string; // ou autre type selon ton payload JWT
    // Ajoute ici d'autres champs du payload si nécessaire
  };
}
