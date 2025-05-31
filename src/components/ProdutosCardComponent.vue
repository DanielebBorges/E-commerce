<template>
  <div class="rounded-lg p-4 text-black shadow-md bg-gray-100 hover:bg-gray-300 hover:shadow-xl">
    <img :src="produto.image" :alt="produto.name" class="mx-auto mb-2 h-20 object-contain">
    <h2 class="text-center font-bold">{{ produto.name }}</h2>
    <p class="text-center text-sm uppercase">{{ produto.category }}</p>
    <p class="text-center text-sm uppercase">Em estoque: {{ produto.stock }}</p>
    <p class="text-center text-[#c115ef] font-semibold mt-1">R$ {{ produto.price }}</p>
  </div>
</template>

<script setup>
defineProps({
  produto: Object
})
</script>
