<template>
    <div>
      <!-- Input với thuộc tính disable được ràng buộc với biến isDisable -->
      <input type="text" :disabled="isDisable" placeholder="Enter text here" />
  
      <!-- Nút để chuyển đổi trạng thái của isDisable -->
      <button @click="toggleDisable">
        Toggle Disable
      </button>
    </div>
</template>
  
<script>
  export default {
    name: 'Exercice03',
    data() {
      return {
        // Biến boolean để xác định trạng thái disable
        isDisable: true
      };
    },
    methods: {
      // Phương thức để thay đổi trạng thái của isDisable
      toggleDisable() {
        this.isDisable = !this.isDisable;
      }
    }
  }
</script>
  
<style scoped>
  input {
    padding: 10px;
    margin: 10px 0;
    width: 200px;
  }
  
  button {
    padding: 10px;
  }
</style>