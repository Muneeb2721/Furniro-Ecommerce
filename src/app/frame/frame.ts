import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilter, faGridHorizontal, faHeadset, faList, faShieldAlt, faTrophy, faTruck } from '@fortawesome/free-solid-svg-icons';
import { faShare, faHeart, faCodeCompare, faArrowRight, faArrowLeft, faMinus, faCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './frame.html',
  styleUrl: './frame.css'
})
export class Frame {
  faShield = faShieldAlt;
  faTrophy = faTrophy;
  faTruck = faTruck
  faHeadset = faHeadset;
}
