# 🔐 NextAuth v5 OAuth Authentication 

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&style=for-the-badge)
![NextAuth](https://img.shields.io/badge/NextAuth-v5-blue?logo=auth0&style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-ORM-brightgreen?logo=prisma&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb&style=for-the-badge)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

This is a **Next.js 15** authentication project using **NextAuth v5** with **OAuth providers (GitHub, Google, etc.)** and **MongoDB Atlas** for database management.

## 🚀 Features

- Authentication with OAuth providers (Google, GitHub, etc.)
- Secure session management with NextAuth
- Protected routes with middleware
- Styled with Tailwind CSS
- Database integration with MongoDB Atlas

- ## 🌟 Features

- ✅ **OAuth Providers**: Google, GitHub & More
- 🔒 **Protected Routes** with Middleware
- 🎨 **Tailwind CSS Styled**
- 🛡️ **Session Encryption** & CSRF Protection
- 📦 **Prisma ORM** with MongoDB Atlas

## 🛠️ Tech Stack

- **Next.js 15** (App Router)
- **NextAuth.js v5**
- **MongoDB Atlas** (Database)
- **Prisma ORM**
- **Tailwind CSS** (Styling)

## 🗂️ Project Architecture
![Project Structure](https://img.shields.io/badge/structure-organized-brightgreen)
```
📦 nextauth-v5-oauth-auth
├── 📜 Core Foundation
│   ├── next.config.ts       # ⚙️ Next.js Advanced Config
│   ├── tailwind.config.ts   # 🎨 Design System Setup
│   └── tsconfig.json        # 🛠️ TypeScript Rules
│
├── 🔐 Auth Infrastructure
│   ├── prisma/schema.prisma # 🗃️ Database Schema
│   ├── src/auth.ts          # 🔑 Auth Configuration
│   └── src/middleware.ts    # 🛡️ Security Layer
│
├── ⚡️ Action Controllers
│   └── src/actions/
│       ├── formActions.ts   # 📝 Form Handling
│       └── postActions.ts   # 📮 Content Management
│
├── 🎨 UI Components
│   ├── public/              # 📁 Static Assets
│   └── src/app/
│       ├── components/      # 🧩 Atomic Design System
│       └── globals.css      # 🌈 Global Styles
│
├── 🌐 API Gateway
│   └── src/app/api/
│       └── auth/
│           ├── [...nextauth] # 🔗 NextAuth Core
│           ├── login/        # 🖋️ Custom Auth Flow
│           └── signup/       # 📝 Registration Handler
│
└── 🛠️ Development Toolkit
    ├── .env.example         # 📋 Configuration Template
    ├── eslint.config.mjs    # ✨ Code Quality
    └── postcss.config.mjs   # 🎨 CSS Processing
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AbbasRostami/nextauth-v5-oauth-authentication.git
cd nextauth-v5-oauth-authentication
```

### 2️⃣ Install dependencies

```
yarn install  # or npm install
```

### 3️⃣ Set up environment variables
Create a **.env.local** file and copy the values from **.env.example**, then update them with your credentials.
```bash
# Create environment file
cp .env.example .env.local
```
##### 🛡️ NextAuth Configuration
```
NEXTAUTH_SECRET="your_ultra_secure_secret_key"  # Generate using: openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000             # Development URL
NEXTAUTH_TRUST_HOST=true                       # Enable in development

# 🔑 Authentication Providers
# ============================

# 🐙 GitHub OAuth
GITHUB_CLIENT_ID="your_github_oauth_client_id"
GITHUB_CLIENT_SECRET="your_github_oauth_client_secret"

# 📧 Google OAuth
AUTH_GOOGLE_ID="your_google_oauth_client_id.apps.googleusercontent.com"
AUTH_GOOGLE_SECRET="your_google_oauth_client_secret"

# 🗄️ Database Configuration
# =========================
DATABASE_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority"

# 🔒 Security Tokens
# ==================
JWT_SECRET="your_jwt_encryption_key"  # Generate using: openssl rand -base64 32

# 🌐 API Configuration
# ====================
NEXT_PUBLIC_API_URL="http://localhost:3000"
```
### 4️⃣ Run the project
```
yarn dev  # or npm run dev
```

Application will be running at: http://localhost:3000

## 🔑 Authentication Providers
This project uses **NextAuth v5** for authentication. You can add more OAuth providers by modifying **src/auth.ts**.

## 🔐 Protected Routes

Some routes (**/posts**, **/users**) are **protected** and require authentication. Middleware in **middleware.ts** handles access control.

## 📜 License

This project is open-source and available under the **MIT License**.

---

**Happy Coding!** 🚀  
**Developed with ❤️ by [Abbas Rostami](https://github.com/AbbasRostami)**  

[![GitHub Stars](https://img.shields.io/github/stars/AbbasRostami/NextAuth-v5-OAuth-Authentication?style=for-the-badge&logo=github&label=Stars)](https://github.com/:username/NextAuth-v5-OAuth-Authentication/stargazers)
