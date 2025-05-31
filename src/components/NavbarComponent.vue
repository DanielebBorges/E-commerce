<template>
    <nav class="bg-[#c115ef] text-white py-4 px-8 flex justify-between items-center ">
        <h1 class="text-lg front-bold font-display">
            Bardaniê
        </h1>
        <ul class="flex gap-6">
            <li><router-link to="/" class="hover:underline">Produtos</router-link></li>

        </ul>
    </nav>
 

</template>
<style>
:root {
  --font-display: 'Abril Fatface', cursive;
}

.font-display {
  font-family: var(--font-display);
}
</style>
