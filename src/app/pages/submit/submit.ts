import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-submit',
  standalone: true,
  imports: [FormsModule, NgIf],
  template: `
    <div class="page">
      <div class="page-hero">
        <div class="hero-icon">🚀</div>
        <h1>Submit Your AI Tool</h1>
        <p>Get your AI tool featured in front of thousands of monthly visitors. Free listing, reviewed within 48 hours.</p>
      </div>

      <div class="form-card" *ngIf="!submitted">
        <div class="field-row">
          <div class="field">
            <label>Tool Name *</label>
            <input type="text" [(ngModel)]="form.name" placeholder="e.g. ChatGPT" />
          </div>
          <div class="field">
            <label>Website URL *</label>
            <input type="url" [(ngModel)]="form.url" placeholder="https://example.com" />
          </div>
        </div>

        <div class="field">
          <label>Short Description * <span class="hint">(max 150 characters)</span></label>
          <textarea [(ngModel)]="form.description" maxlength="150" rows="3" placeholder="What does your tool do? Be specific and concise."></textarea>
        </div>

        <div class="field-row">
          <div class="field">
            <label>Category *</label>
            <select [(ngModel)]="form.category">
              <option value="">Select category</option>
              <option>Writing</option>
              <option>Image</option>
              <option>Video</option>
              <option>Coding</option>
              <option>Productivity</option>
              <option>Audio</option>
              <option>SEO</option>
              <option>Design</option>
              <option>Agents</option>
            </select>
          </div>
          <div class="field">
            <label>Pricing Model *</label>
            <select [(ngModel)]="form.pricing">
              <option value="">Select pricing</option>
              <option>Free</option>
              <option>Freemium</option>
              <option>Paid</option>
            </select>
          </div>
        </div>

        <div class="field">
          <label>Your Email *</label>
          <input type="email" [(ngModel)]="form.email" placeholder="you@company.com" />
        </div>

        <button class="submit-btn" (click)="submit()" [disabled]="!isValid()">
          Submit for Review →
        </button>
        <p class="form-note">We review every submission manually. Tools are typically listed within 48 hours if approved.</p>
      </div>

      <div class="success-card" *ngIf="submitted">
        <div class="success-icon">✅</div>
        <h2>Submission Received!</h2>
        <p>Thanks for submitting <strong>{{ form.name }}</strong>. Our team will review it and reach out at {{ form.email }} within 48 hours.</p>
      </div>
    </div>
  `,
  styles: [`
    .page { max-width: 640px; margin: 0 auto; padding: 60px 24px 80px; }
    .page-hero { text-align: center; margin-bottom: 40px; }
    .hero-icon { font-size: 40px; margin-bottom: 16px; }
    .page-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: 36px; font-weight: 700; color: #fff; margin: 0 0 14px; letter-spacing: -1px; }
    .page-hero p { color: #9ca3af; font-size: 15px; line-height: 1.7; max-width: 480px; margin: 0 auto; }
    .form-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 32px; display: flex; flex-direction: column; gap: 20px; }
    .field-row { display: flex; gap: 16px; }
    .field { flex: 1; display: flex; flex-direction: column; gap: 8px; }
    label { font-size: 13px; font-weight: 500; color: #e5e7eb; }
    .hint { color: #6b7280; font-weight: 400; }
    input, select, textarea { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 12px 14px; color: #fff; font-size: 14px; font-family: inherit; outline: none; transition: border-color 0.2s; }
    input:focus, select:focus, textarea:focus { border-color: rgba(139,92,246,0.5); }
    textarea { resize: vertical; }
    select option { background: #1a1a2e; }
    .submit-btn { padding: 14px; background: linear-gradient(135deg, #7c3aed, #5b21b6); color: #fff; border: none; border-radius: 10px; font-size: 15px; font-weight: 600; cursor: pointer; transition: opacity 0.2s; margin-top: 8px; }
    .submit-btn:hover { opacity: 0.88; }
    .submit-btn:disabled { opacity: 0.35; cursor: not-allowed; }
    .form-note { font-size: 12px; color: #6b7280; text-align: center; margin: 0; }
    .success-card { text-align: center; background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.25); border-radius: 16px; padding: 48px 32px; }
    .success-icon { font-size: 48px; margin-bottom: 16px; }
    .success-card h2 { font-family: 'Space Grotesk', sans-serif; color: #fff; margin: 0 0 12px; }
    .success-card p { color: #9ca3af; line-height: 1.7; margin: 0; }
    @media (max-width: 600px) { .field-row { flex-direction: column; } .form-card { padding: 24px; } }
  `]
})
export class Submit {
  form = { name: '', url: '', description: '', category: '', pricing: '', email: '' };
  submitted = false;

  isValid(): boolean {
    return !!(this.form.name && this.form.url && this.form.description && this.form.category && this.form.pricing && this.form.email);
  }

  submit() {
    if (this.isValid()) this.submitted = true;
  }
}