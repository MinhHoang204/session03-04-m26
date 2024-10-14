<template>
    <div>
      <h2>Company Name: {{ company }}</h2>
      <button @click="changeCompany">Change state</button>
    </div>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'ChangeState',
    computed: {
      ...mapGetters(['getCompany']),
      company() {
        return this.getCompany; // Lấy giá trị company từ Vuex store
      },
    },
    methods: {
      ...mapActions(['changeCompany']), // Gọi action để thay đổi giá trị company
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
</style>