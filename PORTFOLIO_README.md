# Designer Portfolio Website

A stunning, dark-themed portfolio website built with Next.js 16 and featuring the most impressive Aceternity UI components.

## 🎨 Features

### Aceternity UI Components Included

1. **Floating Navigation Bar** - Auto-hiding navbar with blur effect and smooth scroll
2. **Spotlight Effect** - Dramatic lighting effect in the hero section
3. **Text Generate Effect** - Animated text reveal on page load
4. **Stars Background** - Twinkling stars particle animation
5. **Moving Border Buttons** - Animated gradient borders on CTAs
6. **3D Card Effect** - Interactive tilting cards with depth
7. **Background Beams** - Animated light beam effects
8. **Bento Grid** - Modern grid layout for skills
9. **Focus Cards** - Hover-to-expand project cards
10. **Wavy Background** - Animated wave patterns using simplex noise
11. **Timeline Component** - Animated experience timeline with scroll progress
12. **Infinite Moving Cards** - Auto-scrolling testimonials
13. **Responsive Design** - Mobile-first approach for all screen sizes

## 🚀 Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Effects:** Simplex Noise
- **TypeScript:** Full type safety

## 📁 Project Structure

```
shadow/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── layout.tsx        # Root layout with dark mode
│   └── globals.css       # Global styles with slate theme
├── components/
│   └── ui/               # All Aceternity UI components
│       ├── floating-navbar.tsx
│       ├── spotlight.tsx
│       ├── text-generate-effect.tsx
│       ├── stars-background.tsx
│       ├── moving-border.tsx
│       ├── card-3d.tsx
│       ├── background-beams.tsx
│       ├── bento-grid.tsx
│       ├── focus-cards.tsx
│       ├── wavy-background.tsx
│       ├── timeline.tsx
│       ├── infinite-moving-cards.tsx
│       ├── parallax-scroll.tsx
│       ├── lamp.tsx
│       └── tabs.tsx
└── lib/
    └── utils.ts          # Utility functions
```

## 🎯 Portfolio Sections

1. **Hero Section**
   - Spotlight background effect
   - Glowing stars animation
   - Text generate effect for headline
   - Moving border CTA buttons

2. **About Section**
   - 3D card with interactive tilt
   - Background beams effect
   - Professional bio and stats

3. **Skills Section**
   - Bento grid layout
   - 6 skill cards with icons
   - Hover animations
   - Gradient backgrounds

4. **Projects Section**
   - Wavy animated background
   - Focus cards for project showcase
   - Blur effect on non-hovered cards

5. **Experience Timeline**
   - Animated vertical timeline
   - Scroll-triggered animations
   - Milestone cards with content

6. **Testimonials**
   - Infinite moving cards
   - Auto-scrolling testimonials
   - Smooth animations

7. **Contact Section**
   - Animated contact form
   - Background beams
   - Social media links
   - Moving border submit button

## 🎨 Color Scheme (Slate Theme)

- **Background:** slate-950, slate-900 (dark)
- **Text:** slate-100, slate-200 (light)
- **Accents:** slate-500, slate-400
- **Primary:** cyan-400, cyan-500 (bright highlights)
- **Gradients:** Cyan, blue, purple combinations

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Customization

### Update Personal Information

Edit `shadow/app/page.tsx`:

- **Name & Title:** Update the TextGenerateEffect `words` prop in the hero section
- **Bio:** Modify the about section CardItem content
- **Skills:** Edit the `skills` array with your own expertise
- **Projects:** Update the `projects` array with your work
- **Experience:** Modify `timelineData` with your career history
- **Testimonials:** Edit `testimonials` array with client feedback

### Modify Colors

Edit `shadow/app/globals.css`:

- Update HSL values in the `:root` section
- Modify gradient colors throughout components
- Adjust cyan highlights to your brand color

### Add More Sections

The project includes additional unused components:
- `lamp.tsx` - Dramatic lamp glow effect
- `parallax-scroll.tsx` - Parallax image grid
- `tabs.tsx` - Animated tab navigation

Import and use these in `page.tsx` as needed.

## 🎭 Component Props

Most components are highly customizable. Example:

```tsx
<StarsBackground
  starDensity={0.00015}
  allStarsTwinkle={true}
  twinkleProbability={0.7}
  minTwinkleSpeed={0.5}
  maxTwinkleSpeed={1}
/>
```

Refer to component files for all available props.

## 📱 Responsive Design

All components include responsive breakpoints:
- Mobile: Base styles
- Tablet: `md:` prefix
- Desktop: `lg:` prefix

## ⚡ Performance

- Server-side rendering with Next.js 16
- Optimized animations with Framer Motion
- Lazy loading for heavy effects
- Minimal bundle size

## 🌟 Credits

- **UI Components:** Inspired by Aceternity UI
- **Framework:** Next.js by Vercel
- **Animations:** Framer Motion
- **Icons:** React Icons

## 📄 License

This portfolio template is free to use and customize for personal or commercial projects.

---

Built with ❤️ using the most badass Aceternity UI components

