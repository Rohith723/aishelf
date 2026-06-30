import { Component } from '@angular/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  template: `
    <div class="page">
      <div class="page-hero">
        <h1>Privacy Policy</h1>
        <p>Last updated: June 2026</p>
      </div>

      <div class="content">
        <section>
          <h2>Overview</h2>
          <p>This Privacy Policy explains how AIShelf ("we," "us," or "our") collects, uses, and protects information when you visit aishelf.dev (the "Site"). We are committed to protecting your privacy and being transparent about our data practices.</p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We collect limited information automatically when you visit our Site, including your IP address, browser type, device type, pages visited, and time spent on the Site. This data helps us understand how visitors use AIShelf and improve the experience.</p>
          <p>If you subscribe to our newsletter, we collect your email address solely for the purpose of sending you updates about new AI tools.</p>
        </section>

        <section>
          <h2>Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar tracking technologies to analyze site traffic and serve relevant advertising. This includes Google Analytics and Google AdSense, which may place cookies on your device to collect data about your browsing behavior across websites.</p>
          <p>Google AdSense uses cookies to serve ads based on your prior visits to this and other websites. You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ads Settings</a>.</p>
        </section>

        <section>
          <h2>Third-Party Advertising</h2>
          <p>We use Google AdSense to display advertisements on our Site. Third-party vendors, including Google, use cookies to serve ads based on a user's previous visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.</p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>We use collected information to operate and improve the Site, understand visitor behavior, respond to inquiries, send newsletter updates (only if you subscribe), and serve relevant advertisements.</p>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <p>We do not sell your personal information. We may share data with service providers (such as analytics and advertising partners) who help us operate the Site, subject to confidentiality obligations.</p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have rights to access, correct, or delete your personal data. To exercise these rights, contact us at <a href="mailto:hello@aishelf.dev">hello&#64;aishelf.dev</a>.</p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>AIShelf is not directed at children under 13, and we do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at <a href="mailto:hello@aishelf.dev">hello&#64;aishelf.dev</a>.</p>
        </section>
      </div>
    </div>
  `,
  styles: [`
    .page { max-width: 760px; margin: 0 auto; padding: 60px 24px 80px; }
    .page-hero { text-align: center; margin-bottom: 56px; }
    .page-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: 42px; font-weight: 700; color: #fff; margin: 0 0 16px; letter-spacing: -1px; }
    .page-hero p { color: #6b7280; font-size: 14px; }
    .content section { margin-bottom: 32px; }
    .content h2 { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 600; color: #f3f4f6; margin: 0 0 12px; }
    .content p { color: #9ca3af; font-size: 15px; line-height: 1.8; margin: 0 0 12px; }
    .content a { color: #a78bfa; text-decoration: none; }
    .content a:hover { text-decoration: underline; }
  `]
})
export class Privacy {}