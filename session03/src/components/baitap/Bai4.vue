<template>
    <div>
      <!-- Thẻ <div> thay đổi màu nền và class dựa trên biến isActive và backgroundColor -->
      <div :class="{'active': isActive}" :style="{ backgroundColor: backgroundColor }" class="box">
        This is a dynamic box.
      </div>
  
      <!-- Nút để chuyển đổi trạng thái của isActive -->
      <button @click="toggleActive">Toggle Active</button>
  
      <!-- Nút để thay đổi màu nền -->
      <button @click="changeColor('red')">Red</button>
      <button @click="changeColor('green')">Green</button>
      <button @click="changeColor('blue')">Blue</button>
    </div>
</template>
  
<script>
  export default {
    name: 'Exercise04',
    data() {
      return {
        // Biến boolean để xác định trạng thái active
        isActive: true,
        // Biến string để xác định màu nền
        backgroundColor: 'blue'
      };
    },
    methods: {
      // Phương thức để chuyển đổi trạng thái của isActive
      toggleActive() {
        this.isActive = !this.isActive;
      },
      // Phương thức để thay đổi màu nền
      changeColor(color) {
        this.backgroundColor = color;
      }
    }
  }
</script>
  
<style scoped>
  /* Định nghĩa class active */
  .active {
    color: #fff;
  }
  
  /* Style cho thẻ <div> box */
  .box {
    width: 200px;
    height: 200px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    text-align: center;
    border: 1px solid #000;
  }
</style>