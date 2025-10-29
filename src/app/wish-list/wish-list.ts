import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleXmark, faMultiply } from '@fortawesome/free-solid-svg-icons';
import { Product, Wishlist } from '../service/wishlist';
import { Cartservice } from '../service/cartservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.css'
})
export class WishList {

  faCross = faMultiply;
  faCircleXmark = faCircleXmark;
  

  constructor(private route: Router, private wishService: Wishlist){}

  
  redirectToCart() {
    this.route.navigate(['/cart-page']);
  }

  redirectToCheckout() {
    this.route.navigate(['/checkout-page']);
  }

  redirectToComparison() {
    this.route.navigate(['/comparison-page']);
  }
}