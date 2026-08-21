import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../services/products.service';


@Pipe({
  name: 'filterByName',
  standalone: false,
})
export class FilterByNamePipe implements PipeTransform {
  transform(produits: Produit[], recherche: string): Produit[] {
    if (!recherche) {
      return produits;
    }
    return produits.filter(p =>
      p.nom.toLowerCase().includes(recherche.toLowerCase())
    );
  }
}
