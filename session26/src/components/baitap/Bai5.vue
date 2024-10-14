<template>
    <div>
      <h2>Generated Random Numbers:</h2>
      <ul>
        <li v-for="(number, index) in randomNumbers" :key="index">{{ number }}</li>
      </ul>
      <button @click="generateRandomNumber">Generate Random Number</button>
    </div>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'RandomNumber',
    computed: {
      ...mapGetters(['getRandomNumbers']),
      randomNumbers() {
        return this.getRandomNumbers; // Lấy danh sách số ngẫu nhiên từ Vuex store
      },
    },
    methods: {
      ...mapActions(['generateRandomNumber']), // Gọi action để tạo số ngẫu nhiên mới
    },
  };
  </script>
  
<style scoped>
  button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 5px 0;
    font-size: 18px;
  }
</style>