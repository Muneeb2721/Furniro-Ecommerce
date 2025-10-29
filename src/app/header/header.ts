import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { CartSidebar } from '../cart-sidebar/cart-sidebar';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Cartservice } from '../service/cartservice';

import { Wishlist } from '../service/wishlist';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, CartSidebar, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  faUser = faUser;
  faSearch = faSearch; 
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  
  openSidebar: boolean = false;

  cartCount$!: Observable<number>;

  constructor(private route: Router, private cartService: Cartservice) {
    
  }

  ngOnInit(): void {
    this.cartCount$ = this.cartService.getCartCount();
  }
  
  homePage() {
    this.route.navigate(['home-page']);
  }

  shopPage() {
    this.route.navigate(['shop-page']);
  }

  aboutPage() {
    this.route.navigate(['about-page']);
  }

  contactPage() {
    this.route.navigate(['contact-page']);
  }

  redirectToCartSideBar() {
    this.openSidebar = true;
  }
  closeSidebar() {
    this.openSidebar = false;
  }

  toggleMobileMenu() {
    const menu = document.getElementById('mobilemenu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const menu = document.getElementById('mobilemenu');
    const barsIcon = document.querySelector('.bars');

    if (
      menu &&
      !menu.classList.contains('hidden') && // menu is open
      !menu.contains(target) && // clicked outside menu
      barsIcon && !barsIcon.contains(target) // clicked outside icon
    ) {
      menu.classList.add('hidden'); // close menu
    }
  }

   @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const sidebar = document.getElementById('sidebar');
    if (sidebar && !sidebar.contains(event.target as Node) && this.openSidebar) {
      this.closeSidebar();  // close if clicked outside
    }
  }
}