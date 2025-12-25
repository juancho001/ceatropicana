import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar.component/navbar.component";
import { NavbarInfo } from "./shared/navbarinfo/navbarinfo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, NavbarInfo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ceatropicana');
}
