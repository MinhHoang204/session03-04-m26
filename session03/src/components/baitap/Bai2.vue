<template>
    <div>
      <!-- Ràng buộc dữ liệu cho thuộc tính id và class -->
      <h1 :id="elementId" :class="elementClass">Heading</h1>
    </div>
</template>
  
<script>
  export default {
    name: 'Exercice02',
    data() {
      return {
        // Biến để lưu giá trị id cho phần tử
        elementId: 'heading',
        // Biến để lưu giá trị class cho phần tử
        elementClass: 'heading'
      };
    }
  }
</script>
  
<style scoped>
  .heading {
    color: blue;
    font-size: 24px;
  }
</style>