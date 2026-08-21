import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../services/products.service';

@Pipe({
  name: 'sortByPrice',
  standalone: false,
})
export class SortByPricePipe implements PipeTransform {
  transform(produits: Produit[], ordre: string): Produit[] {
    return [...produits].sort((a, b) => {
      if (ordre === 'desc') {
        return b.prix - a.prix;
      }
      return a.prix - b.prix;
    });
  }
}
