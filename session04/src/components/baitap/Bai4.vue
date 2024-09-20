<template>
    <div>
      <input v-model="inputValue" placeholder="Enter something" />
    </div>
</template>
  
<script>
  import { ref, watch } from 'vue';
  
  export default {
    setup() {
      // Tạo một ref để lưu trữ giá trị nhập vào từ input
      const inputValue = ref('');
  
      // Sử dụng watch để theo dõi sự thay đổi của giá trị trong input
      watch(inputValue, (newValue, oldValue) => {
        console.log(`Input value changed from "${oldValue}" to "${newValue}"`);
      });
  
      return {
        inputValue
      };
    }
  };
</script>