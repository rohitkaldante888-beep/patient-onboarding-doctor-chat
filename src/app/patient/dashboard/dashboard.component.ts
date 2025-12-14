import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    // Slide down animation for mobile menu
    trigger('slideDown', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1, overflow: 'hidden' }),
        animate('200ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ]),
    
    // Fade in animation for modal backdrop
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0 }))
      ])
    ]),
    
    // Scale in animation for modal content
    trigger('scaleIn', [
      transition(':enter', [
        style({ transform: 'scale(0.9)', opacity: 0 }),
        animate('200ms ease-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ transform: 'scale(0.9)', opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent {
  showLogoutModal = false;
  mobileMenuOpen = false;
  logoutTime: Date | null = null;
  patientName = 'John Doe'; // Replace with real data from your service

  constructor(private authService: AuthService) {}

  /**
   * Toggle mobile menu visibility
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  /**
   * Open logout confirmation modal
   */
  openLogoutModal(): void {
    this.logoutTime = new Date();
    this.showLogoutModal = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  /**
   * Close logout modal
   */
  closeLogoutModal(): void {
    this.showLogoutModal = false;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  /**
   * Confirm and execute logout
   */
  confirmLogout(): void {
    this.authService.logout();
    this.showLogoutModal = false;
    document.body.style.overflow = 'auto';
    
    // Redirect to login page
    window.location.href = '/auth/sign-in';
  }
}