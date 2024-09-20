<template>
    <div>
      <!-- Tạo form đơn giản với một input và một nút submit -->
      <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="Enter something" v-model="inputValue" />
        <button type="submit">Submit</button>
      </form>
    </div>
</template>
  
<script>
  export default {
    name: 'Exercise07',
    data() {
      return {
        // Biến để lưu giá trị nhập vào từ người dùng
        inputValue: ''
      };
    },
    methods: {
      // Hàm xử lý khi form được submit
      handleSubmit() {
        // Ngăn chặn hành vi mặc định và in ra console
        console.log('Form submission prevented!');
      }
    }
  }
</script>
  
<style scoped>
  
  form {
    margin: 20px 0;
  }
  
  input {
    padding: 5px;
    margin-right: 10px;
  }
  
  button {
    padding: 5px 10px;
    cursor: pointer;
  }
</style>
  