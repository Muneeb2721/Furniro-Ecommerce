import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { Cartservice, Product } from '../service/cartservice';

@Component({
  selector: 'app-cart-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cart-sidebar.html',
  styleUrl: './cart-sidebar.css'
})
export class CartSidebar {
  @Output() closeSidebar = new EventEmitter<void>();
  faCross = faMultiply;
  faCircleXmark = faCircleXmark;

  cartItems: Product[] = [];
  subtotal: number = 0;   
  constructor(private route: Router, private cartService: Cartservice) {
  
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      
    });

    this.cartService.getCartTotal().subscribe(total => {
    this.subtotal = total;
  });

  }

  remove(productTitle: string) {
    this.cartService.removeFromCart(productTitle);
  }

  removeCartSidebar() {
    this.closeSidebar.emit();
  }

  redirectToCart() {
    this.route.navigate(['cart-page']);
    this.closeSidebar.emit();  // ✅ This will close sidebar after redirect

  }
  redirectToCheckout() {
    this.route.navigate(['checkout-page']);
    this.closeSidebar.emit();  // ✅ This will close sidebar after redirect 
  }
  redirectToComparison() {
    this.route.navigate(['product-comparison-page']);
    this.closeSidebar.emit();  // ✅ This will close sidebar after redirect
  }
}