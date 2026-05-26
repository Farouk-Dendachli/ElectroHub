# ElectroHub — Project Report

_Use this document as a starting point for your university report. Copy sections into Word/Google Docs and add your name, date, and screenshots._

---

## Title Page

**Project Title:** ElectroHub — Responsive React Web Application  

**Course:** _[Your course name]_  

**Student Name:** _[Your full name]_  

**Student ID:** _[Your ID]_  

**University:** _[Your university name]_  

**Submission Date:** _[Date]_  

---

## Abstract

This report describes the development of ElectroHub, a multi-page responsive website built with React and Bootstrap. The application demonstrates core frontend concepts including component-based architecture, client-side routing with React Router, and mobile-first responsive design using Bootstrap’s grid system and components. The project includes four pages (Home, About, Features, and Contact), a shared navigation bar and footer, and a contact form. The goal was to create a clean, beginner-friendly codebase suitable for academic presentation and future deployment to platforms such as Vercel or GitHub Pages.

---

## System Design

### Overview

The application follows a simple single-page application (SPA) structure. The browser loads one HTML file; React swaps page content when the user clicks navigation links.

```
┌─────────────────────────────────────┐
│            Navbar                   │
├─────────────────────────────────────┤
│                                     │
│   Page Content (Routes)             │
│   Home | About | Features | Contact │
│                                     │
├─────────────────────────────────────┤
│            Footer                   │
└─────────────────────────────────────┘
```

### Folder Structure

| Folder / File | Role |
|---------------|------|
| `src/pages/` | Full-page views for each route |
| `src/components/` | Reusable pieces (Navbar, Footer, FeatureCard) |
| `src/assets/` | Images and static media |
| `src/App.jsx` | Defines routes and page layout |
| `src/main.jsx` | Starts React and imports Bootstrap |

### Page Descriptions

1. **Home** — Hero section, project introduction, category cards, call-to-action buttons.  
2. **About** — Project idea, purpose, and learning goals.  
3. **Features** — Bootstrap cards listing store features (laptops, phones, support, etc.).  
4. **Contact** — Form with name, email, and message fields.

### Routing

React Router maps URLs to components:

| URL | Component |
|-----|-----------|
| `/` | Home |
| `/about` | About |
| `/features` | Features |
| `/contact` | Contact |

---

## Technologies Used

| Technology | Version (approx.) | Usage |
|------------|-------------------|--------|
| React | 19.x | Functional components and JSX |
| Vite | 8.x | Build tool and dev server |
| React Router DOM | 7.x | Navigation without page reload |
| Bootstrap | 5.x | Styling, grid, navbar, forms, cards |
| JavaScript (ES modules) | — | No TypeScript (per course requirements) |

---

## Key Code Snippets

### 1. App layout and routes (`src/App.jsx`)

```jsx
const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
```

**Explanation:** `Router` enables client-side navigation. Each `Route` connects a URL path to a page component. The layout keeps the navbar and footer visible on all pages.

---

### 2. Responsive navbar (`src/components/Navbar.jsx`)

```jsx
<button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#mainNavbar"
>
  <span className="navbar-toggler-icon"></span>
</button>
```

**Explanation:** On small screens, Bootstrap collapses the menu. The toggler button shows or hides links. `NavLink` components highlight the active page.

---

### 3. Features page with cards (`src/pages/Features.jsx`)

```jsx
<div className="row g-4">
  {features.map((feature) => (
    <FeatureCard
      key={feature.id}
      icon={feature.icon}
      title={feature.title}
      description={feature.description}
    />
  ))}
</div>
```

**Explanation:** An array of feature objects is mapped into `FeatureCard` components. Bootstrap’s `row` and `col-*` classes make the layout responsive.

---

### 4. Contact form (`src/pages/Contact.jsx`)

```jsx
const handleSubmit = (event) => {
  event.preventDefault();
  alert("Thank you! Your message was sent (demo only).");
};

<form onSubmit={handleSubmit}>
  <input type="text" id="name" required />
  <input type="email" id="email" required />
  <textarea id="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

**Explanation:** `preventDefault` stops the browser from reloading the page. In a real project, the form data would be sent to a server; here an alert demonstrates successful submission.

---

## Conclusion

_Add 1–2 paragraphs summarizing what you built, what you learned, and possible improvements (e.g. backend for the contact form, user login, product database)._

---

## References

- React documentation: https://react.dev/  
- React Router: https://reactrouter.com/  
- Bootstrap 5: https://getbootstrap.com/  
- Vite: https://vite.dev/  
