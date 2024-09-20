<template>
    <div>
      <!-- Thẻ a với đường dẫn được kiểm tra -->
      <a href="http://www.google.com" @click.prevent="checkLink">Click me</a>
    </div>
</template>
  
<script>
  export default {
    name: 'Exercise08',
    methods: {
      // Phương thức kiểm tra đường dẫn khi nhấn vào liên kết
      checkLink(event) {
        const link = event.target.href;
        
        // Kiểm tra nếu đường dẫn không bắt đầu với "https://"
        if (!link.startsWith('https://')) {
          // Ngăn chặn chuyển hướng và hiển thị thông báo
          alert('Đường dẫn không hợp lệ');
        } else {
          // Cho phép chuyển hướng đến đường dẫn
          window.location.href = link;
        }
      }
    }
  }
</script>
  
<style scoped>
  
  a {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>  