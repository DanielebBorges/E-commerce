<template>
  <div class="max-w-4xl mx-auto p-6 items-center">
    <div class="grid md:grid-cols-2 gap-8">
      <img :src="produto.thumbnail" :alt="produto.title" class="w-full object-contain rounded shadow" />
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ produto.title }}</h1>
        <p class="text-gray-700 mb-4">{{ produto.description }}</p>
        <p class="text-xl font-semibold text-[#c115ef] mb-2">R$ {{ produto.price }}</p>
        <p class="text-sm text-gray-600 mb-1"><strong>Marca:</strong> {{ produto.brand }}</p>
        <p class="text-sm text-gray-600 mb-1"><strong>Categoria:</strong> {{ produto.category }}</p>
        <p class="text-sm text-gray-600 mb-1"><strong>Quantidade em estoque:</strong> {{ produto.stock }}</p>
        <p class="text-sm text-yellow-500"><strong> Avaliação:</strong> {{ produto.rating }}</p>
      </div>
    </div>

    <div class="flex justify-center mt-6">
      <router-link
        to="/"
        class="bg-[#c115ef] px-6 py-4 rounded hover:bg-[#9711bb] text-white"
      >
        ← Voltar
      </router-link>
    </div>
    
  </div>
</template>


<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const produto = ref({})

const fetchProduto = async () => {
  const res = await axios.get(`https://dummyjson.com/products/${route.params.id}`)
  produto.value = res.data
}

onMounted(fetchProduto)
</script>


