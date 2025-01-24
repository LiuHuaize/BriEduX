# Frontend Documentation

## Tech Stack
- **Framework**: Next.js (App Router).  
- **Styling**: Tailwind CSS (for utility-first styling and modern design).  
- **UI Library**: **Shadcn UI** (modern, customizable, and built on top of Tailwind CSS and Radix UI).  
- **State Management**:  
  - Local State: React `useState` and `useReducer`.  
  - Global State: **Zustand** (lightweight and easy to use).  
- **Authentication**: Firebase Auth (email/phone login).  
- **Responsive Design**: Fully responsive for both mobile and desktop.  

---

## Key Pages/Screens
1. **Landing Page**:  
   - Hero section with app tagline ("Your AI-powered career assistant").  
   - Call-to-action buttons: "Build Resume" and "Find Jobs".  
   - Features section (e.g., "AI Resume Builder", "Smart Job Matching").  
   - Testimonials or success stories (optional).  

2. **Resume Builder**:  
   - Chat interface for resume creation.  
   - Input methods: Voice (speech-to-text) and text.  
   - Language selection dropdown.  
   - Progress indicator for resume completion.  

3. **Job Matching Results**:  
   - List of jobs with metadata (title, salary, location).  
   - Matching score and relevance order.  
   - Button to view job details (scraped requirements and responsibilities).  

4. **User Profile/Settings**:  
   - User preferences (e.g., minimum salary, job location).  
   - Account settings (e.g., change password, logout).  

---

## Navigation
- **Top Navigation Bar**:  
  - Links to Home, Resume Builder, Job Matching, and Profile.  
  - Language selection dropdown.  
  - Dark mode toggle.  

---

## Styling
- **Framework**: Tailwind CSS.  
- **UI Library**: Shadcn UI (modern and customizable components).  
- **Design**: Modern, clean, and professional.  
- **Dark Mode**: Supported (toggle in the top navigation bar).  

---

## Forms
1. **Language Selection**:  
   - Dropdown with validation (required field).  
   - Options: Mandarin, English, etc.  

2. **Job Preferences**:  
   - Free-form text input for verbal preferences (e.g., "I want a remote job in Shanghai with a salary of at least 10,000 RMB").  
   - AI-powered parsing to extract structured data (e.g., location, salary, job type).  

---

## State Management
### 1. Local State
- **Form Inputs**:  
  - Language selection.  
  - Job preferences (free-form text).  
- **UI Toggles**:  
  - Dark mode.  
  - Mobile menu.  

### 2. Global State (Using Zustand)
- **User Authentication**:  
  - Store user data (e.g., email/phone, authentication status).  
- **Resume Data**:  
  - Store user inputs (e.g., education, work experience).  
  - Store the generated resume (e.g., PDF data).  
- **Job Matching Results**:  
  - Store the list of jobs and matching scores.  

---

## Authentication
- **Methods**:  
  - Email/password login.  
  - Phone number login (using Firebase Auth).  
- **Features**:  
  - Multi-factor authentication (optional).  
  - Password reset functionality.  

---

## Responsive Design
- **Breakpoints**:  
  - Mobile: < 640px.  
  - Tablet: 640px – 1024px.  
  - Desktop: > 1024px.  
- **Layout**:  
  - Single-column layout for mobile.  
  - Multi-column layout for desktop.  

---

## Third-Party Libraries
- **Frontend-Only**: None (all third-party libraries will be handled in the backend).  