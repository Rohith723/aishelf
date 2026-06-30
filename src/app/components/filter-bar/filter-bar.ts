import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgClass, NgIf } from '@angular/common';
import { ToolsService } from '../../services/tools';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [FormsModule, NgFor, NgClass, NgIf],
  template: `
    <div class="filter-wrap" id="tools">
      <div class="search-row">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Search 63+ AI tools..."
            [(ngModel)]="searchVal" (ngModelChange)="onSearch($event)" />
          <button *ngIf="searchVal" class="clear-btn" (click)="clearSearch()">✕</button>
        </div>
        <div class="right-controls">
          <div class="pricing-tabs">
            <button *ngFor="let p of pricingOptions"
              [ngClass]="{ active: selectedPricing === p }"
              (click)="onPricing(p)">{{ p || 'All' }}</button>
          </div>
          <select class="sort-select" [(ngModel)]="selectedSort" (ngModelChange)="onSort($event)">
            <option value="">⭐ Featured</option>
            <option value="new">🆕 Newest</option>
            <option value="az">🔤 A → Z</option>
          </select>
        </div>
      </div>
      <div class="category-chips" id="categories">
        <button class="chip" [ngClass]="{ active: !selectedCategory }" (click)="onCategory('')">
          All <span class="chip-count">{{ totalCount }}</span>
        </button>
        <button *ngFor="let cat of categories" class="chip"
          [ngClass]="{ active: selectedCategory === cat }"
          (click)="onCategory(cat)">
          {{ getCatIcon(cat) }} {{ cat }}
          <span class="chip-count">{{ getCatCount(cat) }}</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .filter-wrap { max-width: 1200px; margin: 0 auto; padding: 0 24px 32px; }
    .search-row { display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .search-box { flex: 1; min-width: 260px; position: relative; display: flex; align-items: center; }
    .search-icon { position: absolute; left: 14px; font-size: 16px; pointer-events: none; }
    .search-box input { width: 100%; padding: 13px 40px 13px 42px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; color: #fff; font-size: 15px; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
    .search-box input:focus { border-color: rgba(139,92,246,0.5); }
    .search-box input::placeholder { color: #4b5563; }
    .clear-btn { position: absolute; right: 12px; background: rgba(255,255,255,0.1); border: none; color: #9ca3af; cursor: pointer; width: 22px; height: 22px; border-radius: 50%; font-size: 11px; display: flex; align-items: center; justify-content: center; }
    .clear-btn:hover { background: rgba(255,255,255,0.2); color: #fff; }
    .right-controls { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
    .pricing-tabs { display: flex; gap: 6px; }
    .pricing-tabs button { padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: transparent; color: #9ca3af; font-size: 13px; cursor: pointer; transition: all 0.2s; white-space: nowrap; }
    .pricing-tabs button:hover { border-color: rgba(139,92,246,0.4); color: #fff; }
    .pricing-tabs button.active { background: rgba(139,92,246,0.2); border-color: rgba(139,92,246,0.5); color: #c4b5fd; }
    .sort-select { padding: 10px 14px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.05); color: #9ca3af; font-size: 13px; cursor: pointer; outline: none; }
    .sort-select option { background: #1a1a2e; color: #fff; }
    .category-chips { display: flex; gap: 8px; flex-wrap: wrap; }
    .chip { padding: 8px 14px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.08); background: transparent; color: #9ca3af; font-size: 13px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
    .chip:hover { border-color: rgba(139,92,246,0.4); color: #e5e7eb; }
    .chip.active { background: rgba(139,92,246,0.15); border-color: #7c3aed; color: #a78bfa; font-weight: 500; }
    .chip-count { background: rgba(255,255,255,0.08); font-size: 11px; padding: 1px 6px; border-radius: 10px; color: #6b7280; }
    .chip.active .chip-count { background: rgba(139,92,246,0.3); color: #c4b5fd; }
    @media (max-width: 640px) { .right-controls { width: 100%; } .pricing-tabs { flex-wrap: wrap; } }
  `]
})
export class FilterBar implements OnInit {
  @Input() categories: string[] = [];
  @Input() totalCount = 0;
  @Output() filterChange = new EventEmitter<{ category: string; search: string; pricing: string; sort: string }>();

  selectedCategory = '';
  selectedPricing = '';
  selectedSort = '';
  searchVal = '';
  pricingOptions = ['', 'Free', 'Freemium', 'Paid'];

  constructor(private toolsService: ToolsService) {}
  ngOnInit() {}

  onCategory(cat: string) { this.selectedCategory = cat; this.emit(); }
  onPricing(p: string) { this.selectedPricing = p; this.emit(); }
  onSearch(val: string) { this.searchVal = val; this.emit(); }
  onSort(val: string) { this.selectedSort = val; this.emit(); }
  clearSearch() { this.searchVal = ''; this.emit(); }
  emit() { this.filterChange.emit({ category: this.selectedCategory, search: this.searchVal, pricing: this.selectedPricing, sort: this.selectedSort }); }
  getCatCount(cat: string): number { return this.toolsService.getCategoryCount(cat); }
  getCatIcon(cat: string): string {
    const icons: Record<string, string> = { Writing: '✍️', Image: '🎨', Video: '🎬', Coding: '💻', Productivity: '⚡', Audio: '🎵', SEO: '📈', Design: '🖌️', Agents: '🤖' };
    return icons[cat] || '🔧';
  }
}