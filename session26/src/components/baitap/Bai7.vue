<template>
    <div :class="{'dark-mode': isDarkMode, 'light-mode': !isDarkMode}" class="app-container">
      <label>
        <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode" />
        Dark Mode
      </label>
      <p>This is an example of dark mode functionality!</p>
    </div>
</template>
  
<script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'DarkMode',
    computed: {
      ...mapGetters(['getDarkMode']),
      isDarkMode() {
        return this.getDarkMode; // Lấy trạng thái dark mode từ Vuex store
      },
    },
    methods: {
      ...mapActions(['toggleDarkMode']), // Gọi action để thay đổi chế độ
    },
  };
</script>
  
<style scoped>
  .app-container {
    padding: 20px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .light-mode {
    background-color: #ffffff;
    color: #000000;
  }
  
  .dark-mode {
    background-color: #333333;
    color: #ffffff;
  }
  
  input[type="checkbox"] {
    margin-right: 10px;
  }
</style>