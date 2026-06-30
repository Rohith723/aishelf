import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="hero-content">
        <div class="hero-badge">📚 Your Personal AI Tools Shelf</div>
        <h1 class="hero-title">
          The Smartest<br>
          <span class="gradient-text">AI Shelf</span> on the Web
        </h1>
        <p class="hero-sub">
          AIShelf is your curated collection of the best AI tools on the internet.
          Browse, filter, and find the perfect tool — all in one place, completely free.
        </p>
        <div class="hero-stats">
          <div class="stat"><strong>{{ totalCount }}+</strong><span>Tools</span></div>
          <div class="divider"></div>
          <div class="stat"><strong>9</strong><span>Categories</span></div>
          <div class="divider"></div>
          <div class="stat"><strong>Free</strong><span>Always</span></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero { position: relative; padding: 80px 24px 60px; text-align: center; overflow: hidden; }
    .hero-glow { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(139,92,246,0.25) 0%, transparent 70%); pointer-events: none; }
    .hero-content { position: relative; max-width: 680px; margin: 0 auto; }
    .hero-badge { display: inline-block; background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.3); color: #a78bfa; padding: 6px 16px; border-radius: 20px; font-size: 13px; font-weight: 500; margin-bottom: 24px; }
    .hero-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(40px, 6vw, 68px); font-weight: 700; line-height: 1.1; color: #fff; margin: 0 0 20px; letter-spacing: -2px; }
    .gradient-text { background: linear-gradient(135deg, #8b5cf6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .hero-sub { font-size: 17px; color: #9ca3af; line-height: 1.7; margin: 0 0 40px; }
    .hero-stats { display: flex; justify-content: center; align-items: center; gap: 32px; }
    .stat { display: flex; flex-direction: column; gap: 2px; }
    .stat strong { font-size: 24px; font-weight: 700; color: #fff; font-family: 'Space Grotesk', sans-serif; }
    .stat span { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; }
    .divider { width: 1px; height: 40px; background: rgba(255,255,255,0.08); }
  `]
})
export class Hero {
  @Input() totalCount = 0;
}