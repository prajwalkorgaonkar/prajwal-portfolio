# Prajwal Korgaonkar — Portfolio

A dark-mode, minimal, and animated portfolio website built with **React + Vite + Tailwind CSS**.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for production
```bash
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf          ← ADD YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx    ← ADD YOUR PROJECTS HERE
│   │   ├── CodingProfiles.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── BackToTop.jsx
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── vercel.json
```

---

## ✅ Before Deploying

### 1. Add your Resume PDF
Place your resume file as `public/resume.pdf`. The "Download Resume" button will link to it.

### 2. Add Real Projects
Edit `src/components/Projects.jsx`:
```js
const projects = [
  {
    id: 1,
    placeholder: false,             // set to false
    title: 'Your Project Name',
    description: 'What it does...',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/...',
    live: 'https://...',           // optional
  },
  // ...
];
```

### 3. Activate the Contact Form
The form is ready but needs a backend/service to actually send emails.
Easiest option — **Formspree**:
1. Go to [formspree.io](https://formspree.io) and create a form
2. Get your form ID (e.g. `xkndlpqz`)
3. In `Contact.jsx`, replace the simulate block with:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

---

## 🌐 Deploy on Vercel

1. Push this project to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Framework: **Vite**
4. Click **Deploy** — done!

The `vercel.json` file already handles client-side routing.

---

## 🎨 Customization

| File | What to edit |
|------|-------------|
| `src/components/Hero.jsx` | Name, title, tagline |
| `src/components/About.jsx` | About text, highlights |
| `src/components/Skills.jsx` | Skill names, levels |
| `src/components/Projects.jsx` | Project cards |
| `src/components/CodingProfiles.jsx` | Social links |
| `src/index.css` | Color variables, fonts |

---

Built with React + Vite + Tailwind CSS | Deployed on Vercel
