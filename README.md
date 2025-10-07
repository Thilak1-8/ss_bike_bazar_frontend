# Shiva Sai Bike Bazaar
> **A full-stack web application for managing and browsing motorcycle listings.*

---

## Description

**Shiva Sai Bike Bazaar** is a user-friendly full-stack web application designed for buying, selling, and managing motorcycle (bike) listings. It allows users to browse available bikes, view detailed images and specifications, and enables admins to perform CRUD (Create, Read, Update, Delete) operations on listings. The app features interactive UI components for seamless navigation and a robust backend for data persistence.

**Problem Solved:** Streamlines the bike marketplace process by providing an organized platform for sellers to upload bikes and buyers to discover options quickly.

**Key Highlights:**
- Real-time listing management
- Responsive design for mobile and desktop
- Secure admin controls for data integrity

---

## Features

### User Features
- Browse bikes via a dynamic slider (`AvailableNow` component) showing featured/available listings
- Search and filter bikes by category, price, or location
- View detailed bike pages with images, specs, and contact info

### Admin Features
- Upload new bike listings with images and details (`AdminUpload` component)
- Edit or delete existing listings via CRUD interfaces
- Dashboard for overview of all bikes and user activity

### Additional Features
- Image gallery sliders for bike visuals
- User authentication (if implemented; e.g., JWT for admins)
- Responsive UI with React hooks for state management

---

## Tech Stack

**Frontend:**
- React.js (for components like `AvailableNow` and `AdminUpload`)
- CSS/SCSS for styling (or Tailwind CSS/Bootstrap if used)
- State management: React Hooks or Redux

**Backend:**
- Node.js with Express.js for API server
- RESTful API endpoints for bike operations

**Database:**
- PostgreSQL for storing bike details, user data, and images

**Other Tools:**
- File upload handling (e.g., Multer for images)
- Deployment: Vercel/Netlify for frontend, Heroku/Render for backend
- Version Control: Git/GitHub

---

## Installation

### Prerequisites
- Node.js (v18+)
- PostgreSQL (v14+)
- Yarn or npm for package management

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Thilak1-8/ss_bike_bazar_frontend.git
   ```
2. **Navigate to the project:**
   ```sh
   cd ss_bike_bazar_frontend
   ```

3. **Install dependencies:**
   - Frontend:
     ```sh
     cd client && npm install
     ```
   - Backend:
     ```sh
     cd server && npm install
     ```

4. **Set up environment variables:**
   Create `.env` in `server` folder with:
   ```
   DATABASE_URL=your_postgres_url
   JWT_SECRET=your_secret
   PORT=5000
   ```

5. **Set up database:**
   - Run migrations:
     ```sh
     npx prisma migrate dev
     ```
   - Seed initial data:
     ```sh
     npm run seed
     ```
     *(If seed script exists)*

6. **Start the servers:**
   - Backend:
     ```sh
     cd server && npm run dev
     ```
   - Frontend:
     ```sh
     cd client && npm start
     ```

#### Local URLs
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

---

## Usage

### Running the App

- Access the frontend at [http://localhost:3000](http://localhost:3000)
- For admin access, log in via `/admin` route (demo credentials: `admin` / `admin123`)

### Example Workflows

- **User Browsing:** Navigate to home page → Scroll through `AvailableNow` slider → Click a bike for details
- **Admin Upload:** Go to `/admin/upload` → Fill form with bike name, price, images → Submit

