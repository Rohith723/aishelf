import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <section class="newsletter">
      <div class="newsletter-inner">
        <div class="nl-glow"></div>
        <div class="nl-content">
          <div class="nl-icon">📬</div>
          <h2>Stay Ahead of AI</h2>
          <p>Get the newest AI tools delivered to your inbox every week. No spam, just the best picks.</p>
          <div class="nl-form" *ngIf="!submitted">
            <input type="email" placeholder="Enter your email address..."
              [(ngModel)]="email" (keydown.enter)="submit()" />
            <button (click)="submit()" [disabled]="!email">Subscribe Free →</button>
          </div>
          <div class="nl-success" *ngIf="submitted">
            <span>🎉 You're on the list! Welcome to AIShelf.</span>
          </div>
          <p class="nl-note">Join 10,000+ AI enthusiasts · Unsubscribe anytime</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .newsletter { padding: 0 24px 60px; }
    .newsletter-inner { max-width: 1200px; margin: 0 auto; position: relative; background: rgba(139,92,246,0.06); border: 1px solid rgba(139,92,246,0.2); border-radius: 24px; padding: 56px 40px; text-align: center; overflow: hidden; }
    .nl-glow { position: absolute; top: -80px; left: 50%; transform: translateX(-50%); width: 400px; height: 300px; background: radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 70%); pointer-events: none; }
    .nl-content { position: relative; max-width: 520px; margin: 0 auto; }
    .nl-icon { font-size: 40px; margin-bottom: 16px; }
    h2 { font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 700; color: #fff; margin: 0 0 12px; letter-spacing: -1px; }
    p { color: #9ca3af; font-size: 15px; line-height: 1.7; margin: 0 0 28px; }
    .nl-form { display: flex; gap: 10px; max-width: 460px; margin: 0 auto 16px; }
    .nl-form input { flex: 1; padding: 13px 18px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; color: #fff; font-size: 14px; outline: none; transition: border-color 0.2s; }
    .nl-form input:focus { border-color: rgba(139,92,246,0.5); }
    .nl-form input::placeholder { color: #4b5563; }
    .nl-form button { padding: 13px 22px; background: linear-gradient(135deg, #7c3aed, #5b21b6); color: #fff; border: none; border-radius: 10px; font-size: 14px; font-weight: 600; cursor: pointer; white-space: nowrap; transition: opacity 0.2s; }
    .nl-form button:hover { opacity: 0.88; }
    .nl-form button:disabled { opacity: 0.4; cursor: not-allowed; }
    .nl-success { background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); border-radius: 10px; padding: 14px 24px; margin-bottom: 16px; color: #34d399; font-weight: 500; }
    .nl-note { font-size: 12px !important; color: #4b5563 !important; margin: 0 !important; }
    @media (max-width: 600px) { .nl-form { flex-direction: column; } .newsletter-inner { padding: 40px 24px; } }
  `]
})
export class Newsletter {
  email = '';
  submitted = false;
  submit() { if (this.email && this.email.includes('@')) { this.submitted = true; this.email = ''; } }
}