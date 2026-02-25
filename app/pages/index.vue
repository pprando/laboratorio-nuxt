<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100">
    <div class="max-w-4xl mx-auto px-6 py-20">

      <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl">

        <h1 class="text-4xl font-bold mb-6 tracking-tight">
          🧪 Bem-vindo ao Laboratório Nuxt
        </h1>

        <p class="text-zinc-400 text-lg mb-6 leading-relaxed">
          Você está em um ambiente de testes e experimentações.
          Este projeto funciona como um laboratório para explorar conceitos,
          testar componentes, criar composables e validar ideias.
        </p>

        <p class="text-zinc-400 text-lg mb-8 leading-relaxed">
          Caso queira navegar por alguma funcionalidade específica,
          utilize as rotas da aplicação diretamente pela URL.
        </p>

        <div class="bg-black/40 border border-white/10 rounded-xl p-6 text-sm text-zinc-300">
          <p class="mb-2 text-zinc-500">Exemplos de navegação:</p>

          <ul class="space-y-2">
            <li><span class="text-green-400">/login</span> → Tela de autenticação</li>
            <li><span class="text-green-400">/dashboard</span> → Painel principal</li>
            <li><span class="text-green-400">/composables</span> → Testes de lógica reutilizável</li>
          </ul>
        </div>

        <div class="mt-12 pt-6 border-t border-white/10 text-sm text-zinc-500 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div>
            Desenvolvido por <span class="text-zinc-300 font-medium">Pedro Prando</span>
          </div>

          <a
            href="https://github.com/pprando"
            target="_blank"
            class="text-green-400 hover:text-green-300 transition-colors"
          >
            github.com/pprando
          </a>
        </div>

        <div class="mt-4 text-white-600 text-xs">
          ⚠️ Este ambiente pode conter implementações experimentais.
        </div>

      </div>

      <NuxtPage />

    </div>
  </div>
</template>