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

  constructor(private productsService: ProductsService) {
    this.produits = this.productsService.getProduits();
  }
}
