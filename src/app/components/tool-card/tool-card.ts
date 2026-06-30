import { Component, Input } from '@angular/core';
import { NgClass, NgIf, NgFor } from '@angular/common';
import { Tool } from '../../models/tool';

@Component({
  selector: 'app-tool-card',
  standalone: true,
  imports: [NgClass, NgIf, NgFor],
  template: `
    <div class="card" [ngClass]="{ featured: tool.featured }">
      <div class="card-top">
        <div class="tool-icon">{{ tool.icon }}</div>
        <div class="badges">
          <span *ngIf="tool.new" class="badge badge-new">New</span>
          <span *ngIf="tool.featured" class="badge badge-featured">⭐ Featured</span>
          <span class="badge" [ngClass]="pricingClass(tool.pricing)">{{ tool.pricing }}</span>
        </div>
      </div>
      <h3 class="tool-name">{{ tool.name }}</h3>
      <p class="tool-desc">{{ tool.description }}</p>
      <div class="tags">
        <span *ngFor="let tag of tool.tags.slice(0, 3)" class="tag">#{{ tag }}</span>
      </div>
      <div class="card-footer">
        <span class="category">{{ tool.category }}</span>
        <a [href]="tool.url" target="_blank" rel="noopener" class="visit-btn">Visit Tool →</a>
      </div>
    </div>
  `,
  styles: [`
    .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; transition: all 0.25s ease; }
    .card:hover { background: rgba(139,92,246,0.06); border-color: rgba(139,92,246,0.3); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(139,92,246,0.12); }
    .card.featured { border-color: rgba(139,92,246,0.25); background: rgba(139,92,246,0.05); }
    .card-top { display: flex; justify-content: space-between; align-items: flex-start; }
    .tool-icon { font-size: 32px; line-height: 1; }
    .badges { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
    .badge { font-size: 11px; padding: 3px 9px; border-radius: 20px; font-weight: 500; }
    .badge-new { background: rgba(16,185,129,0.15); color: #34d399; border: 1px solid rgba(16,185,129,0.3); }
    .badge-featured { background: rgba(245,158,11,0.12); color: #fbbf24; border: 1px solid rgba(245,158,11,0.25); }
    .free { background: rgba(16,185,129,0.12); color: #6ee7b7; border: 1px solid rgba(16,185,129,0.2); }
    .freemium { background: rgba(59,130,246,0.12); color: #93c5fd; border: 1px solid rgba(59,130,246,0.2); }
    .paid { background: rgba(239,68,68,0.1); color: #fca5a5; border: 1px solid rgba(239,68,68,0.2); }
    .tool-name { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 600; color: #f3f4f6; margin: 0; }
    .tool-desc { font-size: 14px; color: #9ca3af; line-height: 1.6; margin: 0; flex: 1; }
    .tags { display: flex; gap: 6px; flex-wrap: wrap; }
    .tag { font-size: 11px; color: #6b7280; background: rgba(255,255,255,0.04); padding: 3px 8px; border-radius: 6px; }
    .card-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.05); }
    .category { font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; }
    .visit-btn { background: linear-gradient(135deg, #7c3aed, #5b21b6); color: #fff; text-decoration: none; padding: 7px 16px; border-radius: 8px; font-size: 13px; font-weight: 500; transition: opacity 0.2s; }
    .visit-btn:hover { opacity: 0.85; }
  `]
})
export class ToolCard {
  @Input() tool!: Tool;
  pricingClass(pricing: string): string {
    return ({ 'Free': 'free', 'Freemium': 'freemium', 'Paid': 'paid' } as Record<string,string>)[pricing] ?? '';
  }
}