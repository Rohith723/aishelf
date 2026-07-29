import { Injectable } from '@angular/core';
import { Tool } from '../models/tool';

@Injectable({ providedIn: 'root' })
export class ToolsService {
  private tools: Tool[] = [
    // Writing
    { id: 1, name: 'ChatGPT', description: 'Most popular AI chatbot for writing, coding, and reasoning tasks.', category: 'Writing', tags: ['chatbot', 'writing', 'coding'], url: 'https://chat.openai.com', pricing: 'Freemium', icon: '🤖', featured: true },
    { id: 2, name: 'Claude', description: "Anthropic's AI assistant known for safety and long document analysis.", category: 'Writing', tags: ['chatbot', 'analysis', 'writing'], url: 'https://claude.ai', pricing: 'Freemium', icon: '🧠', featured: true },
    { id: 3, name: 'Gemini', description: "Google's multimodal AI assistant integrated with Gmail, Docs and Google Workspace.", category: 'Writing', tags: ['chatbot', 'google', 'research'], url: 'https://gemini.google.com', pricing: 'Freemium', icon: '♊', featured: true, new: true },
    { id: 4, name: 'Grok', description: "xAI's assistant with real-time web search and integration with X (Twitter).", category: 'Writing', tags: ['chatbot', 'search', 'realtime'], url: 'https://grok.com', pricing: 'Freemium', icon: '🤯', new: true },
    { id: 64, name: 'GPTGeminiGrok.AI', description: 'Browser workspace for chatting with GPT, Gemini, and Grok models.', category: 'Writing', tags: ['chatbot', 'multi-model', 'gpt', 'gemini', 'grok'], url: 'https://trygrokai.asia', pricing: 'Freemium', icon: '💬', new: true },
    { id: 5, name: 'Jasper', description: 'AI writing assistant for marketers and content creators.', category: 'Writing', tags: ['content', 'marketing', 'copywriting'], url: 'https://jasper.ai', pricing: 'Paid', icon: '✍️' },
    { id: 6, name: 'Copy.ai', description: 'Generate marketing copy, emails, and blog posts in seconds.', category: 'Writing', tags: ['copywriting', 'marketing', 'email'], url: 'https://copy.ai', pricing: 'Freemium', icon: '📝' },
    { id: 7, name: 'Writesonic', description: 'AI writer for blogs, ads, and product descriptions.', category: 'Writing', tags: ['blog', 'ads', 'writing'], url: 'https://writesonic.com', pricing: 'Freemium', icon: '🖊️' },
    { id: 8, name: 'Grammarly', description: 'AI writing assistant that checks grammar, tone, clarity and style in real time.', category: 'Writing', tags: ['grammar', 'writing', 'editing'], url: 'https://grammarly.com', pricing: 'Freemium', icon: '✅' },
    { id: 9, name: 'DeepL', description: "The world's most accurate AI-powered translator supporting 30+ languages.", category: 'Writing', tags: ['translation', 'language', 'writing'], url: 'https://deepl.com', pricing: 'Freemium', icon: '🌍' },
    // Image
    { id: 10, name: 'Midjourney', description: 'Create stunning AI art and images from text prompts.', category: 'Image', tags: ['art', 'design', 'image'], url: 'https://midjourney.com', pricing: 'Paid', icon: '🎨', featured: true },
    { id: 11, name: 'DALL-E 3', description: "OpenAI's image generator integrated with ChatGPT.", category: 'Image', tags: ['image', 'art', 'openai'], url: 'https://openai.com/dall-e-3', pricing: 'Freemium', icon: '🖼️' },
    { id: 12, name: 'Stable Diffusion', description: 'Open-source image generation model you can run locally.', category: 'Image', tags: ['open-source', 'image', 'local'], url: 'https://stability.ai', pricing: 'Free', icon: '🌀' },
    { id: 13, name: 'Adobe Firefly', description: "Adobe's generative AI for creative professionals.", category: 'Image', tags: ['design', 'adobe', 'creative'], url: 'https://firefly.adobe.com', pricing: 'Freemium', icon: '🔥' },
    { id: 14, name: 'Leonardo AI', description: 'AI image generation platform for game assets and art.', category: 'Image', tags: ['game', 'art', 'design'], url: 'https://leonardo.ai', pricing: 'Freemium', icon: '🎭', new: true },
    { id: 15, name: 'Ideogram', description: 'AI image generator that excels at text inside images — logos, posters, designs.', category: 'Image', tags: ['text-in-image', 'logo', 'design'], url: 'https://ideogram.ai', pricing: 'Freemium', icon: '🔤', new: true },
    { id: 16, name: 'Flux', description: 'State-of-the-art open-source image generation model beating Midjourney on realism.', category: 'Image', tags: ['realistic', 'open-source', 'image'], url: 'https://blackforestlabs.ai', pricing: 'Freemium', icon: '🌊', new: true },
    { id: 17, name: 'Recraft', description: 'AI design tool for generating brand-consistent vector graphics and illustrations.', category: 'Image', tags: ['vector', 'branding', 'illustration'], url: 'https://recraft.ai', pricing: 'Freemium', icon: '🖌️', new: true },
    // Video
    { id: 18, name: 'Runway ML', description: 'Generate and edit videos with AI — text to video.', category: 'Video', tags: ['video', 'editing', 'generation'], url: 'https://runwayml.com', pricing: 'Freemium', icon: '🎬', featured: true },
    { id: 19, name: 'Sora', description: "OpenAI's revolutionary text-to-video model.", category: 'Video', tags: ['video', 'openai', 'text-to-video'], url: 'https://openai.com/sora', pricing: 'Paid', icon: '🎥', new: true },
    { id: 20, name: 'Pika Labs', description: 'Create short AI videos and animations from text or image.', category: 'Video', tags: ['animation', 'video', 'shorts'], url: 'https://pika.art', pricing: 'Freemium', icon: '⚡' },
    { id: 21, name: 'HeyGen', description: 'AI avatar video creator for marketing and education.', category: 'Video', tags: ['avatar', 'marketing', 'video'], url: 'https://heygen.com', pricing: 'Freemium', icon: '👤' },
    { id: 22, name: 'Synthesia', description: 'Create professional AI avatar videos for training, marketing and education.', category: 'Video', tags: ['avatar', 'training', 'business'], url: 'https://synthesia.io', pricing: 'Paid', icon: '🎭' },
    { id: 23, name: 'Veo', description: "Google's advanced text-to-video model for cinematic AI video generation.", category: 'Video', tags: ['google', 'text-to-video', 'cinematic'], url: 'https://deepmind.google/technologies/veo', pricing: 'Freemium', icon: '🎞️', new: true },
    { id: 24, name: 'Kling AI', description: 'High-quality AI video generation with realistic motion and long clips.', category: 'Video', tags: ['video', 'realistic', 'generation'], url: 'https://klingai.com', pricing: 'Freemium', icon: '🎯', new: true },
    { id: 25, name: 'Descript', description: 'Edit video and podcast audio by editing the transcript like a document.', category: 'Video', tags: ['podcast', 'editing', 'transcript'], url: 'https://descript.com', pricing: 'Freemium', icon: '📹' },
    // Coding
    { id: 26, name: 'GitHub Copilot', description: 'AI pair programmer that suggests code inside your editor.', category: 'Coding', tags: ['coding', 'github', 'autocomplete'], url: 'https://github.com/features/copilot', pricing: 'Paid', icon: '💻', featured: true },
    { id: 27, name: 'Cursor', description: 'AI-first code editor built on VS Code with chat built in.', category: 'Coding', tags: ['editor', 'coding', 'chat'], url: 'https://cursor.sh', pricing: 'Freemium', icon: '⌨️', new: true },
    { id: 28, name: 'Windsurf', description: 'AI-powered code editor with agentic capabilities for full project development.', category: 'Coding', tags: ['editor', 'coding', 'agent'], url: 'https://codeium.com/windsurf', pricing: 'Freemium', icon: '🏄', new: true },
    { id: 29, name: 'Lovable', description: 'Build full-stack web apps by describing them in plain English — no coding needed.', category: 'Coding', tags: ['no-code', 'app-builder', 'fullstack'], url: 'https://lovable.dev', pricing: 'Freemium', icon: '💜', new: true },
    { id: 30, name: 'Bolt.new', description: 'Instantly build and deploy web apps in the browser using AI prompts.', category: 'Coding', tags: ['app-builder', 'deploy', 'browser'], url: 'https://bolt.new', pricing: 'Freemium', icon: '⚡', new: true },
    { id: 31, name: 'v0 by Vercel', description: 'Generate React UI components and full pages from text prompts instantly.', category: 'Coding', tags: ['ui', 'react', 'components'], url: 'https://v0.dev', pricing: 'Freemium', icon: '▲', new: true },
    { id: 32, name: 'Replit AI', description: 'Cloud IDE with AI that helps you build and debug code.', category: 'Coding', tags: ['ide', 'cloud', 'coding'], url: 'https://replit.com', pricing: 'Freemium', icon: '🔧' },
    { id: 33, name: 'Tabnine', description: 'AI code completion for all major IDEs and languages.', category: 'Coding', tags: ['autocomplete', 'coding', 'ide'], url: 'https://tabnine.com', pricing: 'Freemium', icon: '🔵' },
    // Productivity
    { id: 34, name: 'Notion AI', description: 'AI built into Notion for writing, summarizing, and planning.', category: 'Productivity', tags: ['notes', 'writing', 'planning'], url: 'https://notion.so/product/ai', pricing: 'Freemium', icon: '📋' },
    { id: 35, name: 'Perplexity AI', description: 'AI-powered search engine that cites its sources.', category: 'Productivity', tags: ['search', 'research', 'citations'], url: 'https://perplexity.ai', pricing: 'Freemium', icon: '🔍', featured: true },
    { id: 36, name: 'NotebookLM', description: "Google's free AI research tool — upload documents and chat with your sources.", category: 'Productivity', tags: ['research', 'documents', 'google'], url: 'https://notebooklm.google.com', pricing: 'Free', icon: '📓', featured: true },
    { id: 37, name: 'Otter.ai', description: 'AI meeting notes and transcription in real time.', category: 'Productivity', tags: ['meetings', 'transcription', 'notes'], url: 'https://otter.ai', pricing: 'Freemium', icon: '🦦' },
    { id: 38, name: 'Zapier AI', description: 'Automate workflows with AI-powered no-code automations.', category: 'Productivity', tags: ['automation', 'workflow', 'no-code'], url: 'https://zapier.com', pricing: 'Freemium', icon: '⚡' },
    { id: 39, name: 'ClickUp AI', description: 'AI project management with autopilot agents that handle recurring work automatically.', category: 'Productivity', tags: ['project', 'management', 'automation'], url: 'https://clickup.com', pricing: 'Freemium', icon: '✅' },
    { id: 40, name: 'Gamma', description: 'Turn notes and prompts into beautiful presentations, documents and webpages instantly.', category: 'Productivity', tags: ['presentations', 'slides', 'documents'], url: 'https://gamma.app', pricing: 'Freemium', icon: '📊', new: true },
    { id: 41, name: 'Granola', description: 'AI meeting notes that listens to calls and turns them into structured summaries.', category: 'Productivity', tags: ['meetings', 'notes', 'summaries'], url: 'https://granola.ai', pricing: 'Freemium', icon: '🎙️', new: true },
    // Audio
    { id: 42, name: 'ElevenLabs', description: 'Ultra-realistic AI voice cloning and text-to-speech.', category: 'Audio', tags: ['voice', 'tts', 'cloning'], url: 'https://elevenlabs.io', pricing: 'Freemium', icon: '🎙️', featured: true },
    { id: 43, name: 'Suno AI', description: 'Generate full songs with vocals from a text prompt.', category: 'Audio', tags: ['music', 'songs', 'generation'], url: 'https://suno.ai', pricing: 'Freemium', icon: '🎵', new: true },
    { id: 44, name: 'Udio', description: 'Create professional music tracks and full songs with AI in any genre.', category: 'Audio', tags: ['music', 'genre', 'generation'], url: 'https://udio.com', pricing: 'Freemium', icon: '🎹', new: true },
    { id: 45, name: 'Murf AI', description: 'Studio-quality AI voiceover for videos and presentations.', category: 'Audio', tags: ['voiceover', 'voice', 'video'], url: 'https://murf.ai', pricing: 'Freemium', icon: '🎤' },
    { id: 46, name: 'Adobe Podcast', description: 'Enhance audio quality and remove background noise with AI.', category: 'Audio', tags: ['podcast', 'audio', 'enhance'], url: 'https://podcast.adobe.com', pricing: 'Free', icon: '🎧' },
    { id: 47, name: 'Speechify', description: 'Convert any text, article or document into natural AI speech for listening.', category: 'Audio', tags: ['tts', 'listening', 'reading'], url: 'https://speechify.com', pricing: 'Freemium', icon: '🔊' },
    // SEO
    { id: 48, name: 'Surfer SEO', description: 'AI-powered SEO tool to rank your content on Google.', category: 'SEO', tags: ['seo', 'content', 'ranking'], url: 'https://surferseo.com', pricing: 'Paid', icon: '📈' },
    { id: 49, name: 'Semrush AI', description: 'All-in-one marketing platform with AI writing features.', category: 'SEO', tags: ['seo', 'marketing', 'analytics'], url: 'https://semrush.com', pricing: 'Paid', icon: '📊' },
    { id: 50, name: 'Ahrefs AI', description: 'All-in-one SEO platform with AI content tools for ranking on Google.', category: 'SEO', tags: ['seo', 'backlinks', 'keywords'], url: 'https://ahrefs.com', pricing: 'Paid', icon: '🔗' },
    { id: 51, name: 'Frase', description: 'AI SEO content writer that researches, outlines and writes Google-optimized articles.', category: 'SEO', tags: ['seo', 'content', 'writing'], url: 'https://frase.io', pricing: 'Paid', icon: '📝' },
    { id: 52, name: 'AdCreative.ai', description: 'Generate high-converting ad creatives with AI.', category: 'SEO', tags: ['ads', 'marketing', 'creative'], url: 'https://adcreative.ai', pricing: 'Paid', icon: '📣' },
    // Design
    { id: 53, name: 'Canva AI', description: 'Design anything with AI-powered templates and generation.', category: 'Design', tags: ['design', 'templates', 'social'], url: 'https://canva.com', pricing: 'Freemium', icon: '🎨' },
    { id: 54, name: 'Framer AI', description: 'Build stunning websites with AI — from prompt to published site in minutes.', category: 'Design', tags: ['website', 'builder', 'no-code'], url: 'https://framer.com', pricing: 'Freemium', icon: '🖥️' },
    { id: 55, name: 'Figma AI', description: 'AI features inside Figma for auto-generating layouts, components and copy.', category: 'Design', tags: ['figma', 'ui', 'design'], url: 'https://figma.com', pricing: 'Freemium', icon: '🎯' },
    { id: 56, name: 'Uizard', description: 'Turn sketches into UI designs with AI instantly.', category: 'Design', tags: ['ui', 'prototype', 'design'], url: 'https://uizard.io', pricing: 'Freemium', icon: '✏️', new: true },
    { id: 57, name: 'Looka', description: 'AI logo maker and brand kit generator.', category: 'Design', tags: ['logo', 'branding', 'design'], url: 'https://looka.com', pricing: 'Paid', icon: '🏷️' },
    // Agents
    { id: 58, name: 'n8n', description: 'Open-source AI workflow automation — connect tools into agentic pipelines. Self-hostable.', category: 'Agents', tags: ['automation', 'workflow', 'open-source'], url: 'https://n8n.io', pricing: 'Freemium', icon: '🔄', new: true, featured: true },
    { id: 59, name: 'Manus', description: 'Agentic AI that executes multi-step tasks — builds apps, creates slides, automates workflows.', category: 'Agents', tags: ['agent', 'automation', 'tasks'], url: 'https://manus.im', pricing: 'Freemium', icon: '🤖', new: true },
    { id: 60, name: 'AutoGPT', description: 'Autonomous AI agent that breaks goals into tasks and executes them independently.', category: 'Agents', tags: ['autonomous', 'tasks', 'agent'], url: 'https://agpt.co', pricing: 'Free', icon: '🧠', new: true },
    { id: 61, name: 'Make', description: 'Visual no-code automation platform connecting 1000+ apps with AI workflows.', category: 'Agents', tags: ['automation', 'no-code', 'workflows'], url: 'https://make.com', pricing: 'Freemium', icon: '⚙️' },
    { id: 62, name: 'Relevance AI', description: 'Build and deploy AI agents for sales, support and operations without code.', category: 'Agents', tags: ['agent', 'sales', 'no-code'], url: 'https://relevanceai.com', pricing: 'Freemium', icon: '🧩', new: true },
    { id: 63, name: 'LangChain', description: 'Framework for building LLM-powered applications and autonomous AI agents.', category: 'Agents', tags: ['framework', 'llm', 'developer'], url: 'https://langchain.com', pricing: 'Free', icon: '🔗' },
  ];

  getAll(): Tool[] { return this.tools; }
  getCategories(): string[] { return [...new Set(this.tools.map(t => t.category))]; }
  getCategoryCount(category: string): number { return this.tools.filter(t => t.category === category).length; }
  getFeatured(): Tool[] { return this.tools.filter(t => t.featured); }
  getNew(): Tool[] { return this.tools.filter(t => t.new).slice(0, 6); }
  getTotalCount(): number { return this.tools.length; }

  filter(category: string, search: string, pricing: string, sort: string): Tool[] {
    let result = this.tools.filter(t => {
      const matchCat = !category || t.category === category;
      const matchSearch = !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase()) ||
        t.tags.some((tag: string) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchPricing = !pricing || t.pricing === pricing;
      return matchCat && matchSearch && matchPricing;
    });
    if (sort === 'az') result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'new') result = [...result].sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0));
    return result;
  }
}