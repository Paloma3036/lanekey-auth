# 🔐 LaneKey Auth API

API RESTful focada em **autenticação, controle de acesso e boas práticas de segurança**, desenvolvida em Node.js. O projeto foi pensado como um **estudo prático de backend com ênfase em segurança**, servindo tanto como aprendizado quanto como peça de portfólio.

## 🧰 Stack Tecnológica

* **Node.js** – ambiente de execução JavaScript no servidor, responsável por rodar a aplicação backend.
* **Express** – framework minimalista para criação de APIs RESTful, facilitando o gerenciamento de rotas e middlewares.
* **Prisma ORM** – camada de abstração para acesso ao banco de dados, garantindo tipagem, segurança e migrations versionadas.
* **PostgreSQL** – banco de dados relacional utilizado para persistência segura das informações.
* **bcrypt** – biblioteca para **hash de senhas**, garantindo que credenciais nunca sejam armazenadas em texto puro.
* **dotenv** – gerenciamento de variáveis de ambiente, evitando exposição de dados sensíveis no código.
* **cors** – controle de acesso entre diferentes origens (Cross-Origin Resource Sharing).
* **JWT (preparado para uso)** – estratégia de autenticação baseada em tokens, planejada para evolução do projeto.
* **Git & GitHub** – controle de versão e hospedagem do repositório.

## 📁 Estrutura do Projeto

```
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

## 🔐 Autenticação

O projeto implementa um fluxo seguro de autenticação baseado em:

* Criação de usuários com **senha criptografada (bcrypt)**
* Validação de credenciais no login
* Geração de tokens com **tempo de expiração** (quando JWT estiver ativo)
* Proteção de rotas sensíveis via middleware

## 🛡️ Segurança

* Senhas armazenadas apenas como **hash**
* Tokens com **tempo de expiração**
* Validação de dados de entrada em todas as rotas
* Uso de variáveis de ambiente para dados sensíveis
* Separação clara entre rotas, controllers e services

### 🔧 Preparado para extensões de segurança

* JWT (JSON Web Token)
* Rate limit (proteção contra força bruta)
* Auditoria de ações
* Controle de permissões e roles

## ⚙️ Configuração do Ambiente

### Pré-requisitos
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

## 🧠 Aprendizados com o Projeto

* Estruturação de API REST com foco em segurança
* Criptografia de senhas e proteção de credenciais
* Organização em camadas (routes, controllers, services)
* Uso do Prisma ORM com PostgreSQL
* Planejamento de extensões como auditoria e controle de acesso
* Aplicação de boas práticas profissionais de backend

## 👩‍💻 Autora

Projeto desenvolvido por **Paloma Araujo**
Estudante de **Análise e Desenvolvimento de Sistemas**, com foco em **backend, segurança e computação em nuvem**.

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.
Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
