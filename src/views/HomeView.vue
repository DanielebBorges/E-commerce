<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Todos os Produtos</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <ProdutoCard 
        v-for="p in produtos" 
        :key="p.id" 
        :produto="p" 
      />
    </div>

    <div class="flex justify-center gap-4 mt-6">
      <button @click="previousProdutos" :disabled="skip === 0" class="btn bg-[#c115ef] text-white px-4 py-2 rounded hover:bg-[#9711bb] disabled:bg-gray-400">Anterior</button>
      <button @click="nextProdutos" class="btn bg-[#c115ef] text-white px-4 py-2 rounded hover:bg-[#9711bb]">Próximo</button>
    </div>
  </div>
    <div>
    <BuscaProdutosComponent />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProdutoCard from '../components/ProdutosCardComponent.vue'

const produtos = ref([])
const skip = ref(0)
const limit = 12

const fetchProducts = async () => {
    const res = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip.value}`)
    const results = res.data.products

    console.log(results)

  produtos.value = results.map(produto => ({
  id: produto.id,
  name: produto.title,
  image: produto.thumbnail,
  category: produto.category,
  stock: produto.stock,
  price: produto.price
}))

    console.log(produtos.value)
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

import BuscaProdutosComponent from '../components/PesquisaComponent.vue'

</script>
