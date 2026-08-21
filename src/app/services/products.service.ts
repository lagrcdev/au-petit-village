import { Injectable } from '@angular/core';

export interface Produit {
  id: number;
  nom: string;
  prix: number;
  photo: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  produits: Produit[] = [
    {
      id: 1,
      nom: 'Astérix',
      prix: 25,
      photo: 'asterix.jpg',
      description: 'Figurine du célèbre guerrier gaulois, malin et coutageux.'
    },
    {
      id: 2,
      nom: 'Obélix',
      prix: 30,
      photo: 'obelix.jpg',
      description: 'Figurine du livreur de menhirs, tombé dans la potion magique.'
    }
  ];

  getProduits(): Produit[] {
    return this.produits;
  }

  getProduitById(id: number): Produit | undefined {
    return this.produits.find(p => p.id === id);
  }
}
