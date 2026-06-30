import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="page">
      <div class="page-hero">
        <h1>About AIShelf</h1>
        <p>Your trusted source for discovering the best AI tools, curated by humans, updated weekly.</p>
      </div>

      <div class="content">
        <section>
          <h2>Our Mission</h2>
          <p>AIShelf was built with a simple goal: make it easy for anyone to find the right AI tool for their needs, without sifting through hundreds of marketing pages and confusing comparisons.</p>
          <p>The AI landscape moves incredibly fast. New tools launch every week, existing tools add new features, and pricing models shift constantly. We track these changes so you don't have to.</p>
        </section>

        <section>
          <h2>What We Do</h2>
          <p>We manually research, test, and categorize AI tools across writing, image generation, video, coding, productivity, audio, SEO, design, and AI agents. Every tool listed on AIShelf includes a clear description, accurate pricing information, and a direct link to the official website.</p>
        </section>

        <section>
          <h2>How We Choose Tools</h2>
          <p>We prioritize tools that are actively maintained, have a genuine user base, and provide real value. We avoid listing abandoned projects or tools with misleading pricing claims. If you spot outdated information, please let us know — we update the directory regularly.</p>
        </section>

        <section>
          <h2>Independence</h2>
          <p>AIShelf is independently operated. We are not affiliated with, sponsored by, or owned by any of the companies listed in our directory. Some listings may use affiliate links in the future, which will always be disclosed.</p>
        </section>

        <section>
          <h2>Get in Touch</h2>
          <p>Have a tool you'd like listed? Found an error? Want to partner with us? Reach out anytime at <a href="mailto:hello@aishelf.dev">hello&#64;aishelf.dev</a>.</p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .page { max-width: 760px; margin: 0 auto; padding: 60px 24px 80px; }
    .page-hero { text-align: center; margin-bottom: 56px; }
    .page-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: 42px; font-weight: 700; color: #fff; margin: 0 0 16px; letter-spacing: -1px; }
    .page-hero p { color: #9ca3af; font-size: 17px; line-height: 1.7; max-width: 540px; margin: 0 auto; }
    .content section { margin-bottom: 36px; }
    .content h2 { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 600; color: #f3f4f6; margin: 0 0 12px; }
    .content p { color: #9ca3af; font-size: 15px; line-height: 1.8; margin: 0 0 12px; }
    .content a { color: #a78bfa; text-decoration: none; }
    .content a:hover { text-decoration: underline; }
  `]
})
export class About {}