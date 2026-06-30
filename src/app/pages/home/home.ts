import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ToolsService } from '../../services/tools';
import { FilterBar } from '../../components/filter-bar/filter-bar';
import { ToolCard } from '../../components/tool-card/tool-card';
import { Hero } from '../../components/hero/hero';
import { Newsletter } from '../../components/newsletter/newsletter';
import { Tool } from '../../models/tool';

@Component({
  selector: 'app-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor, NgIf, FilterBar, ToolCard, Hero, Newsletter],
  template: `
    <app-hero [totalCount]="totalCount"></app-hero>

    <section class="new-section" *ngIf="!isFiltered">
      <div class="section-wrap">
        <div class="section-header">
          <h2>🆕 New This Week</h2>
          <span class="count">{{ newTools.length }} tools</span>
        </div>
        <div class="new-grid">
          <app-tool-card *ngFor="let tool of newTools; trackBy: trackById" [tool]="tool"></app-tool-card>
        </div>
      </div>
    </section>

    <app-filter-bar [categories]="categories" [totalCount]="totalCount" (filterChange)="onFilter($event)"></app-filter-bar>

    <main class="tools-section">
      <div class="section-header">
        <h2>{{ sectionTitle }}</h2>
        <span class="count">{{ filteredTools.length }} tools</span>
      </div>

      <div *ngIf="filteredTools.length === 0" class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No tools found</h3>
        <p>Try a different search or category.</p>
        <div class="suggestions">
          <p>Popular searches:</p>
          <div class="suggestion-chips">
            <button (click)="quickSearch('image')">🎨 Image</button>
            <button (click)="quickSearch('coding')">💻 Coding</button>
            <button (click)="quickSearch('free')">🆓 Free</button>
            <button (click)="quickSearch('video')">🎬 Video</button>
          </div>
        </div>
      </div>

      <div class="tools-grid">
        <app-tool-card *ngFor="let tool of filteredTools; trackBy: trackById" [tool]="tool"></app-tool-card>
      </div>
    </main>

    <app-newsletter></app-newsletter>

    <button class="back-to-top" *ngIf="showBackToTop" (click)="scrollToTop()">↑</button>
  `,
  styles: [`
    .new-section { padding: 0 0 48px; }
    .section-wrap, .tools-section { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
    .tools-section { padding-bottom: 60px; }
    .section-header { display: flex; align-items: baseline; gap: 12px; margin-bottom: 24px; }
    .section-header h2 { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 600; color: #f3f4f6; margin: 0; }
    .count { font-size: 13px; color: #6b7280; background: rgba(255,255,255,0.05); padding: 3px 10px; border-radius: 20px; }
    .new-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
    .tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
    .empty-state { text-align: center; padding: 80px 24px; color: #6b7280; }
    .empty-icon { font-size: 48px; margin-bottom: 16px; }
    .empty-state h3 { color: #9ca3af; margin: 0 0 8px; font-size: 18px; }
    .empty-state p { margin: 0 0 20px; font-size: 14px; }
    .suggestions p { font-size: 13px; color: #6b7280; margin-bottom: 10px; }
    .suggestion-chips { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
    .suggestion-chips button { padding: 7px 16px; border-radius: 20px; border: 1px solid rgba(139,92,246,0.3); background: rgba(139,92,246,0.1); color: #a78bfa; font-size: 13px; cursor: pointer; transition: all 0.2s; }
    .suggestion-chips button:hover { background: rgba(139,92,246,0.2); }
    .back-to-top { position: fixed; bottom: 28px; right: 28px; width: 44px; height: 44px; background: linear-gradient(135deg, #7c3aed, #5b21b6); border: none; border-radius: 50%; color: #fff; font-size: 18px; cursor: pointer; box-shadow: 0 4px 20px rgba(124,58,237,0.4); transition: all 0.2s; z-index: 99; display: flex; align-items: center; justify-content: center; }
    .back-to-top:hover { transform: translateY(-2px); }
    @media (max-width: 640px) { .tools-grid, .new-grid { grid-template-columns: 1fr; } }
  `]
})
export class Home implements OnInit {
  allTools: Tool[] = [];
  filteredTools: Tool[] = [];
  newTools: Tool[] = [];
  categories: string[] = [];
  totalCount = 0;
  sectionTitle = 'All AI Tools';
  isFiltered = false;
  showBackToTop = false;

  constructor(private toolsService: ToolsService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.allTools = this.toolsService.getAll();
    this.filteredTools = this.allTools;
    this.newTools = this.toolsService.getNew();
    this.categories = this.toolsService.getCategories();
    this.totalCount = this.toolsService.getTotalCount();
    window.addEventListener('scroll', () => {
      this.showBackToTop = window.scrollY > 400;
      this.cdr.markForCheck();
    });
  }

  onFilter(event: { category: string; search: string; pricing: string; sort: string }) {
    this.filteredTools = this.toolsService.filter(event.category, event.search, event.pricing, event.sort);
    this.isFiltered = !!(event.category || event.search || event.pricing);
    this.sectionTitle = event.category ? `${event.category} Tools`
      : event.search ? `Results for "${event.search}"` : 'All AI Tools';
    this.cdr.markForCheck();
  }

  quickSearch(term: string) {
    this.filteredTools = this.toolsService.filter('', term, '', '');
    this.sectionTitle = `Results for "${term}"`;
    this.isFiltered = true;
    this.cdr.markForCheck();
  }

  scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  trackById(_: number, tool: Tool): number { return tool.id; }
}