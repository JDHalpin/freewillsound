# Recording Studio Website

Professional website for [Studio Name] built with vanilla HTML, CSS, and JavaScript. Designed for easy content management via Decap CMS after initial deployment.

## 📁 Project Structure

```
studio-site/
├── index.html              # Main HTML file
├── css/
│   ├── reset.css          # CSS reset for browser consistency
│   └── main.css           # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/                # Image assets
│   └── church.jpg         # Hero image
├── assets/                # Other assets (fonts, icons, etc.)
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local development server (optional for development)
- Git for version control
- GitHub account (for deployment)

### Local Development

1. **Clone or download this repository**
   ```bash
   git clone [repository-url]
   cd studio-site
   ```

2. **Open in browser**
   - Simply open `index.html` in your browser, or
   - Use a local server (Python, VS Code Live Server, etc.)
   
   ```bash
   # Example with Python
   python -m http.server 8000
   ```

3. **Make changes**
   - Edit HTML in `index.html`
   - Edit styles in `css/main.css`
   - Add images to `images/` folder

## 🌐 Deployment to Netlify

### Initial Setup

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin [your-github-repo]
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Log in to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Deploy settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Click "Deploy site"

3. **Add Custom Domain**
   - In Netlify dashboard: Site settings → Domain management
   - Click "Add custom domain"
   - Follow instructions to update DNS at your domain registrar

### Auto-Deploy
Once connected, any push to the `main` branch will automatically deploy to Netlify.

## 🎨 Customization Guide

### Updating Content

**Change text:**
- Open `index.html`
- Find the text you want to change
- Save and push to GitHub

**Change images:**
- Add new image to `images/` folder
- Update image path in `index.html`:
  ```html
  <img src="images/your-new-image.jpg" alt="Description">
  ```

**Change colors:**
- Open `css/main.css`
- Edit CSS custom properties at the top:
  ```css
  :root {
      --color-bg: #0a0a0a;      /* Background color */
      --color-text: #e8e8e8;    /* Text color */
      --color-accent: #646464;  /* Accent color */
  }
  ```

### Adding New Pages

1. **Create new HTML file** (e.g., `services.html`)
2. **Copy structure from `index.html`**
3. **Update navigation** (when header is added)
4. **Add to git and push**

## 📋 Adding Decap CMS (Future Step)

Once the basic site is deployed, you can add Decap CMS for non-technical content editing:

1. **Create `/admin` folder**
2. **Add Decap CMS configuration**
3. **Enable Netlify Identity**
4. **Content editors can log in at `yoursite.com/admin`**

See Decap CMS documentation: https://decapcms.org/docs/intro/

## ✅ Best Practices

### File Naming
- Use lowercase
- Use hyphens for spaces: `my-image.jpg` (not `My Image.jpg`)
- Be descriptive: `studio-exterior.jpg` (not `img1.jpg`)

### Images
- Optimize before uploading (use tools like TinyPNG, Squoosh)
- Use appropriate formats:
  - JPG for photos
  - PNG for graphics with transparency
  - WebP for modern browsers (optional)
- Include descriptive alt text for accessibility

### Code Organization
- Keep HTML semantic (`<main>`, `<section>`, `<nav>`)
- CSS organized by section (see comments in `main.css`)
- JavaScript modular and documented

### Accessibility
- All images have `alt` attributes
- Proper heading hierarchy (h1, h2, h3)
- Color contrast meets WCAG AA standards
- Skip link for keyboard navigation

## 🔧 Troubleshooting

**Images not showing:**
- Check file path is correct
- Ensure image is in `images/` folder
- Check file extension matches (`.jpg` vs `.JPG`)

**Styles not applying:**
- Clear browser cache
- Check CSS file path in `<link>` tag
- Inspect element in browser DevTools

**Site not deploying:**
- Check Netlify deploy log for errors
- Verify all files are pushed to GitHub
- Check branch name matches Netlify settings

## 📞 Support

For technical issues or questions, contact [your contact info].

## 📄 License

[Add appropriate license]

---

**Last Updated:** February 2026
**Version:** 1.0.0
