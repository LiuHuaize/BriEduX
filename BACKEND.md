# Backend Documentation

## Tech Stack
- **Backend Framework**: Firebase (Firestore, Firebase Auth, Firebase Storage).  
- **Database**: Firestore (NoSQL).  
- **API Design**: RESTful API (recommended for simplicity and ease of use).  
- **Third-Party Integrations**:  
  - Coze API (job searching).  
  - DeepSeek API (analysis and chat features).  
  - AssemblyAI (speech-to-text transcription).  

---

## Database Schema
### 1. Users Collection
- **Fields**:  
  - `userId` (string, unique).  
  - `email` (string).  
  - `phone` (string).  

### 2. Resumes Collection
- **Fields**:  
  - `resumeId` (string, unique).  
  - `userId` (string, reference to Users collection).  
  - `education` (array of objects).  
  - `workExperience` (array of objects).  
  - `skills` (array of strings).  
  - `pdfUrl` (string, link to generated PDF in Firebase Storage).  

### 3. Jobs Collection
- **Fields**:  
  - `jobId` (string, unique).  
  - `userId` (string, reference to Users collection).  
  - `title` (string).  
  - `description` (string).  
  - `salary` (string).  
  - `location` (string).  
  - `url` (string).  
  - `requirements` (string, scraped from job URL).  
  - `score` (number, matching score between resume and job).  
  - `preferences` (object):  
    - `minSalary` (number).  
    - `jobLocation` (string).  
    - `jobType` (string, e.g., remote, on-site).  
  - `workflowId` (string, reference to Workflows collection).  

### 4. Workflows Collection
- **Fields**:  
  - `workflowId` (string, unique).  
  - `userId` (string, reference to Users collection).  
  - `timestamp` (number, when the workflow was run).  
  - `input` (object):  
    - `resumeId` (string).  
    - `jobPreferences` (string).  
  - `output` (object):  
    - `jobIds` (array of strings, reference to Jobs collection).  
    - `scores` (array of numbers).  

---

## API Design
### RESTful API Endpoints
#### 1. Authentication
- `POST /api/login`: Authenticate user (email/phone).  
- `POST /api/signup`: Register new user.  

#### 2. Resume Builder
- `POST /api/resume`: Save resume data.  
- `GET /api/resume/:userId`: Fetch resume data for a user.  

#### 3. Job Matching
- `POST /api/jobs`: Fetch job matching results (using Coze API).  
- `POST /api/scrape`: Scrape job URL for requirements and responsibilities.  

#### 4. Workflow History
- `POST /api/workflow`: Save workflow output.  
- `GET /api/workflow/:userId`: Fetch workflow history for a user.  

---

## Authentication
- **Firebase Auth**:  
  - Validate user tokens for protected routes.  
  - Support email/phone login.  

---

## Job Scraping
- **Logic**:  
  - Independent of Firebase (e.g., a standalone Node.js service).  
  - Scraped data is stored in the Jobs collection.  
- **Tools**:  
  - **Cheerio** (for scraping HTML).  
  - **Puppeteer** (for scraping JavaScript-rendered pages).  

---

## Error Handling
- **Status Codes**:  
  - `200`: Success.  
  - `400`: Bad request (e.g., invalid input).  
  - `401`: Unauthorized (e.g., invalid token).  
  - `500`: Server error.  
- **Error Messages**: Descriptive messages for debugging.  

---

## Rate Limiting
- **Implementation**: Firebase Security Rules or a middleware like `express-rate-limit`.  
- **Limit**: 100 requests per minute per user.  

---

## Security
- **Data Encryption**: Sensitive data (e.g., API keys) encrypted using Firebase Security Rules.  
- **Input Validation**: Validate and sanitize user inputs to prevent attacks.  