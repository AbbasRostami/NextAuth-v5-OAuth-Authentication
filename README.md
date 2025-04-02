# 🔐 NextAuth v5 OAuth Authentication 

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&style=for-the-badge)
![NextAuth](https://img.shields.io/badge/NextAuth-v5-blue?logo=auth0&style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-ORM-brightgreen?logo=prisma&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb&style=for-the-badge)

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


![Project Structure](https://img.shields.io/badge/structure-organized-brightgreen)

## 🗂️ Intelligent Project Architecture

```bash
📦 AbbasRostami-NextAuth-v5-OAuth-Authentication
├── 📄 Core Configuration
│   ├── README.md              # Project documentation
│   ├── next.config.ts         # Next.js advanced config
│   ├── tailwind.config.ts     # Tailwind customization
│   └── tsconfig.json          # TypeScript rules
│
├── 🔒 Security & Auth
│   ├── prisma/
│   │   └── schema.prisma      # Database schema
│   ├── src/auth.ts            # Auth configuration
│   └── src/middleware.ts      # Route protection
│
├── ⚡️ Server Actions
│   └── src/actions/
│       ├── formActions.ts     # Form handling logic
│       └── postActions.ts     # Post CRUD operations
│
├── 🎨 UI Layer
│   ├── public/                # Static assets
│   └── src/app/
│       ├── globals.css        # Global styles
│       ├── layout.tsx         # Root layout
│       └── components/
│           ├── Buttons/       # Interactive elements
│           ├── Header/        # Navigation system
│           └── Footer/        # Page footer
│
├── 🔌 API Endpoints
│   └── src/app/api/
│       └── auth/
│           ├── [...nextauth]/ # NextAuth core routes
│           ├── login/         # Custom login handler
│           └── signup/        # Registration flow
│
├── 🖥️ Pages & Routes
│   ├── src/app/
│   │   ├── (auth)/
│   │   │   ├── login/        # Auth page
│   │   │   └── register/     # Signup flow
│   │   ├── posts/            # Content feed
│   │   │   └── [id]/         # Dynamic post page
│   │   └── users/            # User management
│   │
│   └── src/lib/utils.ts       # Shared utilities
│
└── 🛠️ Dev Tooling
    ├── .env.example           # Env template
    ├── eslint.config.mjs      # Code quality
    └── postcss.config.mjs     # CSS processing
```

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/AbbasRostami/nextauth-v5-oauth-authentication.git
cd nextauth-v5-oauth-authentication
```

2️⃣ Install dependencies

```
yarn install  # or npm install
```

3️⃣ Set up environment variables
Create a **.env.local** file and copy the values from **.env.example**, then update them with your credentials.

4️⃣ Run the project
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
