<template>
    <div class="grid grid-cols-5 gap-4">
      <div v-for="poop in poops" :key="poop.id" class="text-4xl" @click="removePoop(poop.id)">
        💩
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        poops: Array.from({ length: 25 }, (_, i) => ({ id: i })),
      };
    },
    methods: {
      removePoop(id) {
        this.poops = this.poops.filter(poop => poop.id !== id);
      },
    },
  };
  </script>
  
  <style scoped>
  .grid {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  </style>