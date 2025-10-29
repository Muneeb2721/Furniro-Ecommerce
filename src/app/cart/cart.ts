import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset, faMinus, faPlus, faShield, faTrash, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';
import { Cartservice, Product } from '../service/cartservice';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  cartItems: Product[] = [];
  subtotal: number = 0; 
    
  constructor(private route: Router,private cartService: Cartservice){
    
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });

     this.cartService.getCartTotal().subscribe(total => {
    this.subtotal = total;
  });
  }

  faDelete = faTrash;
  faTrophy = faTrophy;
  faShield = faShield;
  faTruck = faTruck
  faHeadset = faHeadset;
  faMinus = faMinus;
  faPlus = faPlus;

  updateQuantity(product: Product, change: number) {
    this.cartService.updateQuantity(product, change);
  }

  redirectToCheckout(){
    this.route.navigate(['checkout-page']);
  }

  redirectToHome(){
    this.route.navigate(['home-page']);
  }

  remove(productTitle: string) {
    this.cartService.removeFromCart(productTitle);
    console.log("Remove Item")
  }
}