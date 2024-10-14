<template>
    <div>
      <h2>Danh Sách Sản Phẩm</h2>
      <table border="1" cellspacing="0" cellpadding="10">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.productName }}</td>
            <td>{{ formatPrice(product.price) }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button @click="editProduct(product.id)">Sửa</button>
              <button @click="deleteProduct(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'ListProduct',
    computed: {
      ...mapGetters(['getProducts']),
      products() {
        return this.getProducts;
      },
    },
    methods: {
      ...mapActions(['deleteProduct']),
      formatPrice(price) {
        return price.toLocaleString('vi-VN') + ' đ';
      },
      editProduct(productId) {
        alert(`Chỉnh sửa sản phẩm với ID: ${productId}`);
        // Thêm logic chỉnh sửa sản phẩm ở đây
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