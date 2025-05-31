<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Beleza e Cuidados Pessoais</h1>

    <section v-if="fragrances.length">
      <h2 class="text-2xl font-semibold mb-4">Fragrances</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent
          v-for="p in fragrances"
          :key="p.id"
          :produto="p"
        />
      </div>
    </section>

    <section v-if="skincare.length">
      <h2 class="text-2xl font-semibold mb-4">Skincare</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProdutoCardComponent
          v-for="p in skincare"
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

const fragrances = ref([])
const skincare = ref([])

const fetchCategoria = async (categoria, targetArray) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/category/${categoria}`)
    targetArray.value = res.data.products.map(p => ({
      id: p.id,
      name: p.title,        
      image: p.thumbnail,
      category: p.category,
      stock: p.stock,
      price: p.price
    }))
  } catch (error) {
    console.error(`Erro ao buscar categoria ${categoria}:`, error)
  }
}

onMounted(async () => {
  await fetchCategoria('fragrances', fragrances)
  await fetchCategoria('skincare', skincare)
})
</script>

