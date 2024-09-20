<template>
    <div>
      <input type="number" v-model.number="number" placeholder="Enter a number" />
      <p>Current number: {{ number }}</p>
      <p>Square of the number: {{ squaredNumber }}</p>
    </div>
</template>
  
<script>
  import { ref, computed, watch } from 'vue';
  
  export default {
    setup() {
      // Tạo một biến ref để lưu trữ giá trị số
      const number = ref(0);
  
      // Tạo một thuộc tính computed để tính giá trị bình phương của số
      const squaredNumber = computed(() => number.value ** 2);
  
      // Sử dụng watch để theo dõi sự thay đổi của giá trị number
      watch(number, (newValue, oldValue) => {
        console.log(`Number changed from ${oldValue} to ${newValue}`);
      });
  
      return {
        number,
        squaredNumber
      };
    }
  };
</script>