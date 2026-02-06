# 🧠 AI Prompt Gallery – Codex-Ready (Node.js)

This repository is a technical blueprint for building a **Web Gallery for AI Image Generation Prompts** using **Node.js (Express)**.  
The platform allows users to browse, submit, and copy AI image prompts (Midjourney, Stable Diffusion, DALL·E, Banana, etc), with admin moderation and SEO-friendly pages.

This README serves as the **single source of truth for Codex / AI coding assistants** to generate clean, modular, and production-ready code.

---

## 🎯 Project Goals
- Public gallery of AI image prompts + preview images  
- Users can:
  - Browse prompts  
  - Copy prompts (track copy count)  
  - Like prompts  
  - Submit prompts + upload images  
- Admin moderation (approve / reject / delete)  
- SEO-friendly pages  
- Structured prompt data for easy AI integration  

---

## 🧱 Tech Stack (Target)
**Backend**
- Node.js
- Express.js
- MySQL (mysql2 / Sequelize / Prisma)
- Multer (file upload)
- express-session / JWT (admin auth)

**Frontend**
- EJS / Pug / Handlebars (server-side render)  
  OR  
- HTML + Tailwind + Vanilla JS (static templates)

**Other**
- Sharp (optional image optimization)
- Cloudflare (optional CDN)

---

## 🗂️ Project Structure (Codex must follow this)
```txt
/ai-prompt-gallery
  /src
    /config
      db.js            # MySQL connection
    /models
      Prompt.js        # ORM model or query helpers
    /routes
      public.routes.js
      admin.routes.js
      api.routes.js
    /controllers
      prompt.controller.js
      admin.controller.js
    /views             # EJS/Pug templates
      index.ejs
      detail.ejs
      submit.ejs
      admin/
        login.ejs
        dashboard.ejs
        prompts.ejs
    /public
      /assets
        css/
        js/
        images/
    /uploads           # Uploaded images
    app.js             # Express app entry
  package.json
  README.md
🗃️ Database Schema (MySQL)
Codex must generate code compatible with this schema:

CREATE TABLE prompts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  prompt TEXT NOT NULL,
  negative_prompt TEXT,
  model VARCHAR(50),
  category VARCHAR(100),
  image VARCHAR(255),
  status ENUM('pending','approved') DEFAULT 'pending',
  views INT DEFAULT 0,
  likes INT DEFAULT 0,
  copy_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
📄 Pages Specification
1. Public Gallery (/)
Grid layout of approved prompts

Show image thumbnail + title + short excerpt

Filters: category, model

Sorting: latest, trending (copy_count)

Each item links to /prompt/:id

2. Prompt Detail (/prompt/:id)
Full image

Full prompt + negative prompt

Metadata: model, category

Buttons:

Copy Prompt (AJAX → /api/prompts/:id/copy)

Like (AJAX → /api/prompts/:id/like)

Increment views on load

3. Submit Prompt (/submit)
Form fields:

title

prompt

negative_prompt

model (select)

category (select)

image upload

On submit:

Save prompt with status = pending

Show popup:
“Prompt berhasil dikirim dan menunggu approval admin”

Redirect to homepage

🛡️ Admin Panel
/admin/login
Session-based login

/admin/prompts
List pending prompts

Actions:

Approve → set status = approved

Delete → remove DB record + delete image file from /uploads

/admin/dashboard
Statistics:

total prompts

approved

pending

trending

🔁 API Endpoints
GET /api/prompts → list approved prompts (filter & sort supported)

POST /api/prompts → submit new prompt

POST /api/prompts/:id/copy → increment copy_count

POST /api/prompts/:id/like → increment likes

All API responses should be JSON.

🧠 Prompt Data Format (Standard)
Store prompts in a structured format:

Prompt:
Ultra realistic cinematic portrait photography of a young man on a busy urban street at dusk, neon lights, shallow depth of field, 85mm lens, f1.8

Negative Prompt:
blurry, low quality, distorted face, extra fingers, bad anatomy

Model: SDXL / Midjourney / Banana  
Category: Cinematic / Urban / Portrait
📈 SEO Requirements
Server-side rendered pages (EJS/Pug)

Dynamic meta title & description per prompt

OpenGraph tags

Lazy load images

Optional: sitemap.xml

🗺️ MVP Roadmap (Codex Implementation Order)
Express app setup (app.js)

Database connection (src/config/db.js)

Public gallery page

Prompt detail page (copy + like)

Submit form + image upload (multer)

Admin panel (approve/delete)

API endpoints

SEO meta tags

🧩 Coding Rules for Codex
Use async/await

Use prepared statements / ORM to prevent SQL injection

Validate file uploads (type, size)

Do not hardcode secrets (use .env)

Keep controllers thin, logic in services/models

Follow RESTful route naming

🚀 Future Enhancements
User accounts & profiles

Bookmark / collections

Public API for developers

Trending algorithm (views + copy_count weight)

AI prompt generator

📜 License
MIT License – free to use and modify.
