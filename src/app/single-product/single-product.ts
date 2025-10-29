import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faFilter, faGridHorizontal, faList } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faShare, faHeart, faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './single-product.html',
  styleUrl: './single-product.css'
})
export class SingleProduct {
  faChevronRight = faChevronRight;
  faStar = faStar;
  faStarHalf = faStarHalf;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faFilter = faFilter;
  faList = faList;
  faGrid = faGridHorizontal;
  faShare = faShare;
  faCompare = faCodeCompare;
  faHeart = faHeart;

  constructor(private route: Router) { }

  showOverlays: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

  showOverlay(idx: number, event: Event) {
    event.stopPropagation(); // Prevent document click from firing
    this.showOverlays = this.showOverlays.map((_, i) => i === idx);
  }

  // Hide all overlays when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.showOverlays = this.showOverlays.map(() => false);
  }

  show() {
    this.route.navigate(['cart-page']);
  }

  productDetail() {
    this.route.navigate(['single-product-page']);
  }

  redirectToHome() {
    this.route.navigate(['home-page']);
  }

  redirectToShop() {
    this.route.navigate(['shop-page']);
  }

  redirectToComparison() {
    this.route.navigate(['product-comparison-page']);
  }
}