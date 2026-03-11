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
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
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

Place your resume file inside:

```
public/resume.pdf
```

The **Download Resume** button will automatically download this file.

---

### 2. Add Your Projects

Edit this file:

```
src/components/Projects.jsx
```

Example:

```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Short description of your project",
    tech: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    live: "https://project-demo.com"
  }
];
```

---

### 3. Activate Contact Form (Optional)

You can use **Formspree**.

1. Go to https://formspree.io
2. Create a form
3. Replace the API URL in `Contact.jsx`.

Example:

```javascript
const res = await fetch("https://formspree.io/f/YOUR_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(form)
});
```

---

## 🌐 Deploy on Vercel

1. Push the project to **GitHub**
2. Go to **Vercel**
3. Import your repository
4. Framework: **Vite**
5. Click **Deploy**

Your site will be live in seconds.

---

## 🎨 Customization

| File                                | What to edit                     |
| ----------------------------------- | -------------------------------- |
| `src/components/Hero.jsx`           | Name and title                   |
| `src/components/About.jsx`          | About text                       |
| `src/components/Skills.jsx`         | Skills                           |
| `src/components/Projects.jsx`       | Your projects                    |
| `src/components/CodingProfiles.jsx` | GitHub, LinkedIn, LeetCode links |

---

Built with **React + Vite + Tailwind CSS**
Portfolio by **Prajwal Ganpat Korgaonkar**
