<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Todos os Produtos</h1>

    <div class="flex justify-center mb-6">
      <button
        @click="ordenarAZ"
        class="bg-[#c115ef] text-white px-4 py-2 rounded hover:bg-[#9711bb]"
      >
        Ordenar A-Z
      </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <ProdutoCard
        v-for="p in produtos"
        :key="p.id"
        :produto="p"
      />
    </div>

    <div class="flex justify-center gap-4 mt-6">
      <button
        @click="previousProdutos"
        :disabled="skip === 0"
        class="btn bg-[#c115ef] text-white px-4 py-2 rounded hover:bg-[#9711bb] disabled:bg-gray-400"
      >
        Anterior
      </button>
      <button
        @click="nextProdutos"
        class="btn bg-[#c115ef] text-white px-4 py-2 rounded hover:bg-[#9711bb]"
      >
        Próximo
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ProdutoCard from '../components/ProdutosCardComponent.vue'

const produtos = ref([])
const skip = ref(0)
const limit = 12
let ordenadoAZ = false

const fetchProducts = async () => {
  try {
    let url = `https://dummyjson.com/products?limit=${limit}&skip=${skip.value}`
    if (ordenadoAZ) {
      url += `&sortBy=title&order=asc`
    }
    const res = await fetch(url)
    const data = await res.json()
    produtos.value = data.products.map(produto => ({
      id: produto.id,
      name: produto.title,
      image: produto.thumbnail,
      category: produto.category,
      stock: produto.stock,
      price: produto.price
    }))
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
  }
}

const ordenarAZ = () => {
  ordenadoAZ = true
  skip.value = 0
  fetchProducts()
}

const nextProdutos = () => {
  skip.value += limit
  fetchProducts()
}

const previousProdutos = () => {
  if (skip.value >= limit) {
    skip.value -= limit
    fetchProducts()
  }
}

onMounted(fetchProducts)
</script>


