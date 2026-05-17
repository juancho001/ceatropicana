import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'navbar-component',
  imports: [],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css',
})
export class NavbarComponent {
  isScrolled = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 10);
  }
}
