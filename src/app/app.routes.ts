import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Privacy } from './pages/privacy/privacy';
import { Terms } from './pages/terms/terms';
import { Submit } from './pages/submit/submit';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'privacy-policy', component: Privacy },
  { path: 'terms-of-use', component: Terms },
  { path: 'submit-tool', component: Submit },
  { path: '**', redirectTo: '' }
];