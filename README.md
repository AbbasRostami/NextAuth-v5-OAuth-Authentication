# 🔐 NextAuth v5 OAuth Authentication 

<h2 align="center">
  🔧 <b>Tech Stack</b> ⚙️
</h2>

<p align="center">
  <a href="https://nextjs.org/" target="_blank">
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-15.1.7-000000?logo=nextdotjs&logoColor=white&style=for-the-badge">
  </a>&nbsp;&nbsp;
  
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white&style=for-the-badge">
  </a>&nbsp;&nbsp;

  <a href="https://tailwindcss.com/" target="_blank">
    <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-3.4.1-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge">
  </a>&nbsp;&nbsp;

  <a href="https://next-auth.js.org/" target="_blank">
    <img alt="NextAuth.js" src="https://img.shields.io/badge/NextAuth.js-5.0.0--beta.25-6236FF?logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBDNS4zNzIgMCAwIDUuMzcyIDAgMTJzNS4zNzIgMTIgMTIgMTIgMTItNS4zNzIgMTItMTJTMTguNjI4IDAgMTIgMHptMCAxOC4yNTVjLTMuNDU0IDAtNi4yNTUtMi44LTYuMjU1LTYuMjU1UzguNTQ2IDUuNzQ1IDEyIDUuNzQ1czYuMjU1IDIuOCA2LjI1NSA2LjI1NS0yLjggNi4yNTUtNi4yNTUgNi4yNTV6TTEyIDguNDk3Yy0xLjkzOCAwLTMuNTAzIDEuNTY1LTMuNTAzIDMuNTAzUzEwLjA2MiAxNS41IDEyIDE1LjVzMy41MDMtMS41NjUgMy41MDMtMy41MDNTMTMuOTM4IDguNDk3IDEyIDguNDk3eiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K&logoColor=white&style=for-the-badge">
  </a>&nbsp;&nbsp;

  <a href="https://www.prisma.io/" target="_blank">
    <img alt="Prisma ORM" src="https://img.shields.io/badge/Prisma-6.5.0-0C344B?logo=prisma&logoColor=white&style=for-the-badge">
  </a>&nbsp;&nbsp;

  <a href="https://jwt.io/" target="_blank">
    <img alt="JWT" src="https://img.shields.io/badge/JWT-9.0.2-8A2BE2?logo=jsonwebtokens&logoColor=white&style=for-the-badge">
  </a>&nbsp;&nbsp;

  <a href="https://www.mongodb.com/atlas" target="_blank">
    <img alt="MongoDB Atlas" src="https://img.shields.io/badge/MongoDB_Atlas-47A248?logo=mongodb&logoColor=white&style=for-the-badge">
  </a>&nbsp;&nbsp;

  <a href="https://www.npmjs.com/package/bcryptjs" target="_blank">
    <img alt="bcryptjs" src="https://img.shields.io/badge/bcryptjs-3.0.2-FF6C37?logo=npm&logoColor=white&style=for-the-badge">
  </a>
</p>

This is a **Next.js 15** authentication project using **NextAuth v5** with **OAuth providers (GitHub, Google, etc.)** and **MongoDB Atlas** for database management.

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



```mermaid
sequenceDiagram
    participant User
    participant Client
    participant Server
    participant NextAuth
    participant Prisma
    participant Middleware

    User->>Client: Submit Credentials
    Client->>Server: POST /api/auth/[action]
    activate Server
    
    Server->>NextAuth: Process Request
    activate NextAuth
    NextAuth->>Prisma: Query Database
    activate Prisma
    Prisma-->>NextAuth: User Data
    deactivate Prisma
    
    alt Valid
        NextAuth->>Client: Set HttpOnly Cookie
    else Invalid
        NextAuth->>Client: Error Response
    end
    deactivate NextAuth
    deactivate Server

    Client->>Middleware: Request Route
    activate Middleware
    Middleware->>NextAuth: Verify Session
    activate NextAuth
    NextAuth-->>Middleware: Session Status
    deactivate NextAuth
    
    alt Valid
        Middleware->>Server: Forward Request
        Server->>Client: Protected Content
    else Invalid
        Middleware->>Client: Redirect
    end
    deactivate Middleware
```


## 🏗️ Core Architecture

### 🔄 Authentication Flow

## 📡 API Endpoints

| Endpoint            |  Method  |            Description          |
|---------------------|----------|---------------------------------|
| `/api/auth/login`   |  `POST`  | User login with JWT issuance    |
| `/api/auth/signup`  |  `POST`  | New user registration           |


## 🔑 Authentication Providers
This project uses **NextAuth v5** for authentication. You can add more OAuth providers by modifying **src/auth.ts**.

## 🔐 Protected Routes

Some routes (**/posts**, **/users**) are **protected** and require authentication. Middleware in **middleware.ts** handles access control.

## 📜 License

This project is open-source and available under the **MIT License**.

---

**Happy Coding!** 🚀  
**Developed with ❤️ by [Abbas Rostami](https://github.com/AbbasRostami)**  

[![GitHub Stars](https://img.shields.io/github/stars/AbbasRostami/NextAuth-v5-OAuth-Authentication?style=for-the-badge&logo=github&label=Stars)](https://github.com/AbbasRostami/NextAuth-v5-OAuth-Authentication/stargazers)
