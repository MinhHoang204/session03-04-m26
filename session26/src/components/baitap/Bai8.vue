<template>
    <div class="language-container">
      <h2>{{ greetingMessage }}</h2>
      <button @click="setLanguage('vi')">Tiếng Việt</button>
      <button @click="setLanguage('en')">English</button>
    </div>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'ChangeLanguage',
    computed: {
      ...mapGetters(['getLanguage']),
      greetingMessage() {
        return this.getLanguage === 'vi' ? 'Xin chào! Chọn ngôn ngữ:' : 'Hello! Choose a language:';
      },
    },
    methods: {
      ...mapActions(['changeLanguage']), // Gọi action để thay đổi ngôn ngữ
      setLanguage(language) {
        this.changeLanguage(language); // Cập nhật ngôn ngữ
      },
    },
  };
</script>
  
<style scoped>
  .language-container {
    padding: 20px;
    text-align: center;
  }
  
  button {
    margin: 0 5px;
    padding: 10px;
    border: none;
    background-color: #4CAF50; /* Xanh lá cây */
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #45a049; /* Tối hơn khi hover */
  }
</style>