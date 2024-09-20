<template>
    <div>
      <p>Company: {{ company }}</p>
      <p>Age: {{ age }}</p>
      <button @click="changeData">Change data</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        company: 'Rikkei Academy',
        age: 2
      };
    },
    methods: {
      changeData() {
        this.company = 'Rikkei Education';
        this.age = 1;
      }
    }
  };
</script>
  
<style scoped>
  button {
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    cursor: pointer;
  }
  
  p {
    margin: 5px 0;
  }
</style>
  