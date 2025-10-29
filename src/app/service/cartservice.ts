import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

export interface Product {
  title: string;
  imageUrl: string;
  detailUrl: string;
  subtitle: string;
  discount: string;
  discountAmount: number;
  actualAmount: number;
  quantity?: number;
  sub_total?: number;
}

@Injectable({
  providedIn: 'root'
})

export class Cartservice {
  cartItems = new BehaviorSubject<Product[]>(this.loadCartFromStorage()); 
  cartItems$ = this.cartItems.asObservable(); 

  addToCart(product: Product) {
    let cart = this.cartItems.value;   

    const existingProduct = cart.find((p: Product) => p.title === product.title);

    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      
      existingProduct.sub_total = product.discountAmount * existingProduct.quantity;
    } else {
      product.quantity = 1;
      product.sub_total = product.discountAmount * product.quantity;
      cart = [...cart, product];
    }

    
    this.cartItems.next([...cart]);
    this.saveCartToStorage(cart);
  }

  updateQuantity(product: Product, change: number) {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');

  const existingProduct = cart.find((p: Product) => p.title === product.title);

  if (existingProduct) {
    existingProduct.quantity += change;

    if (existingProduct.quantity <= 0) {
      cart = cart.filter((p: Product) => p.title !== product.title);
    }
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  this.cartItems.next(cart);
}


  removeFromCart(productTitle: string) {
    let updated = this.cartItems.value.filter(p => p.title !== productTitle);

    this.cartItems.next(updated);        
    this.saveCartToStorage(updated);     
  }
  
  getCartTotal(): Observable<number> {
  return this.cartItems$.pipe(
    map(items => 
      items.reduce((total, item) => total + (item.discountAmount * (item.quantity || 1)), 0)
    )
  );
}

  getCartCount(): Observable<number> {
  return this.cartItems.asObservable().pipe(
    map(items => items.reduce((count, item) => count + (item.quantity || 1), 0))
  );
}

  // --- Helpers ---
  private saveCartToStorage(items: Product[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  private loadCartFromStorage(): Product[] {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  }

} // cartservice class terminator
