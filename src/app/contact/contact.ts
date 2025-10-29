import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClock, faHeadset, faLocation, faPhone, faShieldAlt, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  faAddress = faLocation;
  faCall = faPhone;
  faTime = faClock;
  faHeadset = faHeadset;
    faTruck = faTruck;
    faShield = faShieldAlt;  
    faTrophy = faTrophy;

  constructor(private route: Router ){}

  redirectToHome() {
    this.route.navigate(['home-page']);
  }
}