# VUK

Projeto full-stack com frontend Angular e backend.

## 🚀 Tecnologias

### Frontend
- Angular 19.2.0
- TypeScript 5.7.2
- Tailwind CSS 3.4.17
- RxJS 7.8.0

## 📁 Estrutura do Projeto

```
Site-VUK/
├── frontend/     # Aplicação Angular
├── backend/      # API Backend
└── README.md
```

## 🛠️ Instalação e Execução

### Frontend

```bash
cd frontend
npm install
npm start
```

O frontend estará disponível em `http://localhost:4200`

### Backend

```bash
cd backend
npm install
npm start
```

## 📝 Scripts Disponíveis

### Frontend
- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm test` - Executa os testes
- `npm run watch` - Build em modo watch

## 🚀 Deploy no Render

Este projeto está configurado para deploy automático no Render.

### Opção 1: Deploy via Dashboard do Render

1. Acesse [render.com](https://render.com) e faça login
2. Clique em "New +" e selecione "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Name**: vuk-frontend
   - **Environment**: Node
   - **Build Command**: `npm install && npm run install-frontend && npm run build`
   - **Start Command**: `npm start`
5. Clique em "Create Web Service"

### Opção 2: Deploy via Blueprint (render.yaml)

1. Acesse [render.com](https://render.com) e faça login
2. Clique em "New +" e selecione "Blueprint"
3. Conecte seu repositório GitHub
4. O Render irá detectar automaticamente o arquivo `render.yaml`
5. Clique em "Apply"

### Importante

- O projeto usa Node.js 18.17.0
- O build pode levar alguns minutos na primeira vez
- O serviço gratuito pode hibernar após 15 minutos de inatividade

## 📄 Licença

Este projeto está sob licença privada.
