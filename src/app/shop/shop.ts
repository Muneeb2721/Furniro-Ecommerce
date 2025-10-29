import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faGridHorizontal, faHeadset, faList, faShieldAlt, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faShare, faHeart, faCodeCompare, faArrowRight, faArrowLeft, faMinus, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';
import { Cartservice, Product } from '../service/cartservice';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})

export class Shop {
  faFilter = faFilter;
  faList = faList;
  faGrid = faGridHorizontal;
  faShare = faShare;
  faCompare = faCodeCompare;
  faHeart = faHeart;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faLineChart = faMinus;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCircle = faCircle;
  faShield = faShieldAlt;
  faTrophy = faTrophy;
  faTruck = faTruck
  faHeadset = faHeadset;

  constructor(private route: Router, private cartService: Cartservice) {

  }
  // Array to track overlays for product cards 2-8 (index 0 = card 2, index 6 = card 8)
  showOverlays: boolean[] = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
 
  products: Product[] = [
    {
      "imageUrl": "assets/imgHome/image8.png",
      "detailUrl": "view details",
      "discount": "-30%", 
      "title": "Syltherine",
      "subtitle": "Stylish cafe chair",
      discountAmount: 2500,
      actualAmount: 3500
    }
    ,
    {
      "imageUrl": "assets/imgHome/image22.png",
      "detailUrl": "view details",
      "discount": "-30%",
      "title": "Leviosa",
      "subtitle": "Stylish cafe chair",
      discountAmount: 2500,
      actualAmount: 23000
    }
    ,
    {
      "imageUrl": "assets/imgHome/image13.png",
      "detailUrl": "View details",
      "discount": "-50%",
      "title": "Lolito",
      "subtitle": "Luxury big sofa",
      discountAmount: 7000,
      actualAmount: 14000
    },
    {
      "imageUrl": "assets/imgHome/image1.jpg",
      "detailUrl": "View details",
      "discount": "New",
      "title": "Respira",
      "subtitle": "Outdoor bar table and stool",
      discountAmount: 500,
      actualAmount: 23000
    },
    {
      "imageUrl": "assets/imgHome/image4.png",
      "detailUrl": "View details",
      "discount": "-30%",
      "title": "Grifo",
      "subtitle": "Night lamp",
      discountAmount: 1500,
      actualAmount: 23000
    },
    {
      "imageUrl": "assets/imgHome/image8.png",
      "detailUrl": "View details",
      "discount": "New",
      "title": "Muggo",
      "subtitle": "Small mug",
      discountAmount: 15000,
      actualAmount: 23000
    },
    {
      "imageUrl": "assets/imgHome/image3.jpg",
      "detailUrl": "View details",
      "discount": "-50%",
      "title": "Pingky",
      "subtitle": "Cute bed set",
      discountAmount: 7000,
      actualAmount: 14000
    },
    {
      "imageUrl": "assets/imgHome/image9.jpg",
      "detailUrl": "View details",
      "discount": "New",
      "title": "Potty",
      "subtitle": "Minimalist flower pot",
      discountAmount: 500,
      actualAmount: 23000
    }
  ];

  showOverlay(idx: number, isVisible: boolean) {
    this.showOverlays = this.showOverlays.map((_, i) => i === idx ? isVisible : false);
  }

  show() {
    this.route.navigate(['cart-page']);
  }

  productDetail() {
    this.route.navigate(['single-product-page']);
  }

  redirectToComparison() {
    this.route.navigate(['product-comparison-page']);
  }

  redirectToHome() {
    this.route.navigate(['home-page']);
  }

  redirectToShop() {
    this.route.navigate(['shop-page']);
  }

  add(product: Product) {
    this.cartService.addToCart(product);
    // this.route.navigate(['cart-page']);
  }
}
