# 🔐 LaneKey Auth API

API de autenticação desenvolvida em **Node.js + Express**, com foco em **segurança**, **boas práticas de backend** e **organização em camadas**. O projeto implementa um fluxo de **token temporário de acesso**, ideal para cenários como pré-autenticação, validação de usuários ou controle de acesso inicial.

---

## 🚀 Funcionalidades

* Geração de **token temporário** por e-mail
* Validação de token com verificação de expiração
* Estrutura organizada (routes, controllers, services)
* Documentação automática com **Swagger**
* Configuração segura via **dotenv**
* API pronta para evolução (RBAC, JWT, auditoria, etc.)

---

## 🧱 Arquitetura do Projeto

```bash
src/
├── config/
│   └── swagger.js
├── controllers/
│   └── auth.controller.js
├── routes/
│   └── auth.routes.js
├── services/
│   └── auth.service.js
├── server.js
└── .env.example
```

---

## 📌 Tecnologias Utilizadas

* **Node.js**
* **Express**
* **PostgreSQL (pg)**
* **Swagger (swagger-ui-express)**
* **dotenv**
* **CORS**

---

## ⚙️ Instalação e Execução

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Paloma3036/lanekey-auth.git
cd lanekey-auth
```

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` com base no `.env.example`:

```env
PORT=3000
DATABASE_URL=postgres://user:password@localhost:5432/lanekey
```

### 4️⃣ Rodar o projeto

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

## 📚 Documentação da API (Swagger)

A documentação interativa está disponível em:

```
http://localhost:3000/api-docs
```

---

## 🔑 Endpoints Principais

### ➤ Gerar token temporário

**POST** `/auth/request-access`

```json
{
  "email": "teste@lanekey.com"
}
```

Resposta:

```json
{
  "message": "Token temporário gerado",
  "token": "abc123...",
  "expiresAt": "2026-01-21T01:46:28.775Z"
}
```

---

### ➤ Validar token

**POST** `/auth/validate`

```json
{
  "token": "abc123..."
}
```

Resposta:

```json
{
  "valid": true
}
```

---

## 🛡️ Segurança

* Tokens possuem **tempo de expiração**
* Validações de entrada em todas as rotas
* Separação clara de responsabilidades
* Preparado para extensões como:

  * JWT
  * Rate limit
  * Auditoria
  * Controle de permissões

---

## 🧠 Aprendizados Aplicados

* Organização de API REST profissional
* Debug e resolução de erros reais de backend
* Integração de Swagger em projetos Node
* Boas práticas para projetos de portfólio

---

## 📈 Próximos Passos (ideias futuras)

> **Não implementados neste projeto**, mas pensados para evolução:

* Autenticação JWT
* Sistema de auditoria
* Dashboard administrativo
* Controle de permissões (RBAC)
* Testes automatizados

---

## 👩‍💻 Autora

**Paloma Araujo**
Estudante de Análise e Desenvolvimento de Sistemas
Foco em Backend, Segurança e Arquitetura de APIs

🔗 GitHub: [@Paloma3036](https://github.com/Paloma3036)

---

> Projeto desenvolvido com foco em aprendizado prático e consolidação de fundamentos de backend.
