import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://revenueup.in', integrations: [sitemap()], output: 'static' });
