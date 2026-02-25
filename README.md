# 🧪 Laboratorio-Nuxt

Ambiente de experimentação  com **Nuxt v4.3.1**, utilizando **Bun** como runtime e o template oficial com **Nuxt UI**.

Este repositório funciona como um laboratório técnico para aprofundamento em arquitetura moderna com Nuxt, explorando SSR, composables, gerenciamento de estado e padrões profissionais de organização de código.

---

## 🚀 Stack Utilizada

- Nuxt 4.3.1
- Vue 3 (Composition API)
- TypeScript
- Nuxt UI
- Bun (runtime & package manager)
- Nitro Server
- SSR
- TailwindCSS
- $fetch / useAsyncData

---

## 🎯 Objetivo do Laboratório

Este projeto foi criado para explorar profundamente:

- Criação e organização de composables (`useAuth`, `useApi`, `useCounter`, etc.)
- Diferença entre estado local (`ref`) e estado global (`useState`)
- SSR-safe state management
- Estratégias de cache com `useAsyncData`
- Estrutura escalável por domínio
- Separação entre UI e regra de negócio
- Runtime Config
- SEO dinâmico com `useHead`
- Integração com APIs externas
- Boas práticas de arquitetura em Nuxt 4

Mais do que apenas utilizar o framework, o objetivo é compreender seu funcionamento interno e suas decisões arquiteturais.

---

## 🏗 Estrutura Base


/components
/composables
/pages
/server
/utils
/assets


A estrutura evolui conforme novos padrões e testes são implementados.

---

## 🧠 Filosofia do Projeto

Este não é um produto final.

É um ambiente controlado para:

- Testes arquiteturais
- Simulação de cenários reais
- Validação de padrões
- Experimentação com SSR e cache
- Evolução contínua

---

## ▶️ Como Executar (Bun)

Instalar dependências:

```bash
bun install

Rodar ambiente de desenvolvimento:

bun run dev

A aplicação estará disponível em:

http://localhost:3000

Build para produção:

bun run build

Preview da build:

bun run preview
📈 Evolução Contínua

Novos padrões, testes e estratégias são adicionados conforme o aprofundamento técnico evolui.

Este laboratório representa meu processo estruturado de domínio do Nuxt 4 em ambientes modernos de desenvolvimento.

👨‍💻 Autor

Pedro Prando
Desenvolvedor focado em arquitetura de sistemas web, SSR e aplicações modernas escaláveis.
