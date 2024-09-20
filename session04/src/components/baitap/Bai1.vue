<template>
    <div>
      <button @click="incrementCount">Click me</button>
      <p>Count: {{ count }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    methods: {
      incrementCount() {
        this.count++;
      }
    }
  };
</script>
  
<style scoped>
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
  