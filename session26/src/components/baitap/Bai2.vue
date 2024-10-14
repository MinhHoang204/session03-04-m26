<template>
    <div>
      <h2>Danh Sách Người Dùng</h2>
      <table border="1" cellspacing="0" cellpadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.userName }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ formatDate(user.dateOfBirth) }}</td>
            <td>{{ user.address }}</td>
            <td>
              <button @click="editUser(user.id)">Sửa</button>
              <button @click="deleteUser(user.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'ListUser',
    computed: {
      ...mapGetters(['getUsers']),
      users() {
        return this.getUsers;
      },
    },
    methods: {
      ...mapActions(['deleteUser']),
      formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString('vi-VN', options);
      },
      editUser(userId) {
        alert(`Chỉnh sửa người dùng với ID: ${userId}`);
        // Thêm logic chỉnh sửa ở đây
      },
    },
  };
</script>
  
<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    padding: 5px 10px;
    margin-right: 5px;
    border: 1px solid #000;
  }
</style>