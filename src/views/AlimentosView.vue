
<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Alimentos</h1>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      <ProdutoCardComponent
        v-for="p in produtos"
        :key="p.id"
        :produto="p"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProdutoCardComponent from '../components/ProdutosCardComponent.vue'

const produtos = ref([])

const fetchProdutos = async () => {
  const res = await axios.get('https://dummyjson.com/products/category/groceries')
  produtos.value = res.data.products.map(p => ({
    id: p.id,
    name: p.title,
    image: p.thumbnail,
    category: p.category,
    stock: p.stock,
    price: p.price
  }))
}

onMounted(fetchProdutos)
</script>
