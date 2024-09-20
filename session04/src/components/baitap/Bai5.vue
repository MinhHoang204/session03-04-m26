<template>
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <span>{{ product.name }}: {{ product.quantity }} </span>
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
      // Danh sách sản phẩm
      const products = ref([
        { id: 1, name: 'Mèn mén loại 1', quantity: 3 },
        { id: 2, name: 'Mèn mén loại 2', quantity: 5 },
        { id: 3, name: 'Mèn mén loại 3', quantity: 1 }
      ]);
  
      // Tăng số lượng sản phẩm
      const increaseQuantity = (productId) => {
        const product = products.value.find(p => p.id === productId);
        if (product) {
          product.quantity += 1;
        }
      };
  
      // Tính tổng số lượng sản phẩm bằng computed
      const totalQuantity = computed(() => {
        return products.value.reduce((sum, product) => sum + product.quantity, 0);
      });
  
      return {
        products,
        increaseQuantity,
        totalQuantity
      };
    }
  };
</script>