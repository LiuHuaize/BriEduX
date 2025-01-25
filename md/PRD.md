# Product Requirements Document (PRD)

## App Overview
- **Name**: Get Job With AI  
- **Description**: A SaaS web app that helps Chinese university students build resumes and find jobs using AI.  
- **Tagline**: "Your AI-powered career assistant."  

## Target Audience
- **Primary Users**: University students in China approaching graduation.  
- **Demographics**:  
  - Age: 20–25 years old.  
  - Language: Primarily Mandarin speakers.  
  - Goals: Build a professional resume, find relevant job opportunities.  
  - Pain Points: Lack of experience in resume writing, difficulty finding jobs that match their skills and preferences.  

## Key Features
### 1. Resume-Building Feature
- **Input Methods**: Voice (speech-to-text) and text.  
- **Language Selection**: Users select their language (e.g., Mandarin) before speaking.  
- **AI Guidance**: GPT asks hook questions to guide users in describing their education, work experience, and job requirements.  
- **Output**: Generates a well-formatted resume (e.g., PDF).  

### 2. Job-Matching Feature
- **User Preferences**: Minimum salary, job location, job type (e.g., remote, on-site).  
- **Job Search**: Coze API searches for jobs based on the user’s resume and preferences.  
- **Resume Parsing**: Converts resumes (e.g., PDF) into text for analysis.  
- **Metadata Extraction**: Coze API outputs job metadata (e.g., job title, description, salary, job URL).  
- **Job Scraping**: Scrapes the job URL to extract detailed job requirements and responsibilities.  
- **Matching Score**: Provides a score (e.g., 80% match) and orders jobs by relevance.  
- **Job Analysis**: Analyzes how well the resume matches the job requirements (premium feature).  

### 3. No Direct Job Application
- The app focuses on resume building and job matching but does not allow users to apply directly.  

## Platform
- **Type**: Web app.  
- **Framework**: Next.js (App Router).  
- **Responsive Design**: Works well on both desktop and mobile browsers.  

## Tech Stack
- **Frontend**: Next.js (App Router).  
- **Backend**: Firebase (Firestore, Firebase Auth, Firebase Storage).  
- **APIs**:  
  - AssemblyAI (or similar) for speech-to-text.  
  - DeepSeek API for analysis and chat features.  
  - Coze API for job searching and matching.  
- **Web Scraping**: A library like **Cheerio** (Node.js) or **Beautiful Soup** (Python) to scrape job URLs for requirements and responsibilities.  

## Timeline
- **Goal**: Complete MVP in 1 month.  

## Success Metrics
- **User Acquisition**: Number of registered users.  
- **Engagement**: Number of resumes generated and jobs matched per user.  
- **Retention**: Percentage of users returning to the app.  

## Assumptions and Risks
- **Assumptions**:  
  - Users will provide accurate information for resume building.  
  - Coze API will provide reliable job data.  
  - Job URLs will be scrapable (no blocking mechanisms like CAPTCHA).  
- **Risks**:  
  - Speech-to-text accuracy for Mandarin.  
  - Job matching algorithm may not always provide perfect results.  
  - Web scraping may be blocked by job portals or violate their terms of service.  