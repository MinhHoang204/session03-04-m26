<template>
    <div class="input-group">
      <input v-model="newTodo" type="text" placeholder="Nhập tên công việc" />
      <button @click="addTodo">Thêm công việc</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        newTodo: '',
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.$emit('add-todo', this.newTodo);
          this.newTodo = ''; // Clear input field
        }
      },
    },
  };
</script>
  
<style scoped>
  .input-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  input {
    width: 80%;
    padding: 10px;
  }
</style>
  