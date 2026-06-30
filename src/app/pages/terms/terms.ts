import { Component } from '@angular/core';

@Component({
  selector: 'app-terms',
  standalone: true,
  template: `
    <div class="page">
      <div class="page-hero">
        <h1>Terms of Use</h1>
        <p>Last updated: June 2026</p>
      </div>

      <div class="content">
        <section>
          <h2>Acceptance of Terms</h2>
          <p>By accessing or using AIShelf ("the Site"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site.</p>
        </section>

        <section>
          <h2>Description of Service</h2>
          <p>AIShelf is a directory website that lists and describes third-party AI tools. We provide information for discovery purposes only and do not host, operate, or control any of the listed tools.</p>
        </section>

        <section>
          <h2>No Endorsement or Warranty</h2>
          <p>Listings on AIShelf are for informational purposes only and do not constitute an endorsement or guarantee of any tool's quality, safety, or performance. We make no warranties regarding the accuracy, completeness, or reliability of any information on the Site. Pricing and features of listed tools may change without notice — always verify details on the official tool website before use.</p>
        </section>

        <section>
          <h2>Third-Party Links</h2>
          <p>The Site contains links to third-party websites that are not owned or controlled by AIShelf. We are not responsible for the content, privacy policies, or practices of any third-party websites.</p>
        </section>

        <section>
          <h2>User Submissions</h2>
          <p>If you submit a tool for listing consideration, you confirm that the information provided is accurate and that you have the right to share it. We reserve the right to accept, reject, or remove any submission at our discretion.</p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>All original content on AIShelf, including text, design, and layout, is the property of AIShelf unless otherwise noted. Tool names, logos, and trademarks belong to their respective owners.</p>
        </section>

        <section>
          <h2>Advertising</h2>
          <p>This Site displays advertisements served by Google AdSense and potentially other advertising networks. We are not responsible for the content of third-party advertisements.</p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>AIShelf shall not be liable for any damages arising from your use of the Site or reliance on any information contained within it, including damages resulting from your use of any third-party tool listed on the Site.</p>
        </section>

        <section>
          <h2>Changes to Terms</h2>
          <p>We may revise these Terms of Use at any time. Continued use of the Site after changes constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>Questions about these Terms? Contact us at <a href="mailto:hello@aishelf.dev">hello&#64;aishelf.dev</a>.</p>
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
export class Terms {}