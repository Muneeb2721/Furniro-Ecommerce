import { Component } from '@angular/core';
import { Frame } from '../frame/frame';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Frame],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  constructor(private route: Router) { }

  redirectToHome() {
    this.route.navigate(['home-page']);
  }
}
