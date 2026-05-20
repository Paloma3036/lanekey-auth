# 🔑 LaneKey Auth API

O **LaneKey Auth API** é um microsserviço de autenticação segura baseado em tokens temporários de acesso de uso único (*passwordless*). O projeto foi reformulado para aplicar conceitos avançados de segurança no ecossistema Node.js, focando em alta performance com consultas SQL nativas, proteção contra ataques de força bruta e rastreabilidade de ações.

O foco principal deste projeto é servir como uma solução robusta, modular e de fácil manutenção para gerenciamento de acessos temporários.

---

## 🧰 Stack Tecnológica

* **Node.js** – Ambiente de execução JavaScript no servidor.
* **Express** – Framework minimalista para gerenciamento de rotas e middlewares.
* **PostgreSQL** – Banco de dados relacional para persistência de tokens e logs.
* **PG (node-postgres)** – Driver nativo utilizado para comunicação de alta performance com o banco via SQL puro.
* **Crypto (Nativo)** – Geração de tokens de alta entropia e hashing seguro com SHA-256.
* **Express Rate Limit** – Middleware de proteção contra ataques de força bruta e negação de serviço (DoS).
* **Swagger UI (OpenAPI 3.0)** – Documentação interativa e testável da API direto pelo navegador.

---

## 📁 Estrutura do Projeto

```text
lanekey-auth/
├── database/
│   └── init.sql         # Script de criação automática das tabelas
├── src/
│   ├── config/          # Configurações de banco e documentação (Swagger)
│   ├── controllers/     # Orquestração das requisições e respostas
│   ├── middlewares/     # Validações de entrada e limitadores de requisição
│   ├── repositories/    # Camada de persistência (Queries SQL puras)
│   ├── routes/          # Definição dos endpoints e anotações do Swagger
│   ├── services/        # Regras de negócio e lógica de autenticação
│   ├── utils/           # Funções utilitárias (geração e hash de tokens)
│   └── server.js        # Inicialização do servidor e tratamento global de erros
├── .env.example
├── package.json
└── README.md
```

---

## 🔐 Fluxo de Autenticação

A arquitetura implementa um fluxo seguro de tokens temporários:
1. O cliente solicita acesso informando um e-mail válido.
2. A API gera um token criptográfico aleatório (bruto) e cria um hash SHA-256 dele.
3. Apenas o **hash** e a data de expiração são salvos no banco de dados.
4. O cliente recebe o token bruto (que nunca é exposto no banco).
5. Na validação, o cliente envia o token bruto, a API gera o hash novamente, valida a expiração, e marca o registro como usado se for válido.

---

## 🔑 Endpoints Principais


| Método | Rota | Descrição | Proteção Integrada |
| :--- | :--- | :--- | :--- |
| **POST** | `/auth/token` | Solicita a geração de um token temporário | Rate Limit (Max 10 req / 15 min) + Regex de E-mail |
| **POST** | `/auth/token/validate` | Valida o token e inutiliza-o após o uso | Rate Limit |
| **GET** | `/api-docs` | Interface interativa do Swagger | N/A |

---

## 🛡️ Camadas de Segurança Aplicadas

* **Princípio da Menor Exposição**: Tokens brutos trafegam apenas na requisição; o banco armazena apenas hashes SHA-256 unidirecionais.
* **Proteção contra Força Bruta**: Implementação de *Rate Limiting* configurável por variáveis de ambiente para mitigar ataques automatizados.
* **Sanitização de Dados**: Camada rigorosa de validação sintática de e-mails via expressões regulares antes de atingir as regras de negócio.
* **Tratamento Centralizado de Erros**: Erros internos (como falhas de banco) não expõem detalhes da infraestrutura (*stack traces*) para o cliente final.

---

## ⚙️ Configuração do Ambiente

### Pré-requisitos
* Node.js (v18+)
* PostgreSQL rodando localmente
* Git

### 1. Clonar o repositório e instalar dependências
```bash
git clone https://github.com/Paloma3036/lanekey-auth.git
cd lanekey-auth
npm install
```

### 2. Configuração do Banco de Dados
1. Crie um banco de dados vazio no seu PostgreSQL chamado `lanekey`.
2. Execute o arquivo de inicialização para estruturar as tabelas necessárias:
   ```bash
   psql -U postgres -d lanekey -h localhost -f database/init.sql
   ```

### 3. Variáveis de Ambiente
Copie o arquivo de exemplo:
```bash
cp .env.example .env
```
Abra o arquivo `.env` gerado e configure suas credenciais locais do PostgreSQL:
```env
PORT=3000
TOKEN_EXPIRATION_MINUTES=15
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=10
DATABASE_URL=postgresql://seu_usuario:sua_senha@localhost:5432/lanekey
```

### 4. Inicializar o servidor
```bash
npm start
```
O servidor estará ativo em `http://localhost:3000`.

---

## 📘 Documentação Interativa (Swagger)

A API possui documentação em conformidade com o padrão OpenAPI 3.0. Para visualizar os schemas, testar as rotas em tempo real e simular os payloads, acesse com a API rodando:

🔗 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

---

## 🧠 Aprendizados e Evolução

* Mudança arquitetural estratégica de um ORM pesado para consultas SQL nativas (`pg`), priorizando velocidade e controle total de índices.
* Domínio na manipulação do módulo `crypto` do Node.js para geração de dados pseudoaleatórios e hashing de segurança.
* Arquitetura em camadas desacopladas baseada no padrão Repository, facilitando mock de testes e substituição de banco de dados se necessário.

---

## 👩‍💻 Autora

Desenvolvido com 💜 por **Paloma Araujo**.  
Focada em Desenvolvimento Backend, Segurança e Dados

* [LinkedIn](www.linkedin.com/in/paloma-araujo2805)  
* [GitHub](https://github.com/Paloma3036)
