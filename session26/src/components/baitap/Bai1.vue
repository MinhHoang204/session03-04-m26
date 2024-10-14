<template>
    <div class="profile">
      <h2>Thông Tin Người Dùng</h2>
      <ul>
        <li><strong>ID:</strong> {{ user.id }}</li>
        <li><strong>Tên Người Dùng:</strong> {{ user.userName }}</li>
        <li><strong>Giới Tính:</strong> {{ user.gender }}</li>
        <li><strong>Ngày Sinh:</strong> {{ formattedDateOfBirth }}</li>
        <li><strong>Địa Chỉ:</strong> {{ user.address }}</li>
      </ul>
    </div>
</template>
  
<script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'Profile',
    computed: {
      ...mapGetters(['getUser']),
      user() {
        return this.getUser;
      },
      formattedDateOfBirth() {
        if (this.user.dateOfBirth) {
          const date = new Date(this.user.dateOfBirth);
          return date.toLocaleDateString();
        }
        return '';
      },
    },
  };
</script>
  
<style scoped>
  .profile {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  
  .profile h2 {
    margin-bottom: 15px;
  }
  
  .profile ul {
    list-style-type: none;
    padding: 0;
  }
  
  .profile li {
    margin-bottom: 10px;
  }
</style>
  