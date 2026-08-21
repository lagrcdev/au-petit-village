import { Component } from '@angular/core';
import { Produit, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  produits: Produit[] = [];
  ordre: string = 'asc';
  recherche: string = '';

  constructor(private productsService: ProductsService) {
    this.produits = this.productsService.getProduits();
  }

  trier(nouvelOrdre: string): void {
    this.ordre = nouvelOrdre;
  }

  rechercher(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.recherche = input.value;
  }
}
