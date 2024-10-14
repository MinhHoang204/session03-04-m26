<template>
    <div>
      <todo-input @add-todo="addTodo"></todo-input>
      <todo-filters :filter="filter" @filter-todos="setFilter"></todo-filters>
      <ul>
        <todo-item
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @toggle-complete="toggleComplete"
          @delete-todo="deleteTodo"
          @edit-todo="editTodo"
        />
      </ul>
      <div class="actions">
        <button @click="deleteCompletedTodos">Xóa công việc hoàn thành</button>
        <button @click="deleteAllTodos">Xóa tất cả công việc</button>
      </div>
    </div>
</template>
  
<script>
  import TodoInput from './TodoInput.vue';
  import TodoFilters from './TodoFilters.vue';
  import TodoItem from './TodoItem.vue';
  
  export default {
    components: {
      TodoInput,
      TodoFilters,
      TodoItem,
    },
    data() {
      return {
        todos: [
          { id: 1, title: 'Quét nhà', completed: false },
          { id: 2, title: 'Giặt quần áo', completed: true },
          { id: 3, title: 'Nấu cơm', completed: false },
        ],
        filter: 'all',
      };
    },
    computed: {
      filteredTodos() {
        if (this.filter === 'completed') {
          return this.todos.filter(todo => todo.completed);
        } else if (this.filter === 'incomplete') {
          return this.todos.filter(todo => !todo.completed);
        }
        return this.todos;
      },
    },
    methods: {
      addTodo(newTodo) {
        const id = this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1;
        this.todos.push({ id, title: newTodo, completed: false });
      },
      toggleComplete(todo) {
        todo.completed = !todo.completed;
      },
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
      editTodo(todo) {
        const newTitle = prompt('Sửa công việc:', todo.title);
        if (newTitle) {
          todo.title = newTitle;
        }
      },
      deleteCompletedTodos() {
        this.todos = this.todos.filter(todo => !todo.completed);
      },
      deleteAllTodos() {
        this.todos = [];
      },
      setFilter(filter) {
        this.filter = filter;
      },
    },
  };
</script>
  
<style scoped>
  .actions {
    margin-top: 20px;
  }
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
  }
</style>
  