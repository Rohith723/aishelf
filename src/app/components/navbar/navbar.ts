import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="nav-inner">
        <a routerLink="/" class="brand">
          <span class="brand-icon">📚</span>
          <span class="brand-name">AIShelf</span>
          <span class="brand-tag">Tools Directory</span>
        </a>

        <div class="nav-links" [class.open]="menuOpen">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Browse</a>
          <a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About</a>
          <a routerLink="/submit-tool" class="submit-btn" (click)="closeMenu()">+ Submit Tool</a>
        </div>

        <button class="hamburger" (click)="menuOpen = !menuOpen" [class.active]="menuOpen">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar { position: sticky; top: 0; z-index: 100; background: rgba(5,5,15,0.85); backdrop-filter: blur(16px); border-bottom: 1px solid rgba(139,92,246,0.15); }
    .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; justify-content: space-between; position: relative; }
    .brand { display: flex; align-items: center; gap: 8px; text-decoration: none; }
    .brand-icon { font-size: 22px; }
    .brand-name { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 20px; color: #fff; letter-spacing: -0.5px; }
    .brand-tag { font-size: 11px; background: rgba(139,92,246,0.2); color: #a78bfa; padding: 2px 8px; border-radius: 20px; border: 1px solid rgba(139,92,246,0.3); }
    .nav-links { display: flex; align-items: center; gap: 28px; }
    .nav-links a { color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s; }
    .nav-links a:hover, .nav-links a.active { color: #fff; }
    .submit-btn { background: linear-gradient(135deg, #7c3aed, #6d28d9) !important; color: #fff !important; padding: 8px 18px !important; border-radius: 8px; font-weight: 500; }
    .submit-btn:hover { opacity: 0.9; }
    .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 8px; }
    .hamburger span { width: 22px; height: 2px; background: #fff; transition: all 0.25s; }
    .hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    @media (max-width: 700px) {
      .brand-tag { display: none; }
      .hamburger { display: flex; }
      .nav-links {
        position: absolute; top: 64px; left: 0; right: 0;
        background: #0a0a18; border-bottom: 1px solid rgba(139,92,246,0.15);
        flex-direction: column; align-items: flex-start; gap: 0;
        max-height: 0; overflow: hidden; transition: max-height 0.3s ease;
      }
      .nav-links.open { max-height: 300px; }
      .nav-links a { width: 100%; padding: 16px 24px; box-sizing: border-box; border-bottom: 1px solid rgba(255,255,255,0.05); }
      .submit-btn { margin: 12px 24px; width: calc(100% - 48px); text-align: center; }
    }
  `]
})
export class Navbar {
  menuOpen = false;
  closeMenu() { this.menuOpen = false; }
}