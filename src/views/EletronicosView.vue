
<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Eletrônicos</h1>

    <section v-if="smartphones.length">
      <h2 class="text-2xl font-semibold mb-4">Smartphones</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent
          v-for="p in smartphones"
          :key="p.id"
          :produto="p"
        />
      </div>
    </section>

    <section v-if="laptops.length">
      <h2 class="text-2xl font-semibold mb-4">Laptops</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProdutoCardComponent
          v-for="p in laptops"
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

const smartphones = ref([])
const laptops = ref([])

const fetchCategoria = async (categoria, targetArray) => {
  const res = await axios.get(`https://dummyjson.com/products/category/${categoria}`)
  targetArray.value = res.data.products.map(p => ({
    id: p.id,
    name: p.title,
    image: p.thumbnail,
    category: p.category,
    stock: p.stock,
    price: p.price
  }))
}

onMounted(() => {
  fetchCategoria('smartphones', smartphones)
  fetchCategoria('laptops', laptops)
})
</script>
