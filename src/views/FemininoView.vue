
<template>
  <div class="px-6 pb-20">
    <h1 class="text-3xl font-bold text-center mb-6 font-display">Moda Feminina</h1>


    <section v-if="tops.length">
      <h2 class="text-2xl font-semibold mb-4">Tops</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent v-for="p in tops" :key="p.id" :produto="p" />
      </div>
    </section>


    <section v-if="womensDresses.length">
      <h2 class="text-2xl font-semibold mb-4">Vestidos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
        <ProdutoCardComponent v-for="p in womensDresses" :key="p.id" :produto="p" />
      </div>
    </section>

    <section v-if="womensShoes.length">
      <h2 class="text-2xl font-semibold mb-4">Calçados</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ProdutoCardComponent v-for="p in womensShoes" :key="p.id" :produto="p" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProdutoCardComponent from '../components/ProdutosCardComponent.vue'


const tops = ref([])
const womensDresses = ref([])
const womensShoes = ref([])

const fetchCategoria = async (categoria, destino) => {
  const res = await axios.get(`https://dummyjson.com/products/category/${categoria}`)
  destino.value = res.data.products.map(p => ({
    id: p.id,
    name: p.title,
    image: p.thumbnail,
    category: p.category,
    stock: p.stock,
    price: p.price
  }))
}

onMounted(() => {
  fetchCategoria('tops', tops)
  fetchCategoria('womens-dresses', womensDresses)
  fetchCategoria('womens-shoes', womensShoes)
})
</script>
