<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Navbar from './components/Navbar.vue';

  const count = ref(0);
  const clientIp = ref('');
  const locationResponse = ref({});

  function incrementCount() {
    count.value++;
  }

  onMounted(async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      clientIp.value = response.data.ip;
      // get approximate location
      const locationResponseAxios = await axios.get(
        `https://ipapi.co/${clientIp.value}/json/`
      );
      locationResponse.value = locationResponseAxios.data;
    } catch (error) {
      console.error('Failed to fetch client IP:', error);
    }
  });
</script>

<template>
  <marquee><p>{{ locationResponse.postal }}, {{ locationResponse.city }}, {{ locationResponse.region }}, {{ locationResponse.country_name }}</p></marquee>
  <Navbar />
  <div class="h-screen w-screen text-slate-400 bg-black font-bold text-center">
    <h1 class="font-rubik-burned text-5xl underline">FardBux™️</h1>
    <p>fardbux counter: {{ count }}</p>
    <button class="underline" @click="incrementCount">get fardebuicks</button>
    <p>ip adres: {{ clientIp }}</p>
    <p>hows {{ locationResponse.country_name }} going?</p>
      <div class="flex justify-center">
        <a>approx.</a>
        <a>City: {{ locationResponse.city }}</a>
        <a>Region: {{ locationResponse.region }}</a>
        <a>Region Code: {{ locationResponse.region_code }}</a>
        <a>Country: {{ locationResponse.country }}</a>
        <a>Country Name: {{ locationResponse.country_name }}</a>
        <a>Country Code: {{ locationResponse.country_code }}</a>
        <a>Country Code ISO3: {{ locationResponse.country_code_iso3 }}</a>
        <a>Country Capital: {{ locationResponse.country_capital }}</a>
        <a>Country TLD: {{ locationResponse.country_tld }}</a>
        <a>Continent Code: {{ locationResponse.continent_code }}</a>
        <a>Postal: {{ locationResponse.postal }}</a>
        <a>Timezone: {{ locationResponse.timezone }}</a>
        <a>ASN: {{ locationResponse.asn }}</a>
        <a>Organization: {{ locationResponse.org }}</a>
      </div>
  </div>
</template>
