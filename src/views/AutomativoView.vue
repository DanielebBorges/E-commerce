
<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Automotivo</h1>

    <section v-if="automotive.length">
      <h2 class="text-2xl font-semibold mb-4">Produtos Automotivos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent v-for="p in automotive" :key="p.id" :produto="p" />
      </div>
    </section>

   
    <section v-if="motorcycle.length">
      <h2 class="text-2xl font-semibold mb-4">Motos e Acessórios</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProdutoCardComponent v-for="p in motorcycle" :key="p.id" :produto="p" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProdutoCardComponent from '../components/ProdutosCardComponent.vue'

const automotive = ref([])
const motorcycle = ref([])

const fetchCategoria = async (categoria, destino) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/category/${categoria}`)
    destino.value = res.data.products.map(p => ({
      id: p.id,
      name: p.title,
      image: p.thumbnail,
      category: p.category,
      stock: p.stock,
      price: p.price
    }))
  } catch (err) {
    console.error(`Erro ao buscar categoria ${categoria}`, err)
  }
}

onMounted(() => {
  fetchCategoria('automotive', automotive)
  fetchCategoria('motorcycle', motorcycle)
})
</script>
