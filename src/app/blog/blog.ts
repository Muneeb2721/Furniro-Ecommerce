import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeadset, faSearch, faShieldAlt, faTrash, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { Frame } from '../frame/frame';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, Frame],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  faDelete = faTrash;
  faTrophy = faTrophy;
  faShield = faShieldAlt;
  faTruck = faTruck;
  faHeadset = faHeadset;
  faSearch = faSearch

  // searchIcon will be accessed at runtime, not at class property initialization
  constructor( private route: Router){}

  removeSearchIcon() {
    const searchIcon = document.getElementById('search-icon');
    if (searchIcon) {
      searchIcon.classList.add('invisible');
    }
  }

  showSearchIcon() {
    const searchIcon = document.getElementById('search-icon');
    if (searchIcon) {
      searchIcon.classList.remove('invisible');
    }
  }

  redirectToHome() {
    this.route.navigate(['home-page'])
  }
}
