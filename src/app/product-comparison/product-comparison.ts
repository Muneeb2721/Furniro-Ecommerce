import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faGridHorizontal, faHeadset, faList, faShieldAlt, faStar, faStarHalf, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faShare, faHeart, faCodeCompare, faArrowRight, faArrowLeft, faMinus, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-comparison',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './product-comparison.html',
  styleUrl: './product-comparison.css'
})
export class ProductComparison {
    faTrophy = faTrophy;
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
    faChevronDown = faChevronDown
    faCircle = faCircle;
    faShield = faShieldAlt;
    faTruck = faTruck
    faHeadset = faHeadset;
    faStar = faStar
    faStarHalf = faStarHalf

    constructor(private route: Router){ 
    }

    redirectToHome() {
      this.route.navigate(['home-page']);
    }
}