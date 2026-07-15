# Brand Commerce

A modern full-stack e-commerce platform built with the MERN stack. Brand Commerce provides a secure online shopping experience with authentication, product management, shopping cart functionality, Stripe payments, and an administrative dashboard for managing the store.

![Brand Commerce Screenshot](./frontend/public/screenshot-for-readme.png)

## 🌐 Live Demo

https://mb-commerce.vercel.app/

## 💻 GitHub Repository

https://github.com/bmhmm/brand_commerce

---

## ✨ Features

- Secure JWT Authentication
- User Registration & Login
- Refresh & Access Token Authentication
- Role-Based Authorization
- Product Management
- Product Categories
- Shopping Cart
- Secure Stripe Checkout
- Coupon System
- Admin Dashboard
- Sales Analytics
- Image Uploads with Cloudinary
- Redis Caching
- Responsive UI
- Modern Tailwind CSS Design

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Zustand
- React Router
- Axios
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis (Upstash)
- JWT Authentication
- Cloudinary
- Stripe

---

## 📁 Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_URL=your_upstash_redis_url

ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

---

## 🚀 Installation

Clone the repository

```bash
git clone https://github.com/bmhmm/brand_commerce.git
```

Go into the project

```bash
cd brand_commerce
```

Install dependencies

```bash
npm install
npm install --prefix backend
npm install --prefix frontend
```

Run the backend

```bash
npm run dev --prefix backend
```

Run the frontend

```bash
npm run dev --prefix frontend
```

---

## 📦 Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Redis: Upstash Redis
- Image Storage: Cloudinary
- Payments: Stripe

---

## 📸 Preview

Add screenshots of:

- Home Page
- Product Page
- Shopping Cart
- Checkout
- Admin Dashboard

---

## 👨‍💻 Author

**Bmhmm**

Computer Science Graduate | Full-Stack Developer

GitHub:
https://github.com/bmhmm

---

## 📄 License

This project is available for educational and portfolio purposes.

npx plugins add vercel/vercel-plugin