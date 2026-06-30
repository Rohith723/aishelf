<div align="center">

# 📚 AIShelf

### Your Curated Shelf of the Best AI Tools

A beautifully designed, blazing-fast directory of 60+ AI tools — built with Angular 19, fully responsive, and optimized for discovery.

[![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[🌐 Live Demo](https://aishelf.vercel.app) · [🐛 Report Bug](https://github.com/YOURUSERNAME/aishelf/issues) · [✨ Request Feature](https://github.com/YOURUSERNAME/aishelf/issues)

</div>

---

## 📸 Preview

<div align="center">
  <img src="https://via.placeholder.com/1200x650/05050f/8b5cf6?text=AIShelf+Homepage+Screenshot" alt="AIShelf Homepage" width="100%" />
  <p><em>Homepage — Hero, New This Week, and Filterable Tool Grid</em></p>
</div>

<table>
  <tr>
    <td><img src="https://via.placeholder.com/580x380/05050f/8b5cf6?text=Search+%26+Filters" alt="Search and Filters" /></td>
    <td><img src="https://via.placeholder.com/580x380/05050f/8b5cf6?text=Tool+Cards" alt="Tool Cards" /></td>
  </tr>
  <tr>
    <td align="center"><em>Live search with category & pricing filters</em></td>
    <td align="center"><em>Clean tool cards with badges and tags</em></td>
  </tr>
  <tr>
    <td><img src="https://via.placeholder.com/580x380/05050f/8b5cf6?text=Submit+Tool+Page" alt="Submit Tool" /></td>
    <td><img src="https://via.placeholder.com/580x380/05050f/8b5cf6?text=Mobile+View" alt="Mobile View" /></td>
  </tr>
  <tr>
    <td align="center"><em>Submit a tool form</em></td>
    <td align="center"><em>Fully responsive mobile experience</em></td>
  </tr>
</table>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Live Search** | Instantly search across 60+ tools by name, description, or tags |
| 🏷️ **Smart Filters** | Filter by category (9 types) and pricing model (Free / Freemium / Paid) |
| 🔢 **Live Counts** | Real-time tool counts on every category chip |
| ↕️ **Sort Options** | Sort by Featured, Newest, or A → Z |
| 🆕 **New This Week** | Auto-curated section highlighting recently added tools |
| ⭐ **Featured Badges** | Highlight top-tier tools with featured/new badges |
| 📬 **Newsletter Signup** | Email capture component ready for integration |
| 📝 **Submit a Tool** | Full submission form for community tool suggestions |
| 📄 **Legal Pages** | About, Privacy Policy, Terms of Use — AdSense-ready |
| 📱 **Fully Responsive** | Mobile hamburger menu, adaptive grid layouts |
| ⬆️ **Back to Top** | Smooth scroll-to-top button on long pages |
| 🎨 **Dark UI** | Modern dark theme with purple gradient accents |
| ⚡ **Zoneless Angular** | Built on Angular's experimental zoneless change detection for performance |
| 🧭 **Client Routing** | Real navigable URLs (`/about`, `/submit-tool`, etc.) via Angular Router |

---

## 🗂️ Categories

`Writing` · `Image` · `Video` · `Coding` · `Productivity` · `Audio` · `SEO` · `Design` · `Agents`

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Angular 19](https://angular.dev) (Standalone Components) |
| Language | TypeScript |
| Styling | Pure CSS (no framework dependency) |
| Fonts | Space Grotesk + Inter (Google Fonts) |
| Change Detection | Zoneless (`provideZonelessChangeDetection`) |
| Routing | Angular Router |
| Hosting | Vercel |

---

## 📁 Project Structure

```
aishelf/
├── src/
│   ├── index.html
│   ├── main.ts
│   ├── styles.css
│   └── app/
│       ├── app.ts                    # Root component
│       ├── app.config.ts             # App providers (router, zoneless CD)
│       ├── app.routes.ts             # Route definitions
│       ├── models/
│       │   └── tool.ts               # Tool interface
│       ├── services/
│       │   └── tools.ts              # Tool data + filter/sort logic
│       ├── components/
│       │   ├── navbar/               # Sticky nav with mobile menu
│       │   ├── hero/                 # Landing hero section
│       │   ├── filter-bar/           # Search, filters, sort, chips
│       │   ├── tool-card/            # Individual tool card
│       │   ├── newsletter/           # Email signup section
│       │   └── footer/               # Site footer with links
│       └── pages/
│           ├── home/                 # Main directory page
│           ├── about/                # About page
│           ├── privacy/              # Privacy policy
│           ├── terms/                # Terms of use
│           └── submit/               # Tool submission form
├── vercel.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# Clone the repository
git clone https://github.com/YOURUSERNAME/aishelf.git
cd aishelf

# Install dependencies
npm install

# Run the development server
npm start
```

Visit `http://localhost:4200` in your browser. The app will reload automatically on file changes.

### Build for Production

```bash
npm run build
```

Build artifacts will be output to `dist/ai-tools-directory/browser`.

---

## ☁️ Deployment

This project is configured for one-click deployment on **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOURUSERNAME/aishelf)

### Manual Deploy

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects the build settings from `vercel.json`
4. Click **Deploy**

Also fully compatible with **Netlify** — see `netlify.toml` for config.

---

## 🤝 Contributing

Contributions are welcome! To add a new AI tool to the directory:

1. Fork this repository
2. Add your tool entry to `src/app/services/tools.ts`
3. Follow the existing `Tool` interface format
4. Open a pull request

```ts
{
  id: 64,
  name: 'Your Tool',
  description: 'A short, clear description under 100 characters.',
  category: 'Writing', // must match an existing category
  tags: ['tag1', 'tag2', 'tag3'],
  url: 'https://yourtool.com',
  pricing: 'Freemium', // 'Free' | 'Freemium' | 'Paid'
  icon: '🔧',
  new: true // optional
}
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Icons via native emoji set
- Fonts by [Google Fonts](https://fonts.google.com)
- Built and deployed with [Angular](https://angular.dev) + [Vercel](https://vercel.com)

---

<div align="center">

**Built with ❤️ for the AI community**

[⬆ Back to Top](#-aishelf)

</div>
