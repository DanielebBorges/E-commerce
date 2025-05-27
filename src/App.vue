<template>
<div>
  <Navbar/>
  <div>
    <router-view></router-view>
  </div>
  <Footer/>
</div>
</template>

<script setup>
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>
