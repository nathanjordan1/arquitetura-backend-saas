# 🚀 NestJS SaaS Backend Architecture

> **Production-ready** backend boilerplate built by **Nathan Jordan de Oliveira**  
> Stack: `Node.js` · `TypeScript` · `NestJS` · `PostgreSQL` · `Redis` · `Docker` · `OpenAI API`

## 📐 Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     API Gateway (NestJS)                    │
│  ┌──────────┐  ┌────────────┐  ┌────────────┐  ┌────────┐  │
│  │  Auth    │  │  Users     │  │  Webhooks  │  │  AI    │  │
│  │  Module  │  │  Module    │  │  Module    │  │ Module │  │
│  └──────────┘  └────────────┘  └────────────┘  └────────┘  │
│         │             │               │               │      │
│         └─────────────┴───────────────┴───────────────┘      │
│                            │                                │
│                     PostgreSQL + Redis                       │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|-----------------------------------|
| Runtime     | Node.js 20 + TypeScript 5         |
| Framework   | NestJS 10 (modular architecture)  |
| Database    | PostgreSQL 16 + TypeORM           |
| Cache       | Redis 7                           |
| Auth        | JWT + Refresh Tokens + OAuth2     |
| AI          | OpenAI API (GPT-4o)               |
| Container   | Docker + Docker Compose           |
| Docs        | Swagger / OpenAPI 3.0             |

## 🌟 Features

- ✅ Modular architecture (auth, users, webhooks, AI)
- ✅ JWT authentication with refresh token rotation
- ✅ Rate limiting, guards and interceptors
- ✅ OpenAI API integration for AI assistants
- ✅ Webhook processing (Stripe, WhatsApp Business API)
- ✅ Database migrations with TypeORM
- ✅ Dockerized for production deployment
- ✅ Swagger documentation auto-generated
- ✅ CI/CD ready with GitHub Actions

## 🚀 Quick Start

```bash
# Clone
git clone https://github.com/nathanjordan1/nestjs-saas-backend.git
cd nestjs-saas-backend

# Install
npm install

# Environment
cp .env.example .env
# Fill in your variables

# Run with Docker
docker-compose up -d

# Run locally
npm run start:dev
```

## 📁 Project Structure

```
src/
├── auth/           # JWT, OAuth2, Guards
├── users/          # User management, profiles
├── ai/             # OpenAI API integration
├── webhooks/       # Stripe, WhatsApp handlers
├── common/         # Pipes, filters, interceptors
├── database/       # TypeORM entities & migrations
└── main.ts         # Bootstrap + Swagger setup
```

## 🤝 Connect

**Nathan Jordan de Oliveira** — Software Engineer

- 🔗 [LinkedIn](https://linkedin.com/in/nathanjordan10)
- 📧 nathanjordan05052000@gmail.com
- 📱 (11) 96525-3404
