# GranaChat

App de controle financeiro com foco em linguagem natural. Uma aplicação full-stack para gerenciar finanças através de chat com IA.

## 📁 Estrutura do Projeto

```
granachat/
├── frontend/          # Interface web (React + Vite)
├── backend/           # API FastAPI + PostgreSQL
└── README.md
```

## Stack

### Frontend
- React 19
- Vite 7
- React Router DOM 7
- CSS Modules

### Backend
- Python 3.11+
- FastAPI
- uv (gerenciador de dependências)
- SQLAlchemy
- PostgreSQL (Docker)

## 📋 Pré-requisitos

- Node.js 20+ (frontend)
- npm 10+ ou yarn (frontend)
- Python 3.11+ (backend)
- Docker & Docker Compose (banco de dados)
- uv (gerenciador Python)

## 🚀 Como rodar localmente

### Backend

```bash
cd backend

# Instalar uv (primeira vez)
pip install uv

# Criar e ativar ambiente virtual
uv venv
source .venv/bin/activate   # Linux / Mac
# .venv\Scripts\activate    # Windows

# Instalar dependências
uv sync

# Configurar .env (copiar de .env.example)
cp .env.example .env

# Iniciar banco de dados Docker
docker-compose up -d

# Rodar migrations e servidor
# (veja instruções em backend/README.md)
```

### Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# URL: http://localhost:5173
```

## 📝 Documentação

- [Frontend README](frontend/README.md)
- [Backend README](backend/README.md)

## 👨‍💻 Desenvolvimento

Para mais detalhes sobre setup, migrations, estrutura de banco de dados e endpoints da API, consulte os READMEs específicos em cada pasta.

---

**Repositórios GitHub (antes da consolidação):**
- Frontend: https://github.com/mateus124/granachat-front
- Backend: https://github.com/mateus124/granachat-backend
