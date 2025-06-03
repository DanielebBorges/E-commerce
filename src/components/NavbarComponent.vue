<template>
  <nav class="bg-[#c115ef] text-white py-4 px-8 flex flex-wrap justify-between items-center gap-4">
    <h1 class="text-lg font-bold font-display">
      Bardaniê
    </h1>

    <ul class="flex flex-wrap gap-6">
      <li><router-link to="/" class="hover:underline">Produtos</router-link></li>
      <li><router-link to="/Eletronicos" class="hover:underline">Eletônicos</router-link></li>
      <li><router-link to="/beleza" class="hover:underline">Beleza</router-link></li>
      <li><router-link to="/alimentos" class="hover:underline">Alimentos</router-link></li>
      <li><router-link to="/casa" class="hover:underline">Casa</router-link></li>
      <li><router-link to="/feminino" class="hover:underline">Moda Feminina</router-link></li>
      <li><router-link to="/masculino" class="hover:underline">Moda Masculina</router-link></li>
      <li><router-link to="/acessorios" class="hover:underline">Acessórios</router-link></li>
      <li><router-link to="/automativo" class="hover:underline">Automativos</router-link></li>
    </ul>

    <!-- Campo de busca -->
    <form @submit.prevent="buscarProdutos" class="flex gap-2 items-center">
      <input
        v-model="busca"
        type="text"
        placeholder="Buscar produto..."
        class="px-3 py-1 text-black rounded"
      />
      <button
        type="submit"
        class="bg-white text-[#c115ef] font-bold px-3 py-1 rounded hover:bg-gray-100"
      >
        Buscar
      </button>
    </form>
  </nav>

  <!-- Resultado da busca -->
  <div v-if="resultados.length > 0" class="p-4">
    <h2 class="text-xl font-bold my-4">Resultados:</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <ProdutoCard
        v-for="produto in resultados"
        :key="produto.id"
        :produto="{
          id: produto.id,
          name: produto.title,
          image: produto.thumbnail,
          category: produto.category,
          stock: produto.stock,
          price: produto.price
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import ProdutoCard from '../components/ProdutosCardComponent.vue' // ajuste o caminho se necessário

const busca = ref('')
const resultados = ref([])

// Limpa resultados quando o campo de busca for apagado
watch(busca, (novoValor) => {
  if (!novoValor.trim()) {
    resultados.value = []
  }
})

// Busca produtos da API
const buscarProdutos = () => {
  if (!busca.value.trim()) return

  fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(busca.value)}`)
    .then(res => res.json())
    .then(data => {
      resultados.value = data.products
    })
    .catch(error => {
      console.error('Erro ao buscar:', error)
    })
}
</script>

<style>
:root {
  --font-display: 'Abril Fatface', cursive;
}

.font-display {
  font-family: var(--font-display);
}
</style>
