import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span>📚 AIShelf</span>
          <p>Your curated shelf of the best AI tools on the internet. Discover, compare, and find the perfect AI tool for any task.</p>
          <p class="footer-copy-small">© 2026 AIShelf. All rights reserved.</p>
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <h4>Directory</h4>
            <a routerLink="/">Browse All</a>
            <a routerLink="/submit-tool">Submit a Tool</a>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <a routerLink="/about">About Us</a>
            <a routerLink="/privacy-policy">Privacy Policy</a>
            <a routerLink="/terms-of-use">Terms of Use</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@aishelf.dev">hello&#64;aishelf.dev</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Built with ❤️ for the AI community · AIShelf is not affiliated with any listed tools.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer { margin-top: 80px; border-top: 1px solid rgba(255,255,255,0.06); padding: 48px 24px 24px; }
    .footer-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 40px; margin-bottom: 40px; }
    .footer-brand { max-width: 300px; }
    .footer-brand span { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; color: #fff; display: block; margin-bottom: 10px; }
    .footer-brand p { color: #6b7280; font-size: 14px; margin: 0 0 6px; line-height: 1.6; }
    .footer-copy-small { font-size: 12px !important; color: #4b5563 !important; }
    .footer-cols { display: flex; gap: 48px; flex-wrap: wrap; }
    .footer-col { display: flex; flex-direction: column; gap: 10px; }
    .footer-col h4 { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 600; color: #fff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
    .footer-col a { color: #9ca3af; text-decoration: none; font-size: 14px; transition: color 0.2s; }
    .footer-col a:hover { color: #fff; }
    .footer-bottom { max-width: 1200px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.04); text-align: center; }
    .footer-bottom p { color: #4b5563; font-size: 13px; }
    @media (max-width: 600px) { .footer-cols { flex-direction: column; gap: 24px; } }
  `]
})
export class Footer {}