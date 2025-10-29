import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShare, faHeart, faCodeCompare, faArrowRight, faArrowLeft, faMinus, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Cartservice, Product } from '../service/cartservice';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  faShare = faShare;
  faCompare = faCodeCompare;
  faHeart = faHeart;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faLineChart = faMinus;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faCircle = faCircle;

  // Array to track overlays for product cards 2-8 (index 0 = card 2, index 6 = card 8)
  showOverlays: boolean[] = [false, false, false, false, false, false, false, false, false];

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
      discountAmount: 150,
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

  constructor(private route: Router, private cartService: Cartservice) { }

  ngOnInit(): void {
  }

  showOverlay(idx: number, isVisible: boolean) {
    this.showOverlays = this.showOverlays.map((_, i) => i === idx ? isVisible : false);
  }

  show() {
    this.route.navigate(['cart-page'])
  }

  // redirectToCart() {
  //   this.route.navigate(['cart-page']);
  // }

  redirectToComparison() {
    this.route.navigate(['product-comparison-page']);
  }

  productDetail() {
    this.route.navigate(['single-product-page']);
  }

  redirectToShop() {
    this.route.navigate(['shop-page']);
  }

  add(product: Product) {
    this.cartService.addToCart(product);
    // this.route.navigate(['cart-page']);
  }

  // Carousel Logic
  activeSlide = 0; // index 0, 1, 2 for your 3 images

  slides = [
    {
      image: 'assets/imgHome/image20.png',
      title: 'Inner Peace',
      subtitle: '01 Bed Room',
    },
    {
      image: 'assets/imgHome/image15.png',
      title: 'Outer Peace',
      subtitle: '02 Bed Room',
    },
    {
      image: 'assets/imgHome/image11.png',
      title: 'Mental Peace',
      subtitle: '03 Lounge',
    }
  ];

  get currentSlide() {
    return this.slides[this.activeSlide];
  }

  get nextSlide() {
    return this.slides[(this.activeSlide + 1) % this.slides.length];
  }

  get prevSlide() {
    return this.slides[(this.activeSlide + 2) % this.slides.length];
  }

  nextSlideFn() {
    this.activeSlide = (this.activeSlide + 1) % this.slides.length;
  }

  goToSlide(index: number) {
    this.activeSlide = index;
  }
}