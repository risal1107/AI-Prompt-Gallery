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
