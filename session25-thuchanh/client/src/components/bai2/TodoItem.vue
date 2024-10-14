<template>
    <li :key="todo.id">
      <input type="checkbox" v-model="todo.completed" @change="toggleComplete(todo)" />
      <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
      <button @click="editTodo(todo)">✏️</button>
      <button @click="deleteTodo(todo.id)">🗑️</button>
    </li>
</template>
  
<script>
  export default {
    props: ['todo'],
    methods: {
      toggleComplete(todo) {
        this.$emit('toggle-complete', todo);
      },
      editTodo(todo) {
        this.$emit('edit-todo', todo);
      },
      deleteTodo(id) {
        this.$emit('delete-todo', id);
      },
    },
  };
</script>
  
<style scoped>
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .completed {
    text-decoration: line-through;
  }
  button {
    margin-left: 10px;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
</style>
  