<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Navbar from './components/Navbar.vue';

  const count = ref(0);
  const clientIp = ref('');

  function incrementCount() {
    count.value++;
  }

  onMounted(async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      clientIp.value = response.data.ip;
    } catch (error) {
      console.error('Failed to fetch client IP:', error);
    }
  });
</script>

<template>
  <Navbar />
  <div class="h-screen w-screen text-slate-400 bg-black font-bold text-center">
    <h1 class="font-rubik-burned text-5xl underline">FardBux™️</h1>
    <p>fardbux counter: {{ count }}</p>
    <p>ip address: {{ ipAddress }}</p>
    <button class="underline" @click="incrementCount">get fardebuicks</button>
    <p>ip adres: {{ clientIp }}</p>
  </div>
</template>
