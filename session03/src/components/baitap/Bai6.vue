<template>
    <div>
      <!-- Nút bấm với nội dung "Get param" -->
      <button @click="handleClick('Rikkei Academy')">Get param</button>
    </div>
</template>
  
<script>
  export default {
    name: 'Exercise06',
    methods: {
      // Phương thức xử lý sự kiện click, nhận giá trị và in ra console
      handleClick(param) {
        console.log(param);
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
  