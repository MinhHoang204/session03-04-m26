<template>
    <div>
      <h2>Counter: {{ counter }}</h2>
      <button @click="incrementCounter">Increment</button>
      <button @click="decrementCounter">Decrement</button>
    </div>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'Counter',
    computed: {
      ...mapGetters(['getCounter']),
      counter() {
        return this.getCounter; // Lấy giá trị counter từ Vuex store
      },
    },
    methods: {
      ...mapActions(['incrementCounter', 'decrementCounter']), // Gọi các actions từ Vuex store
    },
  };
</script>
  
<style scoped>
  button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #45a049;
  }
</style>