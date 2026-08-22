import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit, ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  produit: Produit | undefined;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.produit = this.productsService.getProduitById(id);
  }
}
