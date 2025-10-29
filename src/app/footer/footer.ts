import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  constructor(private route:Router){}

  redirectToHome() {
    this.route.navigate(['home-page']);
  }

  redirectToShop() {
    this.route.navigate(['shop-page']);
  }

  redirectToAbout() {
    this.route.navigate(['about-page']);
  }

  redirectToContact() {
    this.route.navigate(['contact-page']);
  }
  redirectToBlog(){
    this.route.navigate(['blog-page']);
  }
}
