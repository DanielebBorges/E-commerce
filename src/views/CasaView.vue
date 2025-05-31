
<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Casa: Decoração e Móveis</h1>


    <section v-if="homeDecoration.length">
      <h2 class="text-2xl font-semibold mb-4">Decoração</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent
          v-for="p in homeDecoration"
          :key="p.id"
          :produto="p"
        />
      </div>
    </section>

    <section v-if="furniture.length">
      <h2 class="text-2xl font-semibold mb-4">Móveis</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProdutoCardComponent
          v-for="p in furniture"
          :key="p.id"
          :produto="p"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProdutoCardComponent from '../components/ProdutosCardComponent.vue'


const homeDecoration = ref([])
const furniture = ref([])

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
  fetchCategoria('home-decoration', homeDecoration)
  fetchCategoria('furniture', furniture)
})
</script>
