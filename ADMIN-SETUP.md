# RevenueUp Admin & Telegram Setup

## Cloudflare environment variables
Add these in **Cloudflare Pages → Settings → Environment variables** for Production and Preview:

- `TELEGRAM_BOT_TOKEN` — from BotFather
- `TELEGRAM_CHAT_ID` — your private chat or group ID
- `ADMIN_SECRET` — a long random secret used only for the connection test

Redeploy after saving variables.

## Secure `/admin`
Protect `/admin*` with **Cloudflare Zero Trust → Access → Applications**. Allow only your email. The admin UI never stores the Telegram bot token.

## Publish a blog post
1. Open `/admin` and choose Blog Studio.
2. Write or import a Markdown article.
3. Download the generated `.md` file.
4. Upload it to `src/content/blog/` in GitHub.
5. Commit the file. Cloudflare Pages rebuilds and publishes it at `/blog/<slug>/`.

## Build
```bash
npm install
npm run build
```
Output directory: `dist`
