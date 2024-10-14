<template>
    <div class="filters">
      <button :class="{ active: filter === 'all' }" @click="filterTodos('all')">Tất cả</button>
      <button :class="{ active: filter === 'completed' }" @click="filterTodos('completed')">Hoàn thành</button>
      <button :class="{ active: filter === 'incomplete' }" @click="filterTodos('incomplete')">Đang thực hiện</button>
    </div>
</template>
  
<script>
  export default {
    props: ['filter'],
    methods: {
      filterTodos(status) {
        this.$emit('filter-todos', status);
      },
    },
  };
</script>
  
<style scoped>
  .filters {
    margin-bottom: 20px;
  }
  button {
    margin-right: 10px;
    padding: 8px 16px;
    border: none;
    cursor: pointer;
    background-color: #e0e0e0;
  }
  button.active {
    background-color: #007bff;
    color: white;
  }
</style>
  