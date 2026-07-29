# 🏛️ Arquitetura Backend SaaS com NestJS & TypeScript

> **Arquitetura de Referência Pronta para Produção** desenvolvida por **Nathan Jordan de Oliveira**  
> Stack: `Node.js` · `TypeScript` · `NestJS` · `PostgreSQL` · `Redis` · `Docker` · `OpenAI API` · `Swagger`

## 🌟 Visão Geral

Modelo completo de arquitetura backend para plataformas SaaS corporativas e microsserviços de alta concorrência. Demonstra as melhores práticas de **Clean Architecture**, **Injeção de Dependência**, **Autenticação JWT com Refresh Tokens**, **Integração com LLMs (OpenAI GPT-4o)** e **Conteinerização em Docker**.

---

## 🛠️ Tecnologias e Camadas

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Runtime** | Node.js 20 + TypeScript 5 | Tipagem estática rigorosa e execução assíncrona de alta performance |
| **Framework** | NestJS 10 | Arquitetura modular corporativa (Controller, Service, Module, Guard) |
| **Banco de Dados** | PostgreSQL 16 + TypeORM | ORM relacional com suporte a migrações e transações |
| **Cache & Filas** | Redis 7 + BullMQ | Cache em memória e gerenciamento de filas assíncronas |
| **Autenticação** | Passport JWT + OAuth 2.0 | Rotação segura de tokens e controle de acesso por papéis (RBAC) |
| **Inteligência Artificial** | OpenAI API (GPT-4o) | Integração nativa para agentes e assistentes virtuais |
| **Documentação** | Swagger / OpenAPI 3.0 | Auto-geração de documentação interativa de APIs |
| **DevOps** | Docker + Docker Compose | Ambientes isolados para desenvolvimento e produção |

---

## 📐 Estrutura do Projeto

```
src/
├── main.ts                     # Bootstrap da aplicação + Configuração do Swagger
├── app.module.ts               # Módulo raiz orquestrador
├── modules/
│   ├── auth/                   # Autenticação, JWT, Passport e Guards de acesso
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── jwt.strategy.ts
│   ├── ai/                     # Integração com OpenAI API (GPT-4o)
│   │   ├── ai.controller.ts
│   │   └── ai.service.ts
│   ├── webhooks/               # Processamento de Webhooks (Stripe / WhatsApp API)
│   │   ├── webhooks.controller.ts
│   │   └── webhooks.service.ts
│   └── users/                  # Gestão de usuários e perfis
│       ├── users.controller.ts
│       └── users.service.ts
└── database/                   # Entidades TypeORM e migrações
```

---

## 🚀 Como Executar o Projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/nathanjordan1/arquitetura-backend-saas.git
cd arquitetura-backend-saas

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env

# 4. Subir infraestrutura com Docker Compose (PostgreSQL + Redis)
docker-compose up -d

# 5. Executar em modo de desenvolvimento
npm run start:dev
```

Acesse a documentação Swagger interativa em: `http://localhost:3000/api/docs`

---

## 🤝 Contato Profissional

**Nathan Jordan de Oliveira** — *Engenheiro de Software | Desenvolvedor Backend & Full Stack*  
• 🔗 [LinkedIn](https://linkedin.com/in/nathanjordan10)  
• 🐙 [GitHub Profile](https://github.com/nathanjordan1)  
• 📧 nathanjordan05052000@gmail.com  
• 📱 (11) 96525-3404  
