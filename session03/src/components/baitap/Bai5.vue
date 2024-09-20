<template>
    <div>
      <!-- Button với nội dung là "Click me" -->
      <button @click="handleClick">Click me</button>
    </div>
</template>
  
<script>
  export default {
    name: 'Exercise05',
    methods: {
      // Phương thức xử lý sự kiện click và in ra console
      handleClick() {
        console.log('Clicked');
      }
    }
  }
</script>
  
<style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
  