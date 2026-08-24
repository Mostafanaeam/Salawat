# Salawat - Islamic Devotional Text & Poetry Book

## Project Overview
A production-grade, highly performant, and beautifully designed web application for Islamic devotional texts and poetry, built with React, Vite, and Tailwind CSS.

## Tech Stack
- **Framework**: React with Vite
- **Styling**: Tailwind CSS with @tailwindcss/typography plugin
- **Icons**: Lucide React
- **Typography**: Google Arabic Fonts (Amiri for body, Cairo for headers)
- **Architecture**: Feature-first clean architecture, data-driven design

## Core Features Implemented

### 1. RTL & Arabic First Design
- Complete right-to-left layout with proper Arabic text-alignment
- Amiri font for poetry/prayers body text with proper diacritics rendering
- Cairo font for UI headers
- Direction-aware styling throughout

### 2. Responsive Dual-View Poetry Renderer
- **Large Screens**: Side-by-side two columns (شطرين: الصدر والجزء الآخر/العجز)
- **Mobile Screens**: Stacked vertically cleanly without breaking diacritics
- Grid-responsive design that adapts from 1 column to 2 columns

### 3. Content Filtering & Navigation
- Sidebar navigation grouped by 5 categories:
  - المقدمة (Introduction)
  - أحاديث الفضل (Hadith of Virtue)
  - الصلوات المأثورة (Traditional Prayers)
  - صلوات الصالحين (Righteous People's Prayers)
  - القصائد الشعرية (Poetic Verses)
- Real-time instant search bar filtering prayers, titles, or poem verses

### 4. User Experience Utilities
- **Dark Mode / Light Mode toggle** with localStorage persistence
- **Font Size Resizer** (A- / A+) for reading accessibility with persistent settings
- **Quick "Copy Text"** button on each prayer/poem card with toast notifications
- **Favorite/Bookmark system** to save specific prayers/verses locally

### 5. Data Structure (JSON Driven)
- Centralized `content.json` with dynamic loading
- Supports:
  - Meta/Intro blocks (collector info, Quran verse)
  - List of strings (Hadith & General Prayers)
  - Named structured objects (Salawat with titles, notes, sources)
  - Verses array [{ front, back }] for poetic structures

### 6. Design & Aesthetics
- **Primary Palette**: Emerald-800, Emerald-900 with Amber-500, Amber-600 accents
- **Clean card borders**, soft shadows, and high contrast reading modes
- **Serene, focused, ultra-fast** reading interface
- Islamic manuscript aesthetics throughout

## Component Architecture

### Layouts (`src/components/layout/`)
- `Navbar.tsx` - App header with title and theme toggle
- `Sidebar.tsx` - Collapsible category navigation
- `Footer.tsx` - Footer with collector info

### UI Components (`src/components/ui/`)
- `ThemeToggle.tsx` - Sun/moon theme switch
- `SearchInput.tsx` - Instant search bar with icon
- `FontResizer.tsx` - A-/A+ font size controls
- `Toast.tsx` - Toast notifications with auto-dismiss
- `card.tsx` - Reusable card component

### Reader Components (`src/components/reader/`)
- `PrayerCard.tsx` - Prayer/poem card with favorite & copy functionality
- `PoemRenderer.tsx` - Responsive dual-view poetry renderer
- `HadithList.tsx` - Hadith list component
- `MetadataHeader.tsx` - Intro/metadata display

### Hooks (`src/hooks/`)
- `useTheme.tsx` - Theme state management with localStorage
- `useFontSize.tsx` - Font size state with persistence
- `useSearch.tsx` - Real-time search filtering
- `useFavorites.tsx` - Favorite/bookmark system with localStorage

### Data (`src/data/content.json`)
- Structured Arabic content with:
  - Meta information (title, subtitle, collector, Quran verse)
  - 5 categorized content sections
  - 20+ poems including: كعب بن زهير, البردة, المضرية, المحمدية
  - Multiple hadiths and prayers

## Key Files Created
- `tailwind.config.js` - Custom theme with emerald/amber palette & Arabic fonts
- `postcss.config.js` - PostCSS configuration with autoprefixer
- `index.html` - RTL Arabic document with Google Fonts preconnect
- `src/main.tsx` - Application entry point
- `src/App.tsx` - Main application component composing all views

## Running the Application
```bash
npm run dev
```
App runs at `http://localhost:5174/`

## Unique Features
- **Poetic Dual-View**: Kaa-b bin Zahir, Al-Burdah, Al-Mudriyyah, Al-Muhammadiyyah poems with front/back verse rendering
- **Search Across Content**: Filter by titles, texts, and verse content in real-time
- **Accessibility**: Font resizer, high contrast modes, proper ARIA labels
- **Persistent Preferences**: Theme and font size saved to localStorage