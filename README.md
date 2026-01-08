# Dev Productivity Suite - Chrome Extension + Next.js

A Chrome Extension (Manifest V3) with developer tools, learning utilities, productivity features, and an integrated GitHub RAG agent powered by Next.js.

## 🎉 New: Integrated GitHub Agent

The GitHub agent is now built into this Next.js application - no separate backend needed!

## 🏗️ Architecture

- **Next.js App**: Web interface and API routes (`pages/`)
- **GitHub Agent API**: Integrated API routes (`pages/api/github/`)
- **Chrome Extension**: Browser extension (`src/`, `manifest.json`)
- **Shared Services**: Core functionality (`lib/services/`)

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create `.env.local` with your credentials:

```env
# Groq Configuration (for LLM)
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.1-8b-instant

# Pinecone Configuration (for vector storage)
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_ENVIRONMENT=us-east-1
PINECONE_INDEX_NAME=github-client

# Redis Configuration (optional)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=your_redis_password

# GitHub Token (optional, for private repos)
GITHUB_TOKEN=your_github_token
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see the web interface.

### 4. Build Chrome Extension

```bash
npm run build:extension
```

Then load the `dist` folder in Chrome:
1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `dist` folder

## 📦 Features

### Developer Tools
- ✅ **Clear Cache** - Background-only cache clearing
- ✅ **Edit Cookie** - Floating panel to view/edit/delete cookies
- ✅ **Check SEO** - Basic SEO analysis overlay
- ✅ **Font Finder** - Hover to see font details
- ✅ **Color Finder** - Click to copy color values
- ✅ **GitHub Agent** - Semantic code search and RAG-based Q&A

### Learning Tools
- ✅ **Ad Blocker** - Declarative Net Request API
- ✅ **Speed Improver** - Defer images, lightweight UI

### Productivity Tools
- ✅ **Focus Mode** - Hide distractions, dim page
- ✅ **Focus Detection** - Detect mobile phone usage via webcam
- ✅ **Nuclear Mode** - Block all sites except whitelisted ones
- ✅ **Passive Watching Detector** - Inactivity detection
- ✅ **Energy-Aware Scheduling** - Manual energy level selection

## 🔌 GitHub Agent API

### Available Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/github/health` | Health check |
| GET | `/api/github/stats` | System statistics |
| POST | `/api/github/ingest` | Ingest a repository |
| POST | `/api/github/query` | Query a repository |
| GET | `/api/github/status/:jobId` | Check job status |
| DELETE | `/api/github/repo/:repoId` | Delete repository |

### Example Usage

**Ingest a Repository:**
```bash
curl -X POST http://localhost:3000/api/github/ingest \
  -H "Content-Type: application/json" \
  -d '{"repoUrl": "https://github.com/user/repo", "branch": "main"}'
```

**Query a Repository:**
```bash
curl -X POST http://localhost:3000/api/github/query \
  -H "Content-Type: application/json" \
  -d '{"repoId": "user/repo", "query": "How does authentication work?"}'
```

## 📁 Project Structure

```
├── pages/
│   ├── api/github/          # GitHub agent API routes
│   ├── index.tsx            # Home page
│   ├── _app.tsx
│   └── _document.tsx
├── lib/
│   ├── services/            # Core services (Git, RAG, Embeddings, etc.)
│   ├── config.ts
│   ├── types.ts
│   ├── logger.ts
│   └── validation.ts
├── src/
│   ├── popup/               # Chrome extension popup
│   ├── background/          # Service worker
│   └── content/             # Content scripts
├── manifest.json            # Extension manifest
├── vite.config.js           # Extension build config
└── next.config.js           # Next.js config
```

## 🛠️ Development

```bash
# Start Next.js dev server
npm run dev

# Build Chrome extension
npm run build:extension

# Build Next.js for production
npm run build

# Start production server
npm start
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t dev-productivity-suite .
docker run -p 3000:3000 dev-productivity-suite
```

## 📚 Documentation

- [Migration Guide](MIGRATION_GUIDE.md) - Details on the GitHub agent migration
- [Nuclear Mode Guide](NUCLEAR_MODE_GUIDE.md) - Focus mode documentation

## 🎯 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Vector DB**: Pinecone
- **LLM**: Groq (Llama 3.1)
- **Embeddings**: Local (Xenova/transformers.js)
- **Cache**: Redis (optional) or in-memory
- **Extension**: Chrome Manifest V3

## ✅ What's New

- ✅ GitHub agent integrated into Next.js (no separate backend!)
- ✅ Unified development experience
- ✅ Simplified deployment
- ✅ Better type safety with shared types
- ✅ Hot reload for both API and frontend

## 🔧 Troubleshooting

### Port Already in Use
Change the port in `.env.local`:
```env
PORT=3001
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
npx tsc --noEmit
```

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Please read the migration guide first to understand the new architecture.
