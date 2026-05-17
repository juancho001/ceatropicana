import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer-component/footer-component";
import { NavbarComponent } from './shared/navbar-component/navbar-component';
import { HeaderComponent } from "./shared/header-component/header-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ceatropicana');
}
