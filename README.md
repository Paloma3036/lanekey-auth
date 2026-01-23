# 🔐 LaneKey Auth API

API RESTful focada em **autenticação, controle de acesso e boas práticas de segurança**, desenvolvida em Node.js. 
**Projeto educacional com foco em boas práticas de autenticação backend**

## 🧰 Stack Tecnológica

* **Node.js** – ambiente de execução JavaScript no servidor, responsável por rodar a aplicação backend.
* **Express** – framework minimalista para criação de APIs RESTful, facilitando o gerenciamento de rotas e middlewares.
* **Swagger (OpenAPI)** – documentação interativa da API, facilitando testes e entendimento dos endpoints.
* **Prisma ORM** – responsável pela **interação com o banco de dados**, atuando na criação de usuários, busca de credenciais e persistência segura das informações.
* **PostgreSQL** – banco de dados relacional utilizado para armazenar dados de usuários e tokens.
* **bcrypt** – biblioteca para **hash de senhas**, garantindo que credenciais nunca sejam armazenadas em texto puro.
* **dotenv** – gerenciamento de variáveis de ambiente, evitando a exposição de dados sensíveis no código.
* **cors** – controle de acesso entre diferentes origens (Cross-Origin Resource Sharing).
* **Git & GitHub** – controle de versão e hospedagem do repositório.

## 📁 Estrutura do Projeto

```bash
lanekey-auth/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
├── .env.example
├── package.json
└── README.md
```

## 🔐 Fluxo de Autenticação

O fluxo de autenticação foi aplicado de forma simples e segura:

1. O usuário envia suas credenciais para a API
2. A senha é **criptografada com bcrypt** antes de qualquer persistência
3. O **Prisma ORM** é utilizado para:
   * Criar usuários no banco
   * Buscar credenciais durante o login
   * Garantir acesso seguro e consistente aos dados
4. Rotas sensíveis podem ser protegidas via middlewares

## 🔑 Endpoints Principais

| Método | Rota       | Descrição                                 |
| ------ | ---------- | ------------------------------------------|
| POST   | /register  | Criação de usuário com senha criptografada|
| POST   | /login     | Validação de credenciais                  |
| GET    | /protected | Exemplo conceitual de rota protegida      |

> ⚠️ Alguns endpoints podem estar planejados ou simplificados, conforme o foco educacional do projeto.

## 🛡️ Segurança

* Senhas armazenadas apenas como **hash**
* Validação de dados de entrada em todas as rotas
* Uso de variáveis de ambiente para dados sensíveis
* Separação clara entre rotas, controllers e services

### 🔧 Preparado para extensões de segurança

As funcionalidades abaixo **não estão implementadas**, mas foram consideradas no desenho da arquitetura:

* JWT (JSON Web Token)
* Rate limit (proteção contra força bruta)
* Auditoria de ações
* Controle de permissões e roles

## ⚙️ Configuração do Ambiente

_Pré-requisitos:_
* Node.js (v18+)
* PostgreSQL
* Git

### 🔹 Clonar o repositório

```bash
git clone https://github.com/Paloma3036/lanekey-auth.git
cd lanekey-auth
```

### 🔹 Instalar dependências

```bash
npm install
```

### 🔹 Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/lanekey"
```

> ⚠️ Ajuste conforme sua configuração local.

### 🔹 Rodar migrations

```bash
npx prisma migrate dev
```

### 🔹 Iniciar o servidor

```bash
node src/server.js
```

Servidor disponível em:

```
http://localhost:3000
```

### 📘 Documentação da API (Swagger)

A API conta com documentação interativa utilizando **Swagger (OpenAPI)**, permitindo verificar e testar os endpoints pelo navegador.

Acesse em:
```
http://localhost:3000/api-docs
```

## 🧠 Aprendizados com o Projeto

* Estruturação de API REST com foco em segurança.
* Criptografia de senhas e proteção de credenciais.
* Organização em camadas (routes, controllers, services).
* Uso do Prisma ORM com PostgreSQL.
* Planejamento arquitetural para extensões futuras.
* Aplicação de boas práticas profissionais de backend.

## 👩‍💻 Autora

Projeto desenvolvido por **Paloma Araujo**
Estudante de **Análise e Desenvolvimento de Sistemas**, com foco em **backend, segurança e computação em nuvem**.

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.
Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
