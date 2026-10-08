# Vitra

Monorepo com pnpm e Turborepo.

## Requisitos

- Node.js 24 ou superior
- pnpm 11.25.0 (versão indicada em `packageManager`)

## Desenvolvimento

```sh
pnpm install
pnpm dev
```

O comando inicia as duas aplicações:

- Frontend: http://localhost:5173 — React, Vite, TypeScript e Tailwind CSS.
- API: http://127.0.0.1:3001 — Fastify, TypeScript e Zod.

```sh
curl http://127.0.0.1:3001/health
# {"status":"ok"}
```

A API aceita `PORT` e `HOST` no ambiente, validados com Zod:

```sh
PORT=3002 HOST=0.0.0.0 pnpm dev
```

Para iniciar apenas uma aplicação:

```sh
pnpm --filter web dev
pnpm --filter api dev
```

## Verificações e build

```sh
pnpm lint
pnpm check-types
pnpm build
```

TypeScript mantém `strict` habilitado nas aplicações e no pacote UI. Os builds são gerados em `apps/web/dist` e `apps/api/dist`, com cache pelo Turborepo.

Após o build:

```sh
pnpm --filter api start
pnpm --filter web preview
```

O preview do Vite serve o frontend em http://localhost:4173 para verificação local. Para produção, sirva `apps/web/dist` em um servidor de arquivos estáticos e execute a API com Node.js.

## Estrutura

```text
apps/
  web/                   React + Vite + Tailwind CSS
  api/                   Fastify + Zod; GET /health
packages/
  eslint-config/         Configurações compartilhadas de lint
  typescript-config/     Configurações compartilhadas de TypeScript
  ui/                    Componentes preservados para o futuro Design System
```

PostgreSQL, Prisma, Docker e autenticação serão configurados posteriormente.
