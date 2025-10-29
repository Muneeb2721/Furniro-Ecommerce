import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset, faShield, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})

export class Checkout {
  faHeadset = faHeadset;
  faTruck = faTruck;
  faShield = faShield;  
  faTrophy = faTrophy;

  constructor(private route:Router){}

  redirectToHome(){
    this.route.navigate(['home-page'])
  }
}