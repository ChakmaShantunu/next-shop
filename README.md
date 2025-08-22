This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🛍️ Next-Shop  

A simple e-commerce demo app built with **Next.js 15 (App Router)**, **NextAuth.js** for authentication, and **TailwindCSS** for styling.  

---

## 🚀 Features  

- 🔐 **Authentication** with NextAuth (Google / Credentials)  
- 🖼️ **Landing Page** with Navbar, Hero, Product Highlights, and Footer  
- 📦 **Product List Page** (publicly accessible)  
- 🔍 **Product Details Page** for viewing full product info  
- 🔒 **Protected Dashboard** to add new products (only for logged-in users)  

---

## 🛠️ Tech Stack  

- [Next.js 15](https://nextjs.org/) (App Router)  
- [NextAuth.js](https://next-auth.js.org/) (Authentication)  
- [React](https://react.dev/)  
- [TailwindCSS](https://tailwindcss.com/)  

---


## ⚡ Getting Started  

### 1️⃣ Clone the repository  
```bash
live site: https://next-shop-one-ruddy.vercel.app
git client clone: https://github.com/ChakmaShantunu/next-shop.git
git server clone:  https://github.com/ChakmaShantunu/next-shop-server.git
cd next-shop


Setup Environment Variables

Create a .env.local file in the root directory and add:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

🌐 Routes Summary

/ → Landing Page (Navbar, Hero, Highlights, Footer)

/login → Login Page (NextAuth)

/products → Product List (Public)

/products/[id] → Product Details (Public)

/dashboard/add-product → Add Product (Protected, requires login)


