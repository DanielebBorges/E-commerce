<template>
    <nav class="bg-[#c115ef] text-white py-4 px-8 flex justify-between items-center ">
        <h1 class="text-lg front-bold font-display">
            Bardaniê
        </h1>
        <ul class="flex gap-6">
            <li><router-link to="/" class="hover:underline">Produtos</router-link></li>
            <li><router-link to="/Eletronicos" class="hover:underline">Eletônicos</router-link></li>
            <li><router-link to="/beleza" class="hover:underline">Beleza</router-link></li>
            <li><router-link to="/alimentos" class="hover:underline">Alimentos</router-link></li>
            <li><router-link to="/casa" class="hover:underline">Casa</router-link></li>
            <li><router-link to="/feminino" class="hover:underline">Moda Feminina</router-link></li>
            <li><router-link to="/masculino" class="hover:underline">Moda Masculina</router-link></li>
            <li><router-link to="/acessorios" class="hover:underline">Acessórios</router-link></li>
            <li><router-link to="/automativo" class="hover:underline">Automativos</router-link></li>
            
            
            

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
