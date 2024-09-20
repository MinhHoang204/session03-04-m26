<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <span>{{ product.name }}: {{ product.quantity }}</span>
          <button @click="increaseQuantity(product.id)">Increase Quantity</button>
        </li>
      </ul>
      <h2>Total Quantity: {{ totalQuantity }}</h2>
    </div>
  </template>
  
<script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      // Danh sách sản phẩm với số lượng ban đầu
      const products = ref([
        { id: 1, name: 'Product 1', quantity: 1 },
        { id: 2, name: 'Product 2', quantity: 2 },
        { id: 3, name: 'Product 3', quantity: 3 }
      ]);
  
      // Hàm để tăng số lượng của từng sản phẩm
      const increaseQuantity = (productId) => {
        const product = products.value.find(p => p.id === productId);
        if (product) {
          product.quantity += 1;
        }
      };
  
      // Tính tổng số lượng sản phẩm trong giỏ hàng bằng computed
      const totalQuantity = computed(() => {
        return products.value.reduce((total, product) => total + product.quantity, 0);
      });
  
      return {
        products,
        increaseQuantity,
        totalQuantity
      };
    }
  };
</script>
  
<style scoped>
  button {
    margin-left: 10px;
  }
</style>
  