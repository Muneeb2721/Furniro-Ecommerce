import { Injectable } from '@angular/core';
// import { BehaviorSubject, map, Observable } from 'rxjs';

export interface Product { 
  title: string;
  imageUrl: string;
  detailUrl: string;
  subtitle: string;
  discount: string;
  discountAmount: string;
  actualAmount: string;
  quantity?: number;
}

@Injectable({
  providedIn: 'root'
})

export class Wishlist {
//   likedItems = new BehaviorSubject<Product[]>(this.loadCartFromStorage()); 
//   likedItems$ = this.likedItems.asObservable();

//   addToWishList(product: Product) {
//     const currentItems = this.likedItems.value;
//     const updated = [...currentItems, product];
//     this.likedItems.next(updated);
//     this.saveCartToStorage(updated);
//   }

//   removeFromWishList(productTitle: string) {
//     const updated = this.likedItems.value.filter(p => p.title !== productTitle);
//     this.likedItems.next(updated);
//   }

//   getWishListCount(): Observable<number> {
//   return this.likedItems.asObservable().pipe(
//     map(items => items.reduce((count, item) => count + (item.quantity || 1), 0))
//   );
// }

} // wishlist class terminator
