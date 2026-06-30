import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Navbar, RouterOutlet, Footer],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [`:host { display: block; min-height: 100vh; }`]
})
export class App {
  title = 'AIShelf';
}