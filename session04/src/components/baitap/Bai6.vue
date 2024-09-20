<template>
    <div>
      <input type="number" v-model.number="inputValue" placeholder="Enter amount" />
      <button @click="addToCart">Add to cart</button>
      <p>Current amount: {{ inputValue }}</p>
      <p>Total amount in cart: {{ totalAmount }}</p>
    </div>
</template>
  
<script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      // Biến để lưu trữ tổng tiền và giá trị từ input
      const totalAmount = ref(0);
      const inputValue = ref(0);
  
      // Tạo thuộc tính computed để tính tổng tiền
      const computedTotalAmount = computed(() => totalAmount.value);
  
      // Phương thức để thêm giá trị từ input vào tổng tiền
      const addToCart = () => {
        totalAmount.value += inputValue.value;
        inputValue.value = 0; // Reset giá trị từ input
      };
  
      return {
        inputValue,
        totalAmount: computedTotalAmount,
        addToCart
      };
    }
  };
</script>