# 🎨 Customization Guide

This guide will help you personalize your Data Science portfolio website.

## 📝 Quick Start Checklist

1. ✅ Update personal information
2. ✅ Replace placeholder images
3. ✅ Add your actual projects
4. ✅ Update skills and experience
5. ✅ Configure contact form
6. ✅ Update social media links
7. ✅ Add resume download link

---

## 1️⃣ Personal Information

### Hero Section (`components/Hero.vue`)

**Update the tagline:**
```vue
<h1 class="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
  YOUR CUSTOM TAGLINE HERE
  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
    YOUR HIGHLIGHTED TEXT
  </span>
</h1>
```

**Update professional title:**
```vue
<p class="text-xl md:text-2xl text-light/80 mb-4">
  Your Title | Your Specialization | Your Expertise
</p>
```

**Update statistics:**
```javascript
<div class="stat-card">
  <div class="text-3xl font-bold text-accent">XX+</div>
  <div class="text-sm text-light/60">Your Metric</div>
</div>
```

---

## 2️⃣ About Section (`components/About.vue`)

### Add Your Profile Photo

Replace the SVG placeholder with your image:

```vue
<!-- Replace this: -->
<div class="w-full h-full flex items-center justify-center text-6xl text-accent/20">
  <svg>...</svg>
</div>

<!-- With this: -->
<img 
  src="/images/profile.jpg" 
  alt="Your Name" 
  class="w-full h-full object-cover"
/>
```

### Update Your Story

```vue
<p class="text-light/80 mb-4 leading-relaxed">
  Write your first paragraph about your background...
</p>

<p class="text-light/80 mb-8 leading-relaxed">
  Write your second paragraph about your journey...
</p>
```

### Update Timeline

```vue
<!-- Education -->
<p class="text-light/60">YOUR DEGREE | YOUR UNIVERSITY</p>

<!-- Certifications -->
<p class="text-light/60">YOUR CERTIFICATIONS</p>

<!-- Career -->
<p class="text-light/60">YOUR ROLE at COMPANY | YOUR ACHIEVEMENTS</p>
```

---

## 3️⃣ Skills Section (`components/Skills.vue`)

### Update Skill Levels

```javascript
const programmingLanguages = [
  { name: 'Python', level: 95 },      // 0-100
  { name: 'R', level: 85 },
  { name: 'SQL', level: 90 },
  { name: 'JavaScript', level: 75 }
]

// Add more skills:
const programmingLanguages = [
  { name: 'Python', level: 95 },
  { name: 'R', level: 85 },
  { name: 'Java', level: 80 },        // New skill
  { name: 'Scala', level: 70 }        // New skill
]
```

### Add New Skill Categories

```vue
<!-- Add a new category -->
<div class="skill-category">
  <div class="skill-icon bg-primary/20 border-primary">
    <svg><!-- Your icon --></svg>
  </div>
  <h3 class="skill-category-title">Your Category</h3>
  <ul class="skill-list">
    <li v-for="skill in yourSkills" :key="skill.name" class="skill-item">
      <!-- Skill content -->
    </li>
  </ul>
</div>
```

### Update Core Competencies

```javascript
const coreSkills = [
  'Machine Learning',
  'Deep Learning',
  'Your New Skill',      // Add here
  'Another Skill',       // Add here
  'Data Cleaning',
  'Feature Engineering',
]
```

---

## 4️⃣ Portfolio Section (`components/Portfolio.vue`)

### Add Your Projects

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Brief description of your project (1-2 sentences)',
    tags: ['Tag1', 'Tag2', 'Tag3'],
    category: 'Machine Learning', // Must match filter categories
    metric: '95% Accuracy',        // Your achievement metric
    date: '2024',
    
    // Case study details:
    overview: 'Detailed project overview paragraph...',
    problem: 'Description of the problem and dataset...',
    methodology: [
      'Step 1 of your process',
      'Step 2 of your process',
      'Step 3 of your process',
      'Step 4 of your process',
      'Step 5 of your process'
    ],
    results: 'Detailed results description with impact...'
  },
  // Add more projects...
]
```

### Add Project Images

Create an `assets/images/projects/` folder and add images:

```vue
<!-- In the project thumbnail section: -->
<div class="project-thumbnail">
  <img 
    :src="`/images/projects/${project.id}.jpg`" 
    :alt="project.title"
    class="w-full h-full object-cover"
  />
  <div class="project-overlay">
    <button @click="openModal(project)" class="view-btn">
      View Case Study
    </button>
  </div>
</div>
```

### Update GitHub/Notebook Links

```vue
<div class="flex gap-4">
  <a :href="project.githubUrl" target="_blank" class="btn-primary">
    View on GitHub
  </a>
  <a :href="project.notebookUrl" target="_blank" class="btn-secondary">
    View Notebook
  </a>
</div>
```

Add URLs to project objects:
```javascript
{
  id: 1,
  title: 'Project Name',
  // ... other fields
  githubUrl: 'https://github.com/yourusername/project-name',
  notebookUrl: 'https://kaggle.com/yournotebook'
}
```

### Customize Filter Categories

```javascript
const categories = [
  'All', 
  'Machine Learning', 
  'Your Category',    // Add custom category
  'Another Category'  // Add custom category
]
```

---

## 5️⃣ Contact Section (`components/Contact.vue`)

### Update Email

```vue
<a href="mailto:YOUR.EMAIL@example.com" class="contact-link">
  <!-- ... -->
  <div class="text-sm text-light/60">YOUR.EMAIL@example.com</div>
</a>
```

### Update Social Links

```vue
<!-- LinkedIn -->
<a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" class="contact-link">

<!-- GitHub -->
<a href="https://github.com/YOUR-USERNAME" target="_blank" class="contact-link">

<!-- Kaggle -->
<a href="https://kaggle.com/YOUR-USERNAME" target="_blank" class="contact-link">

<!-- Twitter/X -->
<a href="https://twitter.com/YOUR-HANDLE" target="_blank" class="contact-link">
```

### Configure Contact Form Backend

The form currently logs to console. To make it functional:

**Option 1: Formspree**
```bash
npm install @formspree/vue
```

```vue
<script setup>
import { useForm } from '@formspree/vue'

const { submit, submitting, succeeded } = useForm('YOUR_FORMSPREE_ID')

const handleSubmit = async (event) => {
  await submit(event)
}
</script>
```

**Option 2: EmailJS**
```bash
npm install @emailjs/browser
```

```javascript
import emailjs from '@emailjs/browser'

const handleSubmit = () => {
  emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData,
    'YOUR_PUBLIC_KEY'
  )
  .then(() => {
    showSuccess.value = true
  })
}
```

**Option 3: Netlify Forms**
```vue
<form @submit.prevent="handleSubmit" netlify>
  <input type="hidden" name="form-name" value="contact" />
  <!-- Your form fields -->
</form>
```

---

## 6️⃣ Resume Download (`components/Hero.vue`)

### Add Resume Link

1. Place your resume PDF in `public/resume.pdf`
2. Update the button:

```vue
<a href="/resume.pdf" download="YourName_Resume.pdf" class="btn-secondary">
  Download Resume
</a>
```

Or link to Google Drive/Dropbox:
```vue
<a href="https://drive.google.com/file/d/YOUR_FILE_ID" target="_blank" class="btn-secondary">
  Download Resume
</a>
```

---

## 7️⃣ Color Customization

### Update Theme Colors (`tailwind.config.js`)

```javascript
colors: {
  primary: '#YOUR_COLOR',      // Main brand color
  secondary: '#YOUR_COLOR',    // Secondary accents
  accent: '#YOUR_COLOR',       // Highlights
  dark: '#YOUR_COLOR',         // Background
  light: '#YOUR_COLOR',        // Text on dark
  text: '#YOUR_COLOR',         // Primary text
}
```

### Color Scheme Ideas

**Professional Blue:**
```javascript
primary: '#0066CC',
secondary: '#0099FF',
accent: '#00CCFF',
dark: '#1A1A2E',
light: '#EAEAEA',
```

**Vibrant Purple:**
```javascript
primary: '#6C63FF',
secondary: '#A855F7',
accent: '#FCD34D',
dark: '#0F0F23',
light: '#F3F4F6',
```

**Green Tech:**
```javascript
primary: '#10B981',
secondary: '#14B8A6',
accent: '#FDE047',
dark: '#111827',
light: '#F9FAFB',
```

---

## 8️⃣ Typography Customization

### Change Fonts (`nuxt.config.ts`)

```typescript
link: [
  { 
    rel: 'stylesheet', 
    href: 'https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@400;600;700&family=YourBodyFont:wght@300;400;500;600&display=swap' 
  }
]
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  heading: ['YourHeadingFont', 'sans-serif'],
  body: ['YourBodyFont', 'sans-serif'],
}
```

### Popular Font Combinations

1. **Modern Tech:**
   - Heading: Poppins
   - Body: Inter

2. **Classic Professional:**
   - Heading: Montserrat
   - Body: Roboto

3. **Geometric Bold:**
   - Heading: Space Grotesk
   - Body: IBM Plex Sans

4. **Elegant:**
   - Heading: Playfair Display
   - Body: Source Sans Pro

---

## 9️⃣ Animation Customization

### Adjust Particle Network (`components/Hero.vue`)

```javascript
// Change number of particles
const particleCount = 80  // Increase/decrease

// Change particle speed
this.vx = (Math.random() - 0.5) * 0.5  // Increase multiplier for faster

// Change connection distance
if (distance < 150) {  // Increase for more connections
```

### Disable Animations

For better performance or accessibility:

```vue
<!-- In Hero.vue, comment out canvas: -->
<!-- <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas> -->

<!-- Or disable script: -->
<script setup>
// const canvas = ref(null)
// onMounted(() => {
//   ... animation code
// })
</script>
```

---

## 🔟 SEO Optimization

### Update Meta Tags (`nuxt.config.ts`)

```typescript
app: {
  head: {
    title: 'Your Name - Data Scientist',
    meta: [
      { 
        name: 'description', 
        content: 'Your custom description with keywords' 
      },
      { 
        property: 'og:title', 
        content: 'Your Name - Data Scientist' 
      },
      { 
        property: 'og:description', 
        content: 'Your description' 
      },
      { 
        property: 'og:image', 
        content: '/og-image.jpg' 
      }
    ]
  }
}
```

### Add Open Graph Image

Create a 1200x630px image and place it in `public/og-image.jpg`

---

## 1️⃣1️⃣ Analytics Setup

### Google Analytics

```bash
npm install @nuxtjs/google-gtag
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-gtag'
  ],
  googleGtag: {
    id: 'G-XXXXXXXXXX'
  }
})
```

---

## 1️⃣2️⃣ Performance Tips

1. **Optimize Images:**
   ```bash
   npm install @nuxt/image
   ```
   
   ```vue
   <NuxtImg src="/image.jpg" width="800" height="600" />
   ```

2. **Lazy Load Components:**
   ```vue
   <LazyPortfolio v-if="showPortfolio" />
   ```

3. **Code Splitting:**
   ```javascript
   const Portfolio = defineAsyncComponent(() => 
     import('~/components/Portfolio.vue')
   )
   ```

---

## 📱 Testing Checklist

- [ ] Test on mobile devices (iOS & Android)
- [ ] Test on tablets
- [ ] Test on different browsers
- [ ] Check all links work
- [ ] Verify form submission
- [ ] Test navigation menu
- [ ] Check modal functionality
- [ ] Verify responsive images
- [ ] Test keyboard navigation
- [ ] Run Lighthouse audit

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

### Netlify

1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.output/public`

### Manual Deployment

```bash
npm run generate
# Upload .output/public folder to any static host
```

---

## 🆘 Troubleshooting

**Problem**: Animations not working
- Check browser console for errors
- Verify Canvas API is supported
- Disable animations for better compatibility

**Problem**: Styles not applying
- Clear browser cache
- Run `npm run dev` to rebuild
- Check Tailwind classes are correct

**Problem**: Images not loading
- Verify file paths
- Check image files are in `public/` folder
- Use correct file extensions

**Problem**: Form not submitting
- Check console for errors
- Verify form backend is configured
- Test with simple console.log first

---

## 📚 Resources

- [Nuxt.js Docs](https://nuxt.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vue.js Docs](https://vuejs.org/guide)
- [Heroicons](https://heroicons.com/)
- [Google Fonts](https://fonts.google.com/)

---

**Need Help?** Check the issues on GitHub or reach out!

Happy customizing! 🎉
