
<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Acessórios</h1>

  
    <section v-if="mensWatches.length">
      <h2 class="text-2xl font-semibold mb-4">Relógios Masculinos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent v-for="p in mensWatches" :key="p.id" :produto="p" />
      </div>
    </section>


    <section v-if="womensWatches.length">
      <h2 class="text-2xl font-semibold mb-4">Relógios Femininos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent v-for="p in womensWatches" :key="p.id" :produto="p" />
      </div>
    </section>

    <section v-if="womensBags.length">
      <h2 class="text-2xl font-semibold mb-4">Bolsas Femininas</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent v-for="p in womensBags" :key="p.id" :produto="p" />
      </div>
    </section>

    <section v-if="womensJewellery.length">
      <h2 class="text-2xl font-semibold mb-4">Joias</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent v-for="p in womensJewellery" :key="p.id" :produto="p" />
      </div>
    </section>

  
    <section v-if="sunglasses.length">
      <h2 class="text-2xl font-semibold mb-4">Óculos de Sol</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProdutoCardComponent v-for="p in sunglasses" :key="p.id" :produto="p" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProdutoCardComponent from '../components/ProdutosCardComponent.vue'

const mensWatches = ref([])
const womensWatches = ref([])
const womensBags = ref([])
const womensJewellery = ref([])
const sunglasses = ref([])

const fetchCategoria = async (categoria, target) => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/category/${categoria}`)
    target.value = res.data.products.map(p => ({
      id: p.id,
      name: p.title,
      image: p.thumbnail,
      category: p.category,
      stock: p.stock,
      price: p.price
    }))
  } catch (err) {
    console.error(`Erro ao buscar ${categoria}`, err)
  }
}

onMounted(() => {
  fetchCategoria('mens-watches', mensWatches)
  fetchCategoria('womens-watches', womensWatches)
  fetchCategoria('womens-bags', womensBags)
  fetchCategoria('womens-jewellery', womensJewellery)
  fetchCategoria('sunglasses', sunglasses)
})
</script>
