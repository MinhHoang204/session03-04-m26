<template>
    <div>
      <!-- Hiển thị hình ảnh bằng ràng buộc dữ liệu -->
      <img :src="image" alt="Example Image" />
    </div>
</template>
  
<script>
  export default {
    name:'Bai1',
    data() {
      return {        
        image: 'https://via.placeholder.com/150'
      };
    }
  }
</script>
  